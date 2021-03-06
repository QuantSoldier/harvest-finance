/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { VotingEscrow } from "../VotingEscrow";

export class VotingEscrow__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VotingEscrow {
    return new Contract(address, _abi, signerOrProvider) as VotingEscrow;
  }
}

const _abi = [
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "v",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "create_lock",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "increase_amount",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_unlock_time",
        type: "uint256",
      },
    ],
    name: "increase_unlock_time",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "withdraw",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
