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

interface IControllerInterface extends ethers.utils.Interface {
  functions: {
    "addVaultAndStrategy(address,address)": FunctionFragment;
    "doHardWork(address)": FunctionFragment;
    "greyList(address)": FunctionFragment;
    "hasVault(address)": FunctionFragment;
    "notifyFee(address,uint256)": FunctionFragment;
    "profitSharingDenominator()": FunctionFragment;
    "profitSharingNumerator()": FunctionFragment;
    "salvage(address,uint256)": FunctionFragment;
    "salvageStrategy(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addVaultAndStrategy",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "doHardWork", values: [string]): string;
  encodeFunctionData(functionFragment: "greyList", values: [string]): string;
  encodeFunctionData(functionFragment: "hasVault", values: [string]): string;
  encodeFunctionData(
    functionFragment: "notifyFee",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "profitSharingDenominator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "profitSharingNumerator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "salvage",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "salvageStrategy",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addVaultAndStrategy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "doHardWork", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "greyList", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasVault", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "notifyFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "profitSharingDenominator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "profitSharingNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "salvage", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "salvageStrategy",
    data: BytesLike
  ): Result;

  events: {};
}

export class IController extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IControllerInterface;

  functions: {
    addVaultAndStrategy(
      _vault: string,
      _strategy: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addVaultAndStrategy(address,address)"(
      _vault: string,
      _strategy: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    doHardWork(
      _vault: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "doHardWork(address)"(
      _vault: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    greyList(_target: string, overrides?: CallOverrides): Promise<[boolean]>;

    "greyList(address)"(
      _target: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    hasVault(
      _vault: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "hasVault(address)"(
      _vault: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    notifyFee(
      _underlying: string,
      fee: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "notifyFee(address,uint256)"(
      _underlying: string,
      fee: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    profitSharingDenominator(overrides?: CallOverrides): Promise<[BigNumber]>;

    "profitSharingDenominator()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    profitSharingNumerator(overrides?: CallOverrides): Promise<[BigNumber]>;

    "profitSharingNumerator()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    salvage(
      _token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "salvage(address,uint256)"(
      _token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    salvageStrategy(
      _strategy: string,
      _token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "salvageStrategy(address,address,uint256)"(
      _strategy: string,
      _token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  addVaultAndStrategy(
    _vault: string,
    _strategy: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addVaultAndStrategy(address,address)"(
    _vault: string,
    _strategy: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  doHardWork(
    _vault: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "doHardWork(address)"(
    _vault: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  greyList(_target: string, overrides?: CallOverrides): Promise<boolean>;

  "greyList(address)"(
    _target: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  hasVault(_vault: string, overrides?: Overrides): Promise<ContractTransaction>;

  "hasVault(address)"(
    _vault: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  notifyFee(
    _underlying: string,
    fee: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "notifyFee(address,uint256)"(
    _underlying: string,
    fee: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  profitSharingDenominator(overrides?: CallOverrides): Promise<BigNumber>;

  "profitSharingDenominator()"(overrides?: CallOverrides): Promise<BigNumber>;

  profitSharingNumerator(overrides?: CallOverrides): Promise<BigNumber>;

  "profitSharingNumerator()"(overrides?: CallOverrides): Promise<BigNumber>;

  salvage(
    _token: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "salvage(address,uint256)"(
    _token: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  salvageStrategy(
    _strategy: string,
    _token: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "salvageStrategy(address,address,uint256)"(
    _strategy: string,
    _token: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    addVaultAndStrategy(
      _vault: string,
      _strategy: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "addVaultAndStrategy(address,address)"(
      _vault: string,
      _strategy: string,
      overrides?: CallOverrides
    ): Promise<void>;

    doHardWork(_vault: string, overrides?: CallOverrides): Promise<void>;

    "doHardWork(address)"(
      _vault: string,
      overrides?: CallOverrides
    ): Promise<void>;

    greyList(_target: string, overrides?: CallOverrides): Promise<boolean>;

    "greyList(address)"(
      _target: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    hasVault(_vault: string, overrides?: CallOverrides): Promise<boolean>;

    "hasVault(address)"(
      _vault: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    notifyFee(
      _underlying: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "notifyFee(address,uint256)"(
      _underlying: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    profitSharingDenominator(overrides?: CallOverrides): Promise<BigNumber>;

    "profitSharingDenominator()"(overrides?: CallOverrides): Promise<BigNumber>;

    profitSharingNumerator(overrides?: CallOverrides): Promise<BigNumber>;

    "profitSharingNumerator()"(overrides?: CallOverrides): Promise<BigNumber>;

    salvage(
      _token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "salvage(address,uint256)"(
      _token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    salvageStrategy(
      _strategy: string,
      _token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "salvageStrategy(address,address,uint256)"(
      _strategy: string,
      _token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addVaultAndStrategy(
      _vault: string,
      _strategy: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addVaultAndStrategy(address,address)"(
      _vault: string,
      _strategy: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    doHardWork(_vault: string, overrides?: Overrides): Promise<BigNumber>;

    "doHardWork(address)"(
      _vault: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    greyList(_target: string, overrides?: CallOverrides): Promise<BigNumber>;

    "greyList(address)"(
      _target: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasVault(_vault: string, overrides?: Overrides): Promise<BigNumber>;

    "hasVault(address)"(
      _vault: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    notifyFee(
      _underlying: string,
      fee: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "notifyFee(address,uint256)"(
      _underlying: string,
      fee: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    profitSharingDenominator(overrides?: CallOverrides): Promise<BigNumber>;

    "profitSharingDenominator()"(overrides?: CallOverrides): Promise<BigNumber>;

    profitSharingNumerator(overrides?: CallOverrides): Promise<BigNumber>;

    "profitSharingNumerator()"(overrides?: CallOverrides): Promise<BigNumber>;

    salvage(
      _token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "salvage(address,uint256)"(
      _token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    salvageStrategy(
      _strategy: string,
      _token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "salvageStrategy(address,address,uint256)"(
      _strategy: string,
      _token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addVaultAndStrategy(
      _vault: string,
      _strategy: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addVaultAndStrategy(address,address)"(
      _vault: string,
      _strategy: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    doHardWork(
      _vault: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "doHardWork(address)"(
      _vault: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    greyList(
      _target: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "greyList(address)"(
      _target: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasVault(
      _vault: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "hasVault(address)"(
      _vault: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    notifyFee(
      _underlying: string,
      fee: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "notifyFee(address,uint256)"(
      _underlying: string,
      fee: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

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

    salvage(
      _token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "salvage(address,uint256)"(
      _token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    salvageStrategy(
      _strategy: string,
      _token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "salvageStrategy(address,address,uint256)"(
      _strategy: string,
      _token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
