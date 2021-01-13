// SPDX-License-Identifier: ISC

// https://etherscan.io/address/0xa23c6f2d85fe47e613ce6bbb40e74acb49ae281a#code

pragma solidity 0.5.16;

import {ERC20Detailed} from '@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol';
import {IERC20} from '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import {Math} from '@openzeppelin/contracts/math/Math.sol';
import {SafeERC20} from '@openzeppelin/contracts/token/ERC20/SafeERC20.sol';
import {SafeMath} from '@openzeppelin/contracts/math/SafeMath.sol';
import {IUniswapV2Router02} from '../../interfaces/IUniswapV2Router02.sol';

import {IController} from '../../interfaces/IController.sol';
import {IStrategy} from '../../interfaces/IStrategy.sol';
import {Controllable} from '../../Controllable.sol';

import {ProfitNotifier} from '../ProfitNotifier.sol';
import {DEGORewardInterface} from './DEGORewardInterface.sol';


contract DEGOSimpleStrategy is IStrategy, Controllable, ProfitNotifier {

  using SafeMath for uint256;
  using SafeERC20 for IERC20;

  ERC20Detailed public underlying; // underlying here would be Uniswap's LP Token / Pair token

  address public vault;
  bool pausedInvesting = false; // When this flag is true, the strategy will not be able to invest. But users should be able to withdraw.

  DEGORewardInterface public rewardPool;
  address public rewardToken; // unfortunately, the interface is not unified for rewardToken for all the variants

  // a flag for disabling selling for simplified emergency exit
  bool public sell = true;
  uint256 public sellFloor = 10e16;

  // UniswapV2Router02
  // https://uniswap.org/docs/v2/smart-contracts/router02/
  // https://etherscan.io/address/0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D
  address public constant uniswapRouterV2 = address(0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D);

  address[] public uniswapRoute;

  // These tokens cannot be claimed by the controller
  mapping (address => bool) public unsalvagableTokens;

  event ProfitsNotCollected();

  modifier restricted() {
    require(msg.sender == vault || msg.sender == controller()
      || msg.sender == governance(),
      "The sender has to be the controller, governance, or vault");
    _;
  }

  // This is only used in `investAllUnderlying()`
  // The user can still freely withdraw from the strategy
  modifier onlyNotPausedInvesting() {
    require(!pausedInvesting, "Action blocked as the strategy is in emergency state");
    _;
  }

  constructor(
    address _storage,
    address _underlying,
    address _vault,
    address _rewardPool,
    address _rewardToken
  )
  ProfitNotifier(_storage, _underlying)
  public {
    underlying = ERC20Detailed(_underlying);
    vault = _vault;
    rewardPool = DEGORewardInterface(_rewardPool);
    rewardToken = _rewardToken;

    unsalvagableTokens[_underlying] = true;
    unsalvagableTokens[_rewardToken] = true;
  }

  function depositArbCheck() public view returns(bool) {
    return true;
  }

  /*
  *   In case there are some issues discovered about the pool or underlying asset
  *   Governance can exit the pool properly
  *   The function is only used for emergency to exit the pool
  */
  function emergencyExit() public onlyGovernance {
    rewardPool.exit();
    pausedInvesting = true;
  }

  /*
  *   Resumes the ability to invest into the underlying reward pools
  */

  function continueInvesting() public onlyGovernance {
    pausedInvesting = false;
  }

  /**
  * Sets the route for liquidating the reward token to the underlying token
  */
  function setLiquidationRoute(address[] memory _uniswapRoute) public onlyGovernance {
    require(rewardToken == _uniswapRoute[0],
      "The first token of the Uniswap route must be the reward token");
    require(address(underlying) == _uniswapRoute[(_uniswapRoute.length).sub(1)],
      "The last token of the Uniswap route must be the underlying token");

    uniswapRoute = _uniswapRoute;
  }

  // We assume that all the tradings can be done on Uniswap
  function _liquidateReward() internal {
    uint256 rewardBalance = IERC20(rewardToken).balanceOf(address(this));
    uint256 initialUnderlyingBalance = IERC20(underlying).balanceOf(address(this));
    if (!sell || rewardBalance < sellFloor || uniswapRoute.length == 0) {
      // Profits can be disabled for possible simplified and rapid exit
      emit ProfitsNotCollected();
      return;
    }

    if (rewardBalance > 0 ) {

      // allow Uniswap to sell our reward
      uint256 amountOutMin = 1;

      IERC20(rewardToken).safeApprove(uniswapRouterV2, 0);
      IERC20(rewardToken).safeApprove(uniswapRouterV2, rewardBalance);

      // sell DEGO for underlying
      // we can accept 1 as minimum because this is called only by a trusted role

      IUniswapV2Router02(uniswapRouterV2).swapExactTokensForTokensSupportingFeeOnTransferTokens(
        rewardBalance,
        amountOutMin,
        uniswapRoute,
        address(this),
        block.timestamp
      );
    }

    notifyProfit(initialUnderlyingBalance, IERC20(underlying).balanceOf(address(this)));
  }

  /*
  *   Stakes everything the strategy holds into the reward pool
  */
  function investAllUnderlying() internal onlyNotPausedInvesting {
    // this check is needed, because most of the SNX reward pools will revert if
    // you try to stake(0).
    if(underlying.balanceOf(address(this)) > 0) {
      IERC20(underlying).safeApprove(address(rewardPool), underlying.balanceOf(address(this)));
      // DEGO has a referal code as the second parameter, leaving it blank since we don't have any
      rewardPool.stake(underlying.balanceOf(address(this)), "");
    }
  }

  /*
  *   Withdraws all the asset to the vault
  */
  function withdrawAllToVault() public restricted {
    if (address(rewardPool) != address(0)) {
      rewardPool.exit();
    }
    _liquidateReward();
    IERC20(underlying).safeTransfer(vault, underlying.balanceOf(address(this)));
  }

  /*
  *   Withdraws all the asset to the vault
  */
  function withdrawToVault(uint256 amount) public restricted {
    // Typically there wouldn't be any amount here
    // however, it is possible because of the emergencyExit
    if(amount > underlying.balanceOf(address(this))){
      // While we have the check above, we still using SafeMath below
      // for the peace of mind (in case something gets changed in between)
      uint256 needToWithdraw = amount.sub(underlying.balanceOf(address(this)));
      rewardPool.withdraw(Math.min(rewardPool.balanceOf(address(this)), needToWithdraw));
    }

    IERC20(underlying).safeTransfer(vault, amount);
  }

  /*
  *   Note that we currently do not have a mechanism here to include the
  *   amount of reward that is accrued.
  */
  function investedUnderlyingBalance() external view returns (uint256) {
    if (address(rewardPool) == address(0)) {
      return underlying.balanceOf(address(this));
    }
    // Adding the amount locked in the reward pool and the amount that is somehow in this contract
    // both are in the units of "underlying"
    // The second part is needed because there is the emergency exit mechanism
    // which would break the assumption that all the funds are always inside of the reward pool
    return rewardPool.balanceOf(address(this)).add(underlying.balanceOf(address(this)));
  }

  /*
  *   Governance or Controller can claim coins that are somehow transferred into the contract
  *   Note that they cannot come in take away coins that are used and defined in the strategy itself
  *   Those are protected by the "unsalvagableTokens". To check, see where those are being flagged.
  */
  function salvage(address recipient, address token, uint256 amount) external onlyControllerOrGovernance {
     // To make sure that governance cannot come in and take away the coins
    require(!unsalvagableTokens[token], "token is defined as not salvagable");
    IERC20(token).safeTransfer(recipient, amount);
  }

  /*
  *   Get the reward, sell it in exchange for underlying, invest what you got.
  *   It's not much, but it's honest work.
  *
  *   Note that although `onlyNotPausedInvesting` is not added here,
  *   calling `investAllUnderlying()` affectively blocks the usage of `doHardWork`
  *   when the investing is being paused by governance.
  */
  function doHardWork() external onlyNotPausedInvesting restricted {
    rewardPool.getReward();
    _liquidateReward();
    investAllUnderlying();
  }

  /**
  * Can completely disable claiming UNI rewards and selling. Good for emergency withdraw in the
  * simplest possible way.
  */
  function setSell(bool s) public onlyGovernance {
    sell = s;
  }

  /**
  * Sets the minimum amount of CRV needed to trigger a sale.
  */
  function setSellFloor(uint256 floor) public onlyGovernance {
    sellFloor = floor;
  }
}
