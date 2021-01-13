// SPDX-License-Identifier: ISC

pragma solidity 0.5.16;


interface IConverter {
  function calc_withdraw_one_coin(uint256 _token_amount, int128 i) external view returns (uint256);
}
