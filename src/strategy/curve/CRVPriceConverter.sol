// SPDX-License-Identifier: ISC

pragma solidity 0.5.16;


interface IConverter {
  function calc_withdraw_one_coin(uint256 _token_amount, int128 i) external view returns (uint256);
}

interface IPriceConverter {
  function yCrvToUnderlying(uint256 _token_amount, uint256 i) external view returns (uint256);
}

contract CRVPriceConverter is IPriceConverter {

  IConverter public zap = IConverter(0xbBC81d23Ea2c3ec7e56D39296F0cbB648873a5d3);

  function yCrvToUnderlying(uint256 _token_amount, uint256 i) public view returns (uint256) {
    // this returning the DAI amount, not yDAI
    return zap.calc_withdraw_one_coin(_token_amount, int128(i));
  }
}

// contract MockPriceConverter is IPriceConverter {
//   function yCrvToUnderlying(uint256 _token_amount, uint256 /* i */) public view returns (uint256) {
//     // counting 1:1
//     return _token_amount;
//   }
// }
