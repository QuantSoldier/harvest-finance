// SPDX-License-Identifier: ISC

pragma solidity 0.5.16;

import {GovernableInit} from './GovernableInit.sol';
import {Storage} from './Storage.sol';

contract ControllableInit is GovernableInit {

  constructor() public {
  }

  function initialize(address _storage) public initializer {
    GovernableInit.initialize(_storage);
  }

  modifier onlyController() {
    require(Storage(_storage()).isController(msg.sender), "Not a controller");
    _;
  }

  modifier onlyControllerOrGovernance(){
    require((Storage(_storage()).isController(msg.sender) || Storage(_storage()).isGovernance(msg.sender)),
      "The caller must be controller or governance");
    _;
  }

  function controller() public view returns (address) {
    return Storage(_storage()).controller();
  }
}
