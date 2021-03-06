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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface NoopStrategyStableInterface extends ethers.utils.Interface {
  functions: {
    "controller()": FunctionFragment;
    "depositArbCheck()": FunctionFragment;
    "doHardWork()": FunctionFragment;
    "governance()": FunctionFragment;
    "investAllUnderlying()": FunctionFragment;
    "investedUnderlyingBalance()": FunctionFragment;
    "salvage(address,address,uint256)": FunctionFragment;
    "setStorage(address)": FunctionFragment;
    "store()": FunctionFragment;
    "underlying()": FunctionFragment;
    "unsalvagableTokens(address)": FunctionFragment;
    "vault()": FunctionFragment;
    "withdrawAllToVault()": FunctionFragment;
    "withdrawToVault(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "depositArbCheck",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "doHardWork",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "governance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "investAllUnderlying",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "investedUnderlyingBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "salvage",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setStorage", values: [string]): string;
  encodeFunctionData(functionFragment: "store", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "underlying",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unsalvagableTokens",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawAllToVault",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawToVault",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositArbCheck",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "doHardWork", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "investAllUnderlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "investedUnderlyingBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "salvage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setStorage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "store", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "underlying", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unsalvagableTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAllToVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawToVault",
    data: BytesLike
  ): Result;

  events: {};
}

