// SPDX-License-Identifier: ISC

// FARM Token
// https://etherscan.io/address/0xa0246c9032bc3a600820415ae600c6388619a14d#code

pragma solidity 0.5.16;

import {Context} from '@openzeppelin/contracts/GSN/Context.sol';
import {ERC20} from '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import {ERC20Capped} from '@openzeppelin/contracts/token/ERC20/ERC20Capped.sol';
import {ERC20Detailed} from '@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol';
import {ERC20Mintable} from '@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol';
import {IERC20} from '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import {Ownable} from '@openzeppelin/contracts/ownership/Ownable.sol';
import {SafeERC20} from '@openzeppelin/contracts/token/ERC20/SafeERC20.sol';
import {SafeMath} from '@openzeppelin/contracts/math/SafeMath.sol';
import {Roles} from '@openzeppelin/contracts/access/Roles.sol';
import {MinterRole} from '@openzeppelin/contracts/access/roles/MinterRole.sol';

import {Governable} from './Governable.sol';
import {Storage} from './Storage.sol';


contract RewardToken is ERC20, ERC20Detailed, ERC20Capped, Governable {

  uint256 public constant HARD_CAP = 5 * (10 ** 6) * (10 ** 18);

  constructor(address _storage) public
  ERC20Detailed("FARM Reward Token", "FARM", 18)
  ERC20Capped(HARD_CAP)
  Governable(_storage) {
    // msg.sender should not be a minter
    renounceMinter();
    // governance will become the only minter
    _addMinter(governance());
  }

  /**
  * Overrides adding new minters so that only governance can authorized them.
  */
  function addMinter(address _minter) public onlyGovernance {
    super.addMinter(_minter);
  }
}
