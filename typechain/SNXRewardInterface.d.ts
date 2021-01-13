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

interface SNXRewardInterfaceInterface extends ethers.utils.Interface {
  functions: {
    "balanceOf(address)": FunctionFragment;
    "earned(address)": FunctionFragment;
    "exit()": FunctionFragment;
    "getReward()": FunctionFragment;
    "stake(uint256)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "earned", values: [string]): string;
  encodeFunctionData(functionFragment: "exit", values?: undefined): string;
  encodeFunctionData(functionFragment: "getReward", values?: undefined): string;
  encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {};
}

export class SNXRewardInterface extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: SNXRewardInterfaceInterface;

  functions: {
    balanceOf(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "balanceOf(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    earned(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "earned(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    exit(overrides?: Overrides): Promise<ContractTransaction>;

    "exit()"(overrides?: Overrides): Promise<ContractTransaction>;

    getReward(overrides?: Overrides): Promise<ContractTransaction>;

    "getReward()"(overrides?: Overrides): Promise<ContractTransaction>;

    stake(
      arg0: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "stake(uint256)"(
      arg0: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdraw(
      arg0: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdraw(uint256)"(
      arg0: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  earned(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  "earned(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  exit(overrides?: Overrides): Promise<ContractTransaction>;

  "exit()"(overrides?: Overrides): Promise<ContractTransaction>;

  getReward(overrides?: Overrides): Promise<ContractTransaction>;

  "getReward()"(overrides?: Overrides): Promise<ContractTransaction>;

  stake(
    arg0: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "stake(uint256)"(
    arg0: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdraw(
    arg0: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdraw(uint256)"(
    arg0: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    earned(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "earned(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exit(overrides?: CallOverrides): Promise<void>;

    "exit()"(overrides?: CallOverrides): Promise<void>;

    getReward(overrides?: CallOverrides): Promise<void>;

    "getReward()"(overrides?: CallOverrides): Promise<void>;

    stake(arg0: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "stake(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(arg0: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "withdraw(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    earned(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "earned(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exit(overrides?: Overrides): Promise<BigNumber>;

    "exit()"(overrides?: Overrides): Promise<BigNumber>;

    getReward(overrides?: Overrides): Promise<BigNumber>;

    "getReward()"(overrides?: Overrides): Promise<BigNumber>;

    stake(arg0: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "stake(uint256)"(
      arg0: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdraw(arg0: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "withdraw(uint256)"(
      arg0: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    earned(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "earned(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exit(overrides?: Overrides): Promise<PopulatedTransaction>;

    "exit()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    getReward(overrides?: Overrides): Promise<PopulatedTransaction>;

    "getReward()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    stake(
      arg0: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "stake(uint256)"(
      arg0: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      arg0: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdraw(uint256)"(
      arg0: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}