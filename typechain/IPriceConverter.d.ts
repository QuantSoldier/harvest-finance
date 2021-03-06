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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IPriceConverterInterface extends ethers.utils.Interface {
  functions: {
    "yCrvToUnderlying(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "yCrvToUnderlying",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "yCrvToUnderlying",
    data: BytesLike
  ): Result;

  events: {};
}

export class IPriceConverter extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IPriceConverterInterface;

  functions: {
    yCrvToUnderlying(
      _token_amount: BigNumberish,
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "yCrvToUnderlying(uint256,uint256)"(
      _token_amount: BigNumberish,
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  yCrvToUnderlying(
    _token_amount: BigNumberish,
    i: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "yCrvToUnderlying(uint256,uint256)"(
    _token_amount: BigNumberish,
    i: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    yCrvToUnderlying(
      _token_amount: BigNumberish,
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "yCrvToUnderlying(uint256,uint256)"(
      _token_amount: BigNumberish,
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    yCrvToUnderlying(
      _token_amount: BigNumberish,
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "yCrvToUnderlying(uint256,uint256)"(
      _token_amount: BigNumberish,
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    yCrvToUnderlying(
      _token_amount: BigNumberish,
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "yCrvToUnderlying(uint256,uint256)"(
      _token_amount: BigNumberish,
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
