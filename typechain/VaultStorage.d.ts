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

interface VaultStorageInterface extends ethers.utils.Interface {
  functions: {
    "initialize(address,uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;

  events: {};
}

export class VaultStorage extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: VaultStorageInterface;

  functions: {
    initialize(
      _underlying: string,
      _toInvestNumerator: BigNumberish,
      _toInvestDenominator: BigNumberish,
      _underlyingUnit: BigNumberish,
      _implementationChangeDelay: BigNumberish,
      _strategyChangeDelay: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address,uint256,uint256,uint256,uint256,uint256)"(
      _underlying: string,
      _toInvestNumerator: BigNumberish,
      _toInvestDenominator: BigNumberish,
      _underlyingUnit: BigNumberish,
      _implementationChangeDelay: BigNumberish,
      _strategyChangeDelay: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  initialize(
    _underlying: string,
    _toInvestNumerator: BigNumberish,
    _toInvestDenominator: BigNumberish,
    _underlyingUnit: BigNumberish,
    _implementationChangeDelay: BigNumberish,
    _strategyChangeDelay: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address,uint256,uint256,uint256,uint256,uint256)"(
    _underlying: string,
    _toInvestNumerator: BigNumberish,
    _toInvestDenominator: BigNumberish,
    _underlyingUnit: BigNumberish,
    _implementationChangeDelay: BigNumberish,
    _strategyChangeDelay: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    initialize(
      _underlying: string,
      _toInvestNumerator: BigNumberish,
      _toInvestDenominator: BigNumberish,
      _underlyingUnit: BigNumberish,
      _implementationChangeDelay: BigNumberish,
      _strategyChangeDelay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address,uint256,uint256,uint256,uint256,uint256)"(
      _underlying: string,
      _toInvestNumerator: BigNumberish,
      _toInvestDenominator: BigNumberish,
      _underlyingUnit: BigNumberish,
      _implementationChangeDelay: BigNumberish,
      _strategyChangeDelay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    initialize(
      _underlying: string,
      _toInvestNumerator: BigNumberish,
      _toInvestDenominator: BigNumberish,
      _underlyingUnit: BigNumberish,
      _implementationChangeDelay: BigNumberish,
      _strategyChangeDelay: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(address,uint256,uint256,uint256,uint256,uint256)"(
      _underlying: string,
      _toInvestNumerator: BigNumberish,
      _toInvestDenominator: BigNumberish,
      _underlyingUnit: BigNumberish,
      _implementationChangeDelay: BigNumberish,
      _strategyChangeDelay: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    initialize(
      _underlying: string,
      _toInvestNumerator: BigNumberish,
      _toInvestDenominator: BigNumberish,
      _underlyingUnit: BigNumberish,
      _implementationChangeDelay: BigNumberish,
      _strategyChangeDelay: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address,uint256,uint256,uint256,uint256,uint256)"(
      _underlying: string,
      _toInvestNumerator: BigNumberish,
      _toInvestDenominator: BigNumberish,
      _underlyingUnit: BigNumberish,
      _implementationChangeDelay: BigNumberish,
      _strategyChangeDelay: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}