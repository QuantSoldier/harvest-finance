// SPDX-License-Identifier: ISC

// https://etherscan.io/address/0x895cc1b32aa6f5fedf0e113eac556309ad225322#code

pragma solidity 0.5.16;

import {BaseUpgradeabilityProxy} from '@openzeppelin/upgrades/contracts/upgradeability/BaseUpgradeabilityProxy.sol';
import {IUpgradeSource} from '../../interfaces/IUpgradeSource.sol';

contract StrategyProxy is BaseUpgradeabilityProxy {

  constructor(address _implementation) public {
    _setImplementation(_implementation);
  }

  /**
  * The main logic. If the timer has elapsed and there is a schedule upgrade,
  * the governance can upgrade the strategy
  */
  function upgrade() external {
    (bool should, address newImplementation) = IUpgradeSource(address(this)).shouldUpgrade();
    require(should, "Upgrade not scheduled");
    _upgradeTo(newImplementation);

    // the finalization needs to be executed on itself to update the storage of this proxy
    // it also needs to be invoked by the governance, not by address(this), so delegatecall is needed
    (bool success, bytes memory result) = address(this).delegatecall(
      abi.encodeWithSignature("finalizeUpgrade()")
    );

    require(success, "Issue when finalizing the upgrade");
  }

  function implementation() external view returns (address) {
    return _implementation();
  }
}
