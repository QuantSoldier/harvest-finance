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

interface ProfitNotifierInterface extends ethers.utils.Interface {
  functions: {
    "controller()": FunctionFragment;
    "governance()": FunctionFragment;
    "profitSharingDenominator()": FunctionFragment;
    "profitSharingNumerator()": FunctionFragment;
    "setStorage(address)": FunctionFragment;
    "store()": FunctionFragment;
    "underlying()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "governance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "profitSharingDenominator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "profitSharingNumerator",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setStorage", values: [string]): string;
  encodeFunctionData(functionFragment: "store", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "underlying",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "profitSharingDenominator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "profitSharingNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setStorage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "store", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "underlying", data: BytesLike): Result;

  events: {
    "ProfitLog(uint256,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ProfitLog"): EventFragment;
}

export class ProfitNotifier extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ProfitNotifierInterface;

  functions: {
    controller(overrides?: CallOverrides): Promise<[string]>;

    "controller()"(overrides?: CallOverrides): Promise<[string]>;

    governance(overrides?: CallOverrides): Promise<[string]>;

    "governance()"(overrides?: CallOverrides): Promise<[string]>;

    profitSharingDenominator(overrides?: CallOverrides): Promise<[BigNumber]>;

    "profitSharingDenominator()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    profitSharingNumerator(overrides?: CallOverrides): Promise<[BigNumber]>;

    "profitSharingNumerator()"(overrides?: CallOverrides): Promise<[BigNumber]>;

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
  };

  controller(overrides?: CallOverrides): Promise<string>;

  "controller()"(overrides?: CallOverrides): Promise<string>;

  governance(overrides?: CallOverrides): Promise<string>;

  "governance()"(overrides?: CallOverrides): Promise<string>;

  profitSharingDenominator(overrides?: CallOverrides): Promise<BigNumber>;

  "profitSharingDenominator()"(overrides?: CallOverrides): Promise<BigNumber>;

  profitSharingNumerator(overrides?: CallOverrides): Promise<BigNumber>;

  "profitSharingNumerator()"(overrides?: CallOverrides): Promise<BigNumber>;

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

  callStatic: {
    controller(overrides?: CallOverrides): Promise<string>;

    "controller()"(overrides?: CallOverrides): Promise<string>;

    governance(overrides?: CallOverrides): Promise<string>;

    "governance()"(overrides?: CallOverrides): Promise<string>;

    profitSharingDenominator(overrides?: CallOverrides): Promise<BigNumber>;

    "profitSharingDenominator()"(overrides?: CallOverrides): Promise<BigNumber>;

    profitSharingNumerator(overrides?: CallOverrides): Promise<BigNumber>;

    "profitSharingNumerator()"(overrides?: CallOverrides): Promise<BigNumber>;

    setStorage(_store: string, overrides?: CallOverrides): Promise<void>;

    "setStorage(address)"(
      _store: string,
      overrides?: CallOverrides
    ): Promise<void>;

    store(overrides?: CallOverrides): Promise<string>;

    "store()"(overrides?: CallOverrides): Promise<string>;

    underlying(overrides?: CallOverrides): Promise<string>;

    "underlying()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    ProfitLog(
      oldBalance: null,
      newBalance: null,
      feeAmount: null,
      timestamp: null
    ): EventFilter;
  };

  estimateGas: {
    controller(overrides?: CallOverrides): Promise<BigNumber>;

    "controller()"(overrides?: CallOverrides): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<BigNumber>;

    "governance()"(overrides?: CallOverrides): Promise<BigNumber>;

    profitSharingDenominator(overrides?: CallOverrides): Promise<BigNumber>;

    "profitSharingDenominator()"(overrides?: CallOverrides): Promise<BigNumber>;

    profitSharingNumerator(overrides?: CallOverrides): Promise<BigNumber>;

    "profitSharingNumerator()"(overrides?: CallOverrides): Promise<BigNumber>;

    setStorage(_store: string, overrides?: Overrides): Promise<BigNumber>;

    "setStorage(address)"(
      _store: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    store(overrides?: CallOverrides): Promise<BigNumber>;

    "store()"(overrides?: CallOverrides): Promise<BigNumber>;

    underlying(overrides?: CallOverrides): Promise<BigNumber>;

    "underlying()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "controller()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "governance()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    profitSharingDenominator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "profitSharingDenominator()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    profitSharingNumerator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "profitSharingNumerator()"(
      overrides?: CallOverrides
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
  };
}
