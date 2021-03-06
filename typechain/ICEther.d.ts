/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ICEtherInterface extends ethers.utils.Interface {
  functions: {
    "balanceOf(address)": FunctionFragment;
    "balanceOfUnderlying(address)": FunctionFragment;
    "borrow(uint256)": FunctionFragment;
    "borrowBalanceCurrent(address)": FunctionFragment;
    "borrowBalanceStored(address)": FunctionFragment;
    "getAccountSnapshot(address)": FunctionFragment;
    "mint()": FunctionFragment;
    "redeem(uint256)": FunctionFragment;
    "redeemUnderlying(uint256)": FunctionFragment;
    "repayBorrow()": FunctionFragment;
    "repayBorrowBehalf(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "balanceOfUnderlying",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "borrow",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowBalanceCurrent",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowBalanceStored",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccountSnapshot",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "mint", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemUnderlying",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "repayBorrow",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "repayBorrowBehalf",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfUnderlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "borrow", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "borrowBalanceCurrent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrowBalanceStored",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccountSnapshot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "redeemUnderlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "repayBorrow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "repayBorrowBehalf",
    data: BytesLike
  ): Result;

  events: {};
}

export class ICEther extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ICEtherInterface;

  functions: {
    balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "balanceOf(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balanceOfUnderlying(
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "balanceOfUnderlying(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    borrow(
      borrowAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "borrow(uint256)"(
      borrowAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    borrowBalanceCurrent(
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "borrowBalanceCurrent(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    borrowBalanceStored(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "borrowBalanceStored(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAccountSnapshot(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

    "getAccountSnapshot(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

    mint(overrides?: PayableOverrides): Promise<ContractTransaction>;

    "mint()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

    redeem(
      redeemTokens: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "redeem(uint256)"(
      redeemTokens: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    redeemUnderlying(
      redeemAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "redeemUnderlying(uint256)"(
      redeemAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    repayBorrow(overrides?: PayableOverrides): Promise<ContractTransaction>;

    "repayBorrow()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

    repayBorrowBehalf(
      borrower: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "repayBorrowBehalf(address)"(
      borrower: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;
  };

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(
    owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOfUnderlying(
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "balanceOfUnderlying(address)"(
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  borrow(
    borrowAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "borrow(uint256)"(
    borrowAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  borrowBalanceCurrent(
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "borrowBalanceCurrent(address)"(
    account: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  borrowBalanceStored(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "borrowBalanceStored(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAccountSnapshot(
    account: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

  "getAccountSnapshot(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

  mint(overrides?: PayableOverrides): Promise<ContractTransaction>;

  "mint()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

  redeem(
    redeemTokens: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "redeem(uint256)"(
    redeemTokens: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  redeemUnderlying(
    redeemAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "redeemUnderlying(uint256)"(
    redeemAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  repayBorrow(overrides?: PayableOverrides): Promise<ContractTransaction>;

  "repayBorrow()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

  repayBorrowBehalf(
    borrower: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "repayBorrowBehalf(address)"(
    borrower: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  callStatic: {
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfUnderlying(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOfUnderlying(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrow(
      borrowAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "borrow(uint256)"(
      borrowAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrowBalanceCurrent(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "borrowBalanceCurrent(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrowBalanceStored(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "borrowBalanceStored(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccountSnapshot(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

    "getAccountSnapshot(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

    mint(overrides?: CallOverrides): Promise<void>;

    "mint()"(overrides?: CallOverrides): Promise<void>;

    redeem(
      redeemTokens: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "redeem(uint256)"(
      redeemTokens: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    redeemUnderlying(
      redeemAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "redeemUnderlying(uint256)"(
      redeemAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    repayBorrow(overrides?: CallOverrides): Promise<void>;

    "repayBorrow()"(overrides?: CallOverrides): Promise<void>;

    repayBorrowBehalf(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "repayBorrowBehalf(address)"(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfUnderlying(
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "balanceOfUnderlying(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    borrow(
      borrowAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "borrow(uint256)"(
      borrowAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    borrowBalanceCurrent(
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "borrowBalanceCurrent(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    borrowBalanceStored(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "borrowBalanceStored(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccountSnapshot(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAccountSnapshot(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mint(overrides?: PayableOverrides): Promise<BigNumber>;

    "mint()"(overrides?: PayableOverrides): Promise<BigNumber>;

    redeem(
      redeemTokens: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "redeem(uint256)"(
      redeemTokens: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    redeemUnderlying(
      redeemAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "redeemUnderlying(uint256)"(
      redeemAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    repayBorrow(overrides?: PayableOverrides): Promise<BigNumber>;

    "repayBorrow()"(overrides?: PayableOverrides): Promise<BigNumber>;

    repayBorrowBehalf(
      borrower: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "repayBorrowBehalf(address)"(
      borrower: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfUnderlying(
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "balanceOfUnderlying(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    borrow(
      borrowAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "borrow(uint256)"(
      borrowAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    borrowBalanceCurrent(
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "borrowBalanceCurrent(address)"(
      account: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    borrowBalanceStored(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "borrowBalanceStored(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAccountSnapshot(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAccountSnapshot(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    "mint()"(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    redeem(
      redeemTokens: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "redeem(uint256)"(
      redeemTokens: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    redeemUnderlying(
      redeemAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "redeemUnderlying(uint256)"(
      redeemAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    repayBorrow(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    "repayBorrow()"(
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    repayBorrowBehalf(
      borrower: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "repayBorrowBehalf(address)"(
      borrower: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;
  };
}
