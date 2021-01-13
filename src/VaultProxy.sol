// SPDX-License-Identifier: ISC

// Vault Proxy Logic contract
// FARM_WETH: https://etherscan.io/address/0xFE09e53A81Fe2808bc493ea64319109B5bAa573e#code

pragma solidity 0.5.16;

import {BaseUpgradeabilityProxy} from '@openzeppelin/upgrades/contracts/upgradeability/BaseUpgradeabilityProxy.sol';

import {IUpgradeSource} from './interfaces/IUpgradeSource.sol';

contract VaultProxy is BaseUpgradeabilityProxy {

  constructor(address _implementation) public {
    _setImplementation(_implementation);
  }

  /**
  * The main logic. If the timer has elapsed and there is a schedule upgrade,
  * the governance can upgrade the vault
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
