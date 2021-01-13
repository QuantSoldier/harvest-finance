// SPDX-License-Identifier: ISC

// https://etherscan.io/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2#code

pragma solidity 0.5.16;

contract WETH9 {

    function balanceOf(address target) public view returns (uint256);

    function deposit() public payable ;
    function withdraw(uint wad) public ;
    function totalSupply() public view returns (uint) ;
    function approve(address guy, uint wad) public returns (bool) ;
    function transfer(address dst, uint wad) public returns (bool) ;
    function transferFrom(address src, address dst, uint wad) public returns (bool);

}
