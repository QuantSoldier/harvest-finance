// SPDX-License-Identifier: ISC

pragma solidity 0.5.16;

import {CErc20Interface, CTokenInterface} from './CTokenInterfaces.sol';

contract CompleteCToken is CErc20Interface, CTokenInterface {}
