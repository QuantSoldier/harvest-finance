/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { ICurveHUSDDeposit } from "../ICurveHUSDDeposit";

export class ICurveHUSDDeposit__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICurveHUSDDeposit {
    return new Contract(address, _abi, signerOrProvider) as ICurveHUSDDeposit;
  }
}

const _abi = [
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256[4]",
        name: "amounts",
        type: "uint256[4]",
      },
      {
        internalType: "uint256",
        name: "min_mint_amount",
        type: "uint256",
      },
    ],
    name: "add_liquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "get_virtual_price",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];
