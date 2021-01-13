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

interface CDelegateInterfaceInterface extends ethers.utils.Interface {
  functions: {
    "_becomeImplementation(bytes)": FunctionFragment;
    "_resignImplementation()": FunctionFragment;
    "implementation()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "_becomeImplementation",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "_resignImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "_becomeImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_resignImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;

  events: {};
}

export class CDelegateInterface extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: CDelegateInterfaceInterface;

  functions: {
    _becomeImplementation(
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "_becomeImplementation(bytes)"(
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    _resignImplementation(overrides?: Overrides): Promise<ContractTransaction>;

    "_resignImplementation()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    implementation(overrides?: CallOverrides): Promise<[string]>;

    "implementation()"(overrides?: CallOverrides): Promise<[string]>;
  };

  _becomeImplementation(
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "_becomeImplementation(bytes)"(
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  _resignImplementation(overrides?: Overrides): Promise<ContractTransaction>;

  "_resignImplementation()"(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  implementation(overrides?: CallOverrides): Promise<string>;

  "implementation()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    _becomeImplementation(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "_becomeImplementation(bytes)"(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    _resignImplementation(overrides?: CallOverrides): Promise<void>;

    "_resignImplementation()"(overrides?: CallOverrides): Promise<void>;

    implementation(overrides?: CallOverrides): Promise<string>;

    "implementation()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    _becomeImplementation(
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "_becomeImplementation(bytes)"(
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    _resignImplementation(overrides?: Overrides): Promise<BigNumber>;

    "_resignImplementation()"(overrides?: Overrides): Promise<BigNumber>;

    implementation(overrides?: CallOverrides): Promise<BigNumber>;

    "implementation()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    _becomeImplementation(
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "_becomeImplementation(bytes)"(
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    _resignImplementation(overrides?: Overrides): Promise<PopulatedTransaction>;

    "_resignImplementation()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "implementation()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}