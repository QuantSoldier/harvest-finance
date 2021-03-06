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

interface DelayMinterInterface extends ethers.utils.Interface {
  functions: {
    "announceMint(address,uint256)": FunctionFragment;
    "cancelMint(uint256)": FunctionFragment;
    "delay()": FunctionFragment;
    "executeMint(uint256)": FunctionFragment;
    "governance()": FunctionFragment;
    "lpRatio()": FunctionFragment;
    "nextId()": FunctionFragment;
    "operationRatio()": FunctionFragment;
    "operator()": FunctionFragment;
    "renounceMinting()": FunctionFragment;
    "setOperator(address)": FunctionFragment;
    "setStorage(address)": FunctionFragment;
    "setTeam(address)": FunctionFragment;
    "store()": FunctionFragment;
    "team()": FunctionFragment;
    "teamRatio()": FunctionFragment;
    "token()": FunctionFragment;
    "totalRatio()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "announceMint",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelMint",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "delay", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "executeMint",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "governance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "lpRatio", values?: undefined): string;
  encodeFunctionData(functionFragment: "nextId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "operationRatio",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "operator", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceMinting",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setOperator", values: [string]): string;
  encodeFunctionData(functionFragment: "setStorage", values: [string]): string;
  encodeFunctionData(functionFragment: "setTeam", values: [string]): string;
  encodeFunctionData(functionFragment: "store", values?: undefined): string;
  encodeFunctionData(functionFragment: "team", values?: undefined): string;
  encodeFunctionData(functionFragment: "teamRatio", values?: undefined): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalRatio",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "announceMint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cancelMint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "delay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeMint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lpRatio", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nextId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "operationRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "operator", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceMinting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setStorage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setTeam", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "store", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "team", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "teamRatio", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totalRatio", data: BytesLike): Result;

  events: {
    "CancelMinting(uint256)": EventFragment;
    "MintingAnnounced(uint256,address,uint256,uint256)": EventFragment;
    "NewOperator(address)": EventFragment;
    "NewTeam(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CancelMinting"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MintingAnnounced"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewOperator"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewTeam"): EventFragment;
}

export class DelayMinter extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: DelayMinterInterface;

  functions: {
    announceMint(
      _target: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "announceMint(address,uint256)"(
      _target: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    cancelMint(
      _id: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "cancelMint(uint256)"(
      _id: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    delay(overrides?: CallOverrides): Promise<[BigNumber]>;

    "delay()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    executeMint(
      _id: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "executeMint(uint256)"(
      _id: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    governance(overrides?: CallOverrides): Promise<[string]>;

    "governance()"(overrides?: CallOverrides): Promise<[string]>;

    lpRatio(overrides?: CallOverrides): Promise<[BigNumber]>;

    "lpRatio()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    nextId(overrides?: CallOverrides): Promise<[BigNumber]>;

    "nextId()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    operationRatio(overrides?: CallOverrides): Promise<[BigNumber]>;

    "operationRatio()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    operator(overrides?: CallOverrides): Promise<[string]>;

    "operator()"(overrides?: CallOverrides): Promise<[string]>;

    renounceMinting(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceMinting()"(overrides?: Overrides): Promise<ContractTransaction>;

    setOperator(
      _operator: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setOperator(address)"(
      _operator: string,
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

    setTeam(_team: string, overrides?: Overrides): Promise<ContractTransaction>;

    "setTeam(address)"(
      _team: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    store(overrides?: CallOverrides): Promise<[string]>;

    "store()"(overrides?: CallOverrides): Promise<[string]>;

    team(overrides?: CallOverrides): Promise<[string]>;

    "team()"(overrides?: CallOverrides): Promise<[string]>;

    teamRatio(overrides?: CallOverrides): Promise<[BigNumber]>;

    "teamRatio()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    "token()"(overrides?: CallOverrides): Promise<[string]>;

    totalRatio(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalRatio()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  announceMint(
    _target: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "announceMint(address,uint256)"(
    _target: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  cancelMint(
    _id: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "cancelMint(uint256)"(
    _id: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  delay(overrides?: CallOverrides): Promise<BigNumber>;

  "delay()"(overrides?: CallOverrides): Promise<BigNumber>;

  executeMint(
    _id: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "executeMint(uint256)"(
    _id: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  governance(overrides?: CallOverrides): Promise<string>;

  "governance()"(overrides?: CallOverrides): Promise<string>;

  lpRatio(overrides?: CallOverrides): Promise<BigNumber>;

  "lpRatio()"(overrides?: CallOverrides): Promise<BigNumber>;

  nextId(overrides?: CallOverrides): Promise<BigNumber>;

  "nextId()"(overrides?: CallOverrides): Promise<BigNumber>;

  operationRatio(overrides?: CallOverrides): Promise<BigNumber>;

  "operationRatio()"(overrides?: CallOverrides): Promise<BigNumber>;

  operator(overrides?: CallOverrides): Promise<string>;

  "operator()"(overrides?: CallOverrides): Promise<string>;

  renounceMinting(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceMinting()"(overrides?: Overrides): Promise<ContractTransaction>;

  setOperator(
    _operator: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setOperator(address)"(
    _operator: string,
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

  setTeam(_team: string, overrides?: Overrides): Promise<ContractTransaction>;

  "setTeam(address)"(
    _team: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  store(overrides?: CallOverrides): Promise<string>;

  "store()"(overrides?: CallOverrides): Promise<string>;

  team(overrides?: CallOverrides): Promise<string>;

  "team()"(overrides?: CallOverrides): Promise<string>;

  teamRatio(overrides?: CallOverrides): Promise<BigNumber>;

  "teamRatio()"(overrides?: CallOverrides): Promise<BigNumber>;

  token(overrides?: CallOverrides): Promise<string>;

  "token()"(overrides?: CallOverrides): Promise<string>;

  totalRatio(overrides?: CallOverrides): Promise<BigNumber>;

  "totalRatio()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    announceMint(
      _target: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "announceMint(address,uint256)"(
      _target: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelMint(_id: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "cancelMint(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    delay(overrides?: CallOverrides): Promise<BigNumber>;

    "delay()"(overrides?: CallOverrides): Promise<BigNumber>;

    executeMint(_id: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "executeMint(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    governance(overrides?: CallOverrides): Promise<string>;

    "governance()"(overrides?: CallOverrides): Promise<string>;

    lpRatio(overrides?: CallOverrides): Promise<BigNumber>;

    "lpRatio()"(overrides?: CallOverrides): Promise<BigNumber>;

    nextId(overrides?: CallOverrides): Promise<BigNumber>;

    "nextId()"(overrides?: CallOverrides): Promise<BigNumber>;

    operationRatio(overrides?: CallOverrides): Promise<BigNumber>;

    "operationRatio()"(overrides?: CallOverrides): Promise<BigNumber>;

    operator(overrides?: CallOverrides): Promise<string>;

    "operator()"(overrides?: CallOverrides): Promise<string>;

    renounceMinting(overrides?: CallOverrides): Promise<void>;

    "renounceMinting()"(overrides?: CallOverrides): Promise<void>;

    setOperator(_operator: string, overrides?: CallOverrides): Promise<void>;

    "setOperator(address)"(
      _operator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setStorage(_store: string, overrides?: CallOverrides): Promise<void>;

    "setStorage(address)"(
      _store: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setTeam(_team: string, overrides?: CallOverrides): Promise<void>;

    "setTeam(address)"(_team: string, overrides?: CallOverrides): Promise<void>;

    store(overrides?: CallOverrides): Promise<string>;

    "store()"(overrides?: CallOverrides): Promise<string>;

    team(overrides?: CallOverrides): Promise<string>;

    "team()"(overrides?: CallOverrides): Promise<string>;

    teamRatio(overrides?: CallOverrides): Promise<BigNumber>;

    "teamRatio()"(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<string>;

    "token()"(overrides?: CallOverrides): Promise<string>;

    totalRatio(overrides?: CallOverrides): Promise<BigNumber>;

    "totalRatio()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    CancelMinting(id: null): EventFilter;

    MintingAnnounced(
      id: null,
      target: null,
      _amount: null,
      timeActive: null
    ): EventFilter;

    NewOperator(operator: null): EventFilter;

    NewTeam(team: null): EventFilter;
  };

  estimateGas: {
    announceMint(
      _target: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "announceMint(address,uint256)"(
      _target: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    cancelMint(_id: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "cancelMint(uint256)"(
      _id: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    delay(overrides?: CallOverrides): Promise<BigNumber>;

    "delay()"(overrides?: CallOverrides): Promise<BigNumber>;

    executeMint(_id: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "executeMint(uint256)"(
      _id: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<BigNumber>;

    "governance()"(overrides?: CallOverrides): Promise<BigNumber>;

    lpRatio(overrides?: CallOverrides): Promise<BigNumber>;

    "lpRatio()"(overrides?: CallOverrides): Promise<BigNumber>;

    nextId(overrides?: CallOverrides): Promise<BigNumber>;

    "nextId()"(overrides?: CallOverrides): Promise<BigNumber>;

    operationRatio(overrides?: CallOverrides): Promise<BigNumber>;

    "operationRatio()"(overrides?: CallOverrides): Promise<BigNumber>;

    operator(overrides?: CallOverrides): Promise<BigNumber>;

    "operator()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceMinting(overrides?: Overrides): Promise<BigNumber>;

    "renounceMinting()"(overrides?: Overrides): Promise<BigNumber>;

    setOperator(_operator: string, overrides?: Overrides): Promise<BigNumber>;

    "setOperator(address)"(
      _operator: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setStorage(_store: string, overrides?: Overrides): Promise<BigNumber>;

    "setStorage(address)"(
      _store: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setTeam(_team: string, overrides?: Overrides): Promise<BigNumber>;

    "setTeam(address)"(
      _team: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    store(overrides?: CallOverrides): Promise<BigNumber>;

    "store()"(overrides?: CallOverrides): Promise<BigNumber>;

    team(overrides?: CallOverrides): Promise<BigNumber>;

    "team()"(overrides?: CallOverrides): Promise<BigNumber>;

    teamRatio(overrides?: CallOverrides): Promise<BigNumber>;

    "teamRatio()"(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    "token()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalRatio(overrides?: CallOverrides): Promise<BigNumber>;

    "totalRatio()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    announceMint(
      _target: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "announceMint(address,uint256)"(
      _target: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    cancelMint(
      _id: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "cancelMint(uint256)"(
      _id: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    delay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "delay()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    executeMint(
      _id: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "executeMint(uint256)"(
      _id: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "governance()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lpRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lpRatio()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "nextId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    operationRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "operationRatio()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    operator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "operator()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceMinting(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceMinting()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    setOperator(
      _operator: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setOperator(address)"(
      _operator: string,
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

    setTeam(
      _team: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setTeam(address)"(
      _team: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    store(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "store()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    team(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "team()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    teamRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "teamRatio()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "token()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalRatio()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
