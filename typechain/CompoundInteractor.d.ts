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

interface CompoundInteractorInterface extends ethers.utils.Interface {
  functions: {
    "_weth()": FunctionFragment;
    "claimComp()": FunctionFragment;
    "comptroller()": FunctionFragment;
    "ctoken()": FunctionFragment;
    "getLiquidity()": FunctionFragment;
    "underlying()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "_weth", values?: undefined): string;
  encodeFunctionData(functionFragment: "claimComp", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "comptroller",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "ctoken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getLiquidity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "underlying",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "_weth", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimComp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "comptroller",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ctoken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "underlying", data: BytesLike): Result;

  events: {};
}

export class CompoundInteractor extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: CompoundInteractorInterface;

  functions: {
    _weth(overrides?: CallOverrides): Promise<[string]>;

    "_weth()"(overrides?: CallOverrides): Promise<[string]>;

    claimComp(overrides?: Overrides): Promise<ContractTransaction>;

    "claimComp()"(overrides?: Overrides): Promise<ContractTransaction>;

    comptroller(overrides?: CallOverrides): Promise<[string]>;

    "comptroller()"(overrides?: CallOverrides): Promise<[string]>;

    ctoken(overrides?: CallOverrides): Promise<[string]>;

    "ctoken()"(overrides?: CallOverrides): Promise<[string]>;

    getLiquidity(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getLiquidity()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    underlying(overrides?: CallOverrides): Promise<[string]>;

    "underlying()"(overrides?: CallOverrides): Promise<[string]>;
  };

  _weth(overrides?: CallOverrides): Promise<string>;

  "_weth()"(overrides?: CallOverrides): Promise<string>;

  claimComp(overrides?: Overrides): Promise<ContractTransaction>;

  "claimComp()"(overrides?: Overrides): Promise<ContractTransaction>;

  comptroller(overrides?: CallOverrides): Promise<string>;

  "comptroller()"(overrides?: CallOverrides): Promise<string>;

  ctoken(overrides?: CallOverrides): Promise<string>;

  "ctoken()"(overrides?: CallOverrides): Promise<string>;

  getLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

  "getLiquidity()"(overrides?: CallOverrides): Promise<BigNumber>;

  underlying(overrides?: CallOverrides): Promise<string>;

  "underlying()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    _weth(overrides?: CallOverrides): Promise<string>;

    "_weth()"(overrides?: CallOverrides): Promise<string>;

    claimComp(overrides?: CallOverrides): Promise<void>;

    "claimComp()"(overrides?: CallOverrides): Promise<void>;

    comptroller(overrides?: CallOverrides): Promise<string>;

    "comptroller()"(overrides?: CallOverrides): Promise<string>;

    ctoken(overrides?: CallOverrides): Promise<string>;

    "ctoken()"(overrides?: CallOverrides): Promise<string>;

    getLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

    "getLiquidity()"(overrides?: CallOverrides): Promise<BigNumber>;

    underlying(overrides?: CallOverrides): Promise<string>;

    "underlying()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    _weth(overrides?: CallOverrides): Promise<BigNumber>;

    "_weth()"(overrides?: CallOverrides): Promise<BigNumber>;

    claimComp(overrides?: Overrides): Promise<BigNumber>;

    "claimComp()"(overrides?: Overrides): Promise<BigNumber>;

    comptroller(overrides?: CallOverrides): Promise<BigNumber>;

    "comptroller()"(overrides?: CallOverrides): Promise<BigNumber>;

    ctoken(overrides?: CallOverrides): Promise<BigNumber>;

    "ctoken()"(overrides?: CallOverrides): Promise<BigNumber>;

    getLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

    "getLiquidity()"(overrides?: CallOverrides): Promise<BigNumber>;

    underlying(overrides?: CallOverrides): Promise<BigNumber>;

    "underlying()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    _weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "_weth()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimComp(overrides?: Overrides): Promise<PopulatedTransaction>;

    "claimComp()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    comptroller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "comptroller()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ctoken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ctoken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getLiquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getLiquidity()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    underlying(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "underlying()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
