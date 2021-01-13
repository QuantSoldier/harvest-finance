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

interface IUpgradeSourceInterface extends ethers.utils.Interface {
  functions: {
    "finalizeUpgrade()": FunctionFragment;
    "shouldUpgrade()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "finalizeUpgrade",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "shouldUpgrade",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "finalizeUpgrade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shouldUpgrade",
    data: BytesLike
  ): Result;

  events: {};
}

export class IUpgradeSource extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IUpgradeSourceInterface;

  functions: {
    finalizeUpgrade(overrides?: Overrides): Promise<ContractTransaction>;

    "finalizeUpgrade()"(overrides?: Overrides): Promise<ContractTransaction>;

    shouldUpgrade(overrides?: CallOverrides): Promise<[boolean, string]>;

    "shouldUpgrade()"(overrides?: CallOverrides): Promise<[boolean, string]>;
  };

  finalizeUpgrade(overrides?: Overrides): Promise<ContractTransaction>;

  "finalizeUpgrade()"(overrides?: Overrides): Promise<ContractTransaction>;

  shouldUpgrade(overrides?: CallOverrides): Promise<[boolean, string]>;

  "shouldUpgrade()"(overrides?: CallOverrides): Promise<[boolean, string]>;

  callStatic: {
    finalizeUpgrade(overrides?: CallOverrides): Promise<void>;

    "finalizeUpgrade()"(overrides?: CallOverrides): Promise<void>;

    shouldUpgrade(overrides?: CallOverrides): Promise<[boolean, string]>;

    "shouldUpgrade()"(overrides?: CallOverrides): Promise<[boolean, string]>;
  };

  filters: {};

  estimateGas: {
    finalizeUpgrade(overrides?: Overrides): Promise<BigNumber>;

    "finalizeUpgrade()"(overrides?: Overrides): Promise<BigNumber>;

    shouldUpgrade(overrides?: CallOverrides): Promise<BigNumber>;

    "shouldUpgrade()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    finalizeUpgrade(overrides?: Overrides): Promise<PopulatedTransaction>;

    "finalizeUpgrade()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    shouldUpgrade(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "shouldUpgrade()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
