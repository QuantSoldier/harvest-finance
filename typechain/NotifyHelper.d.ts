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

interface NotifyHelperInterface extends ethers.utils.Interface {
  functions: {
    "alreadyNotified(address)": FunctionFragment;
    "controller()": FunctionFragment;
    "farm()": FunctionFragment;
    "feeRewardForwarder()": FunctionFragment;
    "governance()": FunctionFragment;
    "lastProfitShareTimestamp()": FunctionFragment;
    "notifyPools(uint256[],address[],uint256)": FunctionFragment;
    "notifyPoolsIncludingProfitShare(uint256[],address[],uint256,uint256,uint256)": FunctionFragment;
    "notifyProfitSharing()": FunctionFragment;
    "profitShareIncentiveDaily()": FunctionFragment;
    "setFeeRewardForwarder(address)": FunctionFragment;
    "setStorage(address)": FunctionFragment;
    "store()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "alreadyNotified",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "farm", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeRewardForwarder",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "governance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastProfitShareTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "notifyPools",
    values: [BigNumberish[], string[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "notifyPoolsIncludingProfitShare",
    values: [BigNumberish[], string[], BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "notifyProfitSharing",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "profitShareIncentiveDaily",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeRewardForwarder",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setStorage", values: [string]): string;
  encodeFunctionData(functionFragment: "store", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "alreadyNotified",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "farm", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeRewardForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastProfitShareTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "notifyPools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "notifyPoolsIncludingProfitShare",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "notifyProfitSharing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "profitShareIncentiveDaily",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeRewardForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setStorage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "store", data: BytesLike): Result;

  events: {};
}

export class NotifyHelper extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: NotifyHelperInterface;

  functions: {
    alreadyNotified(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "alreadyNotified(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    controller(overrides?: CallOverrides): Promise<[string]>;

    "controller()"(overrides?: CallOverrides): Promise<[string]>;

    farm(overrides?: CallOverrides): Promise<[string]>;

    "farm()"(overrides?: CallOverrides): Promise<[string]>;

    feeRewardForwarder(overrides?: CallOverrides): Promise<[string]>;

    "feeRewardForwarder()"(overrides?: CallOverrides): Promise<[string]>;

    governance(overrides?: CallOverrides): Promise<[string]>;

    "governance()"(overrides?: CallOverrides): Promise<[string]>;

    lastProfitShareTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    "lastProfitShareTimestamp()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    notifyPools(
      amounts: BigNumberish[],
      pools: string[],
      sum: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "notifyPools(uint256[],address[],uint256)"(
      amounts: BigNumberish[],
      pools: string[],
      sum: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    notifyPoolsIncludingProfitShare(
      amounts: BigNumberish[],
      pools: string[],
      profitShareIncentiveForWeek: BigNumberish,
      firstProfitShareTimestamp: BigNumberish,
      sum: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "notifyPoolsIncludingProfitShare(uint256[],address[],uint256,uint256,uint256)"(
      amounts: BigNumberish[],
      pools: string[],
      profitShareIncentiveForWeek: BigNumberish,
      firstProfitShareTimestamp: BigNumberish,
      sum: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    notifyProfitSharing(overrides?: Overrides): Promise<ContractTransaction>;

    "notifyProfitSharing()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    profitShareIncentiveDaily(overrides?: CallOverrides): Promise<[BigNumber]>;

    "profitShareIncentiveDaily()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setFeeRewardForwarder(
      newForwarder: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setFeeRewardForwarder(address)"(
      newForwarder: string,
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
  };

  alreadyNotified(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "alreadyNotified(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  controller(overrides?: CallOverrides): Promise<string>;

  "controller()"(overrides?: CallOverrides): Promise<string>;

  farm(overrides?: CallOverrides): Promise<string>;

  "farm()"(overrides?: CallOverrides): Promise<string>;

  feeRewardForwarder(overrides?: CallOverrides): Promise<string>;

  "feeRewardForwarder()"(overrides?: CallOverrides): Promise<string>;

  governance(overrides?: CallOverrides): Promise<string>;

  "governance()"(overrides?: CallOverrides): Promise<string>;

  lastProfitShareTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  "lastProfitShareTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

  notifyPools(
    amounts: BigNumberish[],
    pools: string[],
    sum: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "notifyPools(uint256[],address[],uint256)"(
    amounts: BigNumberish[],
    pools: string[],
    sum: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  notifyPoolsIncludingProfitShare(
    amounts: BigNumberish[],
    pools: string[],
    profitShareIncentiveForWeek: BigNumberish,
    firstProfitShareTimestamp: BigNumberish,
    sum: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "notifyPoolsIncludingProfitShare(uint256[],address[],uint256,uint256,uint256)"(
    amounts: BigNumberish[],
    pools: string[],
    profitShareIncentiveForWeek: BigNumberish,
    firstProfitShareTimestamp: BigNumberish,
    sum: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  notifyProfitSharing(overrides?: Overrides): Promise<ContractTransaction>;

  "notifyProfitSharing()"(overrides?: Overrides): Promise<ContractTransaction>;

  profitShareIncentiveDaily(overrides?: CallOverrides): Promise<BigNumber>;

  "profitShareIncentiveDaily()"(overrides?: CallOverrides): Promise<BigNumber>;

  setFeeRewardForwarder(
    newForwarder: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setFeeRewardForwarder(address)"(
    newForwarder: string,
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

  callStatic: {
    alreadyNotified(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "alreadyNotified(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    controller(overrides?: CallOverrides): Promise<string>;

    "controller()"(overrides?: CallOverrides): Promise<string>;

    farm(overrides?: CallOverrides): Promise<string>;

    "farm()"(overrides?: CallOverrides): Promise<string>;

    feeRewardForwarder(overrides?: CallOverrides): Promise<string>;

    "feeRewardForwarder()"(overrides?: CallOverrides): Promise<string>;

    governance(overrides?: CallOverrides): Promise<string>;

    "governance()"(overrides?: CallOverrides): Promise<string>;

    lastProfitShareTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "lastProfitShareTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    notifyPools(
      amounts: BigNumberish[],
      pools: string[],
      sum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "notifyPools(uint256[],address[],uint256)"(
      amounts: BigNumberish[],
      pools: string[],
      sum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    notifyPoolsIncludingProfitShare(
      amounts: BigNumberish[],
      pools: string[],
      profitShareIncentiveForWeek: BigNumberish,
      firstProfitShareTimestamp: BigNumberish,
      sum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "notifyPoolsIncludingProfitShare(uint256[],address[],uint256,uint256,uint256)"(
      amounts: BigNumberish[],
      pools: string[],
      profitShareIncentiveForWeek: BigNumberish,
      firstProfitShareTimestamp: BigNumberish,
      sum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    notifyProfitSharing(overrides?: CallOverrides): Promise<void>;

    "notifyProfitSharing()"(overrides?: CallOverrides): Promise<void>;

    profitShareIncentiveDaily(overrides?: CallOverrides): Promise<BigNumber>;

    "profitShareIncentiveDaily()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setFeeRewardForwarder(
      newForwarder: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setFeeRewardForwarder(address)"(
      newForwarder: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setStorage(_store: string, overrides?: CallOverrides): Promise<void>;

    "setStorage(address)"(
      _store: string,
      overrides?: CallOverrides
    ): Promise<void>;

    store(overrides?: CallOverrides): Promise<string>;

    "store()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    alreadyNotified(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "alreadyNotified(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<BigNumber>;

    "controller()"(overrides?: CallOverrides): Promise<BigNumber>;

    farm(overrides?: CallOverrides): Promise<BigNumber>;

    "farm()"(overrides?: CallOverrides): Promise<BigNumber>;

    feeRewardForwarder(overrides?: CallOverrides): Promise<BigNumber>;

    "feeRewardForwarder()"(overrides?: CallOverrides): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<BigNumber>;

    "governance()"(overrides?: CallOverrides): Promise<BigNumber>;

    lastProfitShareTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "lastProfitShareTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    notifyPools(
      amounts: BigNumberish[],
      pools: string[],
      sum: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "notifyPools(uint256[],address[],uint256)"(
      amounts: BigNumberish[],
      pools: string[],
      sum: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    notifyPoolsIncludingProfitShare(
      amounts: BigNumberish[],
      pools: string[],
      profitShareIncentiveForWeek: BigNumberish,
      firstProfitShareTimestamp: BigNumberish,
      sum: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "notifyPoolsIncludingProfitShare(uint256[],address[],uint256,uint256,uint256)"(
      amounts: BigNumberish[],
      pools: string[],
      profitShareIncentiveForWeek: BigNumberish,
      firstProfitShareTimestamp: BigNumberish,
      sum: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    notifyProfitSharing(overrides?: Overrides): Promise<BigNumber>;

    "notifyProfitSharing()"(overrides?: Overrides): Promise<BigNumber>;

    profitShareIncentiveDaily(overrides?: CallOverrides): Promise<BigNumber>;

    "profitShareIncentiveDaily()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setFeeRewardForwarder(
      newForwarder: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setFeeRewardForwarder(address)"(
      newForwarder: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setStorage(_store: string, overrides?: Overrides): Promise<BigNumber>;

    "setStorage(address)"(
      _store: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    store(overrides?: CallOverrides): Promise<BigNumber>;

    "store()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    alreadyNotified(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "alreadyNotified(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "controller()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    farm(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "farm()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeRewardForwarder(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "feeRewardForwarder()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "governance()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastProfitShareTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "lastProfitShareTimestamp()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    notifyPools(
      amounts: BigNumberish[],
      pools: string[],
      sum: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "notifyPools(uint256[],address[],uint256)"(
      amounts: BigNumberish[],
      pools: string[],
      sum: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    notifyPoolsIncludingProfitShare(
      amounts: BigNumberish[],
      pools: string[],
      profitShareIncentiveForWeek: BigNumberish,
      firstProfitShareTimestamp: BigNumberish,
      sum: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "notifyPoolsIncludingProfitShare(uint256[],address[],uint256,uint256,uint256)"(
      amounts: BigNumberish[],
      pools: string[],
      profitShareIncentiveForWeek: BigNumberish,
      firstProfitShareTimestamp: BigNumberish,
      sum: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    notifyProfitSharing(overrides?: Overrides): Promise<PopulatedTransaction>;

    "notifyProfitSharing()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    profitShareIncentiveDaily(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "profitShareIncentiveDaily()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setFeeRewardForwarder(
      newForwarder: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setFeeRewardForwarder(address)"(
      newForwarder: string,
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
  };
}
