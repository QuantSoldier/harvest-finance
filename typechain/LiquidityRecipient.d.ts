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

interface LiquidityRecipientInterface extends ethers.utils.Interface {
  functions: {
    "controller()": FunctionFragment;
    "doHardWork()": FunctionFragment;
    "farm()": FunctionFragment;
    "governance()": FunctionFragment;
    "salvage(address,address,uint256)": FunctionFragment;
    "setStorage(address)": FunctionFragment;
    "settleLoan()": FunctionFragment;
    "store()": FunctionFragment;
    "takeLoan(uint256)": FunctionFragment;
    "treasury()": FunctionFragment;
    "uniLp()": FunctionFragment;
    "uniswap()": FunctionFragment;
    "unsalvagableTokens(address)": FunctionFragment;
    "weth()": FunctionFragment;
    "wethOverdraft()": FunctionFragment;
    "wethStrategy()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "doHardWork",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "farm", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "governance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "salvage",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setStorage", values: [string]): string;
  encodeFunctionData(
    functionFragment: "settleLoan",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "store", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "takeLoan",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
  encodeFunctionData(functionFragment: "uniLp", values?: undefined): string;
  encodeFunctionData(functionFragment: "uniswap", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "unsalvagableTokens",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "weth", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "wethOverdraft",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "wethStrategy",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "doHardWork", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "farm", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "salvage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setStorage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "settleLoan", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "store", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "takeLoan", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "uniLp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "uniswap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unsalvagableTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wethOverdraft",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wethStrategy",
    data: BytesLike
  ): Result;

  events: {
    "LiquidityProvided(uint256,uint256,uint256)": EventFragment;
    "LiquidityRemoved(uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LiquidityProvided"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiquidityRemoved"): EventFragment;
}

export class LiquidityRecipient extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: LiquidityRecipientInterface;

  functions: {
    controller(overrides?: CallOverrides): Promise<[string]>;

    "controller()"(overrides?: CallOverrides): Promise<[string]>;

    doHardWork(overrides?: Overrides): Promise<ContractTransaction>;

    "doHardWork()"(overrides?: Overrides): Promise<ContractTransaction>;

    farm(overrides?: CallOverrides): Promise<[string]>;

    "farm()"(overrides?: CallOverrides): Promise<[string]>;

    governance(overrides?: CallOverrides): Promise<[string]>;

    "governance()"(overrides?: CallOverrides): Promise<[string]>;

    salvage(
      recipient: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "salvage(address,address,uint256)"(
      recipient: string,
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

    settleLoan(overrides?: Overrides): Promise<ContractTransaction>;

    "settleLoan()"(overrides?: Overrides): Promise<ContractTransaction>;

    store(overrides?: CallOverrides): Promise<[string]>;

    "store()"(overrides?: CallOverrides): Promise<[string]>;

    takeLoan(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "takeLoan(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    treasury(overrides?: CallOverrides): Promise<[string]>;

    "treasury()"(overrides?: CallOverrides): Promise<[string]>;

    uniLp(overrides?: CallOverrides): Promise<[string]>;

    "uniLp()"(overrides?: CallOverrides): Promise<[string]>;

    uniswap(overrides?: CallOverrides): Promise<[string]>;

    "uniswap()"(overrides?: CallOverrides): Promise<[string]>;

    unsalvagableTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "unsalvagableTokens(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    weth(overrides?: CallOverrides): Promise<[string]>;

    "weth()"(overrides?: CallOverrides): Promise<[string]>;

    wethOverdraft(overrides?: Overrides): Promise<ContractTransaction>;

    "wethOverdraft()"(overrides?: Overrides): Promise<ContractTransaction>;

    wethStrategy(overrides?: CallOverrides): Promise<[string]>;

    "wethStrategy()"(overrides?: CallOverrides): Promise<[string]>;
  };

  controller(overrides?: CallOverrides): Promise<string>;

  "controller()"(overrides?: CallOverrides): Promise<string>;

  doHardWork(overrides?: Overrides): Promise<ContractTransaction>;

  "doHardWork()"(overrides?: Overrides): Promise<ContractTransaction>;

  farm(overrides?: CallOverrides): Promise<string>;

  "farm()"(overrides?: CallOverrides): Promise<string>;

  governance(overrides?: CallOverrides): Promise<string>;

  "governance()"(overrides?: CallOverrides): Promise<string>;

  salvage(
    recipient: string,
    token: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "salvage(address,address,uint256)"(
    recipient: string,
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

  settleLoan(overrides?: Overrides): Promise<ContractTransaction>;

  "settleLoan()"(overrides?: Overrides): Promise<ContractTransaction>;

  store(overrides?: CallOverrides): Promise<string>;

  "store()"(overrides?: CallOverrides): Promise<string>;

  takeLoan(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "takeLoan(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  treasury(overrides?: CallOverrides): Promise<string>;

  "treasury()"(overrides?: CallOverrides): Promise<string>;

  uniLp(overrides?: CallOverrides): Promise<string>;

  "uniLp()"(overrides?: CallOverrides): Promise<string>;

  uniswap(overrides?: CallOverrides): Promise<string>;

  "uniswap()"(overrides?: CallOverrides): Promise<string>;

  unsalvagableTokens(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "unsalvagableTokens(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  weth(overrides?: CallOverrides): Promise<string>;

  "weth()"(overrides?: CallOverrides): Promise<string>;

  wethOverdraft(overrides?: Overrides): Promise<ContractTransaction>;

  "wethOverdraft()"(overrides?: Overrides): Promise<ContractTransaction>;

  wethStrategy(overrides?: CallOverrides): Promise<string>;

  "wethStrategy()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    controller(overrides?: CallOverrides): Promise<string>;

    "controller()"(overrides?: CallOverrides): Promise<string>;

    doHardWork(overrides?: CallOverrides): Promise<void>;

    "doHardWork()"(overrides?: CallOverrides): Promise<void>;

    farm(overrides?: CallOverrides): Promise<string>;

    "farm()"(overrides?: CallOverrides): Promise<string>;

    governance(overrides?: CallOverrides): Promise<string>;

    "governance()"(overrides?: CallOverrides): Promise<string>;

    salvage(
      recipient: string,
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "salvage(address,address,uint256)"(
      recipient: string,
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setStorage(_store: string, overrides?: CallOverrides): Promise<void>;

    "setStorage(address)"(
      _store: string,
      overrides?: CallOverrides
    ): Promise<void>;

    settleLoan(overrides?: CallOverrides): Promise<void>;

    "settleLoan()"(overrides?: CallOverrides): Promise<void>;

    store(overrides?: CallOverrides): Promise<string>;

    "store()"(overrides?: CallOverrides): Promise<string>;

    takeLoan(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "takeLoan(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    treasury(overrides?: CallOverrides): Promise<string>;

    "treasury()"(overrides?: CallOverrides): Promise<string>;

    uniLp(overrides?: CallOverrides): Promise<string>;

    "uniLp()"(overrides?: CallOverrides): Promise<string>;

    uniswap(overrides?: CallOverrides): Promise<string>;

    "uniswap()"(overrides?: CallOverrides): Promise<string>;

    unsalvagableTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "unsalvagableTokens(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    weth(overrides?: CallOverrides): Promise<string>;

    "weth()"(overrides?: CallOverrides): Promise<string>;

    wethOverdraft(overrides?: CallOverrides): Promise<void>;

    "wethOverdraft()"(overrides?: CallOverrides): Promise<void>;

    wethStrategy(overrides?: CallOverrides): Promise<string>;

    "wethStrategy()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    LiquidityProvided(farmIn: null, wethIn: null, lpOut: null): EventFilter;

    LiquidityRemoved(lpIn: null, wethOut: null, farmOut: null): EventFilter;
  };

  estimateGas: {
    controller(overrides?: CallOverrides): Promise<BigNumber>;

    "controller()"(overrides?: CallOverrides): Promise<BigNumber>;

    doHardWork(overrides?: Overrides): Promise<BigNumber>;

    "doHardWork()"(overrides?: Overrides): Promise<BigNumber>;

    farm(overrides?: CallOverrides): Promise<BigNumber>;

    "farm()"(overrides?: CallOverrides): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<BigNumber>;

    "governance()"(overrides?: CallOverrides): Promise<BigNumber>;

    salvage(
      recipient: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "salvage(address,address,uint256)"(
      recipient: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setStorage(_store: string, overrides?: Overrides): Promise<BigNumber>;

    "setStorage(address)"(
      _store: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    settleLoan(overrides?: Overrides): Promise<BigNumber>;

    "settleLoan()"(overrides?: Overrides): Promise<BigNumber>;

    store(overrides?: CallOverrides): Promise<BigNumber>;

    "store()"(overrides?: CallOverrides): Promise<BigNumber>;

    takeLoan(amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "takeLoan(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<BigNumber>;

    "treasury()"(overrides?: CallOverrides): Promise<BigNumber>;

    uniLp(overrides?: CallOverrides): Promise<BigNumber>;

    "uniLp()"(overrides?: CallOverrides): Promise<BigNumber>;

    uniswap(overrides?: CallOverrides): Promise<BigNumber>;

    "uniswap()"(overrides?: CallOverrides): Promise<BigNumber>;

    unsalvagableTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "unsalvagableTokens(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    weth(overrides?: CallOverrides): Promise<BigNumber>;

    "weth()"(overrides?: CallOverrides): Promise<BigNumber>;

    wethOverdraft(overrides?: Overrides): Promise<BigNumber>;

    "wethOverdraft()"(overrides?: Overrides): Promise<BigNumber>;

    wethStrategy(overrides?: CallOverrides): Promise<BigNumber>;

    "wethStrategy()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "controller()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    doHardWork(overrides?: Overrides): Promise<PopulatedTransaction>;

    "doHardWork()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    farm(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "farm()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "governance()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    salvage(
      recipient: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "salvage(address,address,uint256)"(
      recipient: string,
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

    settleLoan(overrides?: Overrides): Promise<PopulatedTransaction>;

    "settleLoan()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    store(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "store()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    takeLoan(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "takeLoan(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "treasury()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    uniLp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "uniLp()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    uniswap(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "uniswap()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unsalvagableTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "unsalvagableTokens(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "weth()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wethOverdraft(overrides?: Overrides): Promise<PopulatedTransaction>;

    "wethOverdraft()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    wethStrategy(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "wethStrategy()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