export class NoopStrategyStable extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: NoopStrategyStableInterface;

  functions: {
    controller(overrides?: CallOverrides): Promise<[string]>;

    "controller()"(overrides?: CallOverrides): Promise<[string]>;

    depositArbCheck(overrides?: CallOverrides): Promise<[boolean]>;

    "depositArbCheck()"(overrides?: CallOverrides): Promise<[boolean]>;

    doHardWork(overrides?: Overrides): Promise<ContractTransaction>;

    "doHardWork()"(overrides?: Overrides): Promise<ContractTransaction>;

    governance(overrides?: CallOverrides): Promise<[string]>;

    "governance()"(overrides?: CallOverrides): Promise<[string]>;

    investAllUnderlying(overrides?: Overrides): Promise<ContractTransaction>;

    "investAllUnderlying()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    investedUnderlyingBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    "investedUnderlyingBalance()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    salvage(
      destination: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "salvage(address,address,uint256)"(
      destination: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setStorage(
      _store: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setStorage(address)"(
      _store: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    store(overrides?: CallOverrides): Promise<[string]>;

    "store()"(overrides?: CallOverrides): Promise<[string]>;

    underlying(overrides?: CallOverrides): Promise<[string]>;

    "underlying()"(overrides?: CallOverrides): Promise<[string]>;

    unsalvagableTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "unsalvagableTokens(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    vault(overrides?: CallOverrides): Promise<[string]>;

    "vault()"(overrides?: CallOverrides): Promise<[string]>;

    withdrawAllToVault(overrides?: Overrides): Promise<ContractTransaction>;

    "withdrawAllToVault()"(overrides?: Overrides): Promise<ContractTransaction>;

    withdrawToVault(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdrawToVault(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  controller(overrides?: CallOverrides): Promise<string>;

  "controller()"(overrides?: CallOverrides): Promise<string>;

  depositArbCheck(overrides?: CallOverrides): Promise<boolean>;

  "depositArbCheck()"(overrides?: CallOverrides): Promise<boolean>;

  doHardWork(overrides?: Overrides): Promise<ContractTransaction>;

  "doHardWork()"(overrides?: Overrides): Promise<ContractTransaction>;

  governance(overrides?: CallOverrides): Promise<string>;

  "governance()"(overrides?: CallOverrides): Promise<string>;

  investAllUnderlying(overrides?: Overrides): Promise<ContractTransaction>;

  "investAllUnderlying()"(overrides?: Overrides): Promise<ContractTransaction>;

  investedUnderlyingBalance(overrides?: CallOverrides): Promise<BigNumber>;

  "investedUnderlyingBalance()"(overrides?: CallOverrides): Promise<BigNumber>;

  salvage(
    destination: string,
    token: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "salvage(address,address,uint256)"(
    destination: string,
    token: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setStorage(
    _store: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setStorage(address)"(
    _store: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  store(overrides?: CallOverrides): Promise<string>;

  "store()"(overrides?: CallOverrides): Promise<string>;

  underlying(overrides?: CallOverrides): Promise<string>;

  "underlying()"(overrides?: CallOverrides): Promise<string>;

  unsalvagableTokens(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "unsalvagableTokens(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  vault(overrides?: CallOverrides): Promise<string>;

  "vault()"(overrides?: CallOverrides): Promise<string>;

  withdrawAllToVault(overrides?: Overrides): Promise<ContractTransaction>;

  "withdrawAllToVault()"(overrides?: Overrides): Promise<ContractTransaction>;

  withdrawToVault(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdrawToVault(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    controller(overrides?: CallOverrides): Promise<string>;

    "controller()"(overrides?: CallOverrides): Promise<string>;

    depositArbCheck(overrides?: CallOverrides): Promise<boolean>;

    "depositArbCheck()"(overrides?: CallOverrides): Promise<boolean>;

    doHardWork(overrides?: CallOverrides): Promise<void>;

    "doHardWork()"(overrides?: CallOverrides): Promise<void>;

    governance(overrides?: CallOverrides): Promise<string>;

    "governance()"(overrides?: CallOverrides): Promise<string>;

    investAllUnderlying(overrides?: CallOverrides): Promise<void>;

    "investAllUnderlying()"(overrides?: CallOverrides): Promise<void>;

    investedUnderlyingBalance(overrides?: CallOverrides): Promise<BigNumber>;

    "investedUnderlyingBalance()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    salvage(
      destination: string,
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "salvage(address,address,uint256)"(
      destination: string,
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setStorage(_store: string, overrides?: CallOverrides): Promise<void>;

    "setStorage(address)"(
      _store: string,
      overrides?: CallOverrides
    ): Promise<void>;

    store(overrides?: CallOverrides): Promise<string>;

    "store()"(overrides?: CallOverrides): Promise<string>;

    underlying(overrides?: CallOverrides): Promise<string>;

    "underlying()"(overrides?: CallOverrides): Promise<string>;

    unsalvagableTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "unsalvagableTokens(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    vault(overrides?: CallOverrides): Promise<string>;

    "vault()"(overrides?: CallOverrides): Promise<string>;

    withdrawAllToVault(overrides?: CallOverrides): Promise<void>;

    "withdrawAllToVault()"(overrides?: CallOverrides): Promise<void>;

    withdrawToVault(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawToVault(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    controller(overrides?: CallOverrides): Promise<BigNumber>;

    "controller()"(overrides?: CallOverrides): Promise<BigNumber>;

    depositArbCheck(overrides?: CallOverrides): Promise<BigNumber>;

    "depositArbCheck()"(overrides?: CallOverrides): Promise<BigNumber>;

    doHardWork(overrides?: Overrides): Promise<BigNumber>;

    "doHardWork()"(overrides?: Overrides): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<BigNumber>;

    "governance()"(overrides?: CallOverrides): Promise<BigNumber>;

    investAllUnderlying(overrides?: Overrides): Promise<BigNumber>;

    "investAllUnderlying()"(overrides?: Overrides): Promise<BigNumber>;

    investedUnderlyingBalance(overrides?: CallOverrides): Promise<BigNumber>;

    "investedUnderlyingBalance()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    salvage(
      destination: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "salvage(address,address,uint256)"(
      destination: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setStorage(_store: string, overrides?: Overrides): Promise<BigNumber>;

    "setStorage(address)"(
      _store: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    store(overrides?: CallOverrides): Promise<BigNumber>;

    "store()"(overrides?: CallOverrides): Promise<BigNumber>;

    underlying(overrides?: CallOverrides): Promise<BigNumber>;

    "underlying()"(overrides?: CallOverrides): Promise<BigNumber>;

    unsalvagableTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "unsalvagableTokens(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<BigNumber>;

    "vault()"(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawAllToVault(overrides?: Overrides): Promise<BigNumber>;

    "withdrawAllToVault()"(overrides?: Overrides): Promise<BigNumber>;

    withdrawToVault(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "withdrawToVault(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "controller()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    depositArbCheck(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "depositArbCheck()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    doHardWork(overrides?: Overrides): Promise<PopulatedTransaction>;

    "doHardWork()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "governance()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    investAllUnderlying(overrides?: Overrides): Promise<PopulatedTransaction>;

    "investAllUnderlying()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    investedUnderlyingBalance(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "investedUnderlyingBalance()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    salvage(
      destination: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "salvage(address,address,uint256)"(
      destination: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setStorage(
      _store: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setStorage(address)"(
      _store: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    store(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "store()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    underlying(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "underlying()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unsalvagableTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "unsalvagableTokens(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "vault()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawAllToVault(overrides?: Overrides): Promise<PopulatedTransaction>;

    "withdrawAllToVault()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdrawToVault(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdrawToVault(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
