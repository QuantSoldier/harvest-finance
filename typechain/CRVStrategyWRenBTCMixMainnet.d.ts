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

interface CRVStrategyWRenBTCMixMainnetInterface extends ethers.utils.Interface {
  functions: {
    "__crv()": FunctionFragment;
    "__curve()": FunctionFragment;
    "__gauge()": FunctionFragment;
    "__mintr()": FunctionFragment;
    "__tokenIndex()": FunctionFragment;
    "__uniswap()": FunctionFragment;
    "__wbtc()": FunctionFragment;
    "__wbtcMix()": FunctionFragment;
    "__weth()": FunctionFragment;
    "controller()": FunctionFragment;
    "crv()": FunctionFragment;
    "curve()": FunctionFragment;
    "depositArbCheck()": FunctionFragment;
    "doHardWork()": FunctionFragment;
    "gauge()": FunctionFragment;
    "governance()": FunctionFragment;
    "investedUnderlyingBalance()": FunctionFragment;
    "mintr()": FunctionFragment;
    "mixToken()": FunctionFragment;
    "profitSharingDenominator()": FunctionFragment;
    "profitSharingNumerator()": FunctionFragment;
    "salvage(address,address,uint256)": FunctionFragment;
    "sell()": FunctionFragment;
    "sellFloor()": FunctionFragment;
    "setSell(bool)": FunctionFragment;
    "setSellFloor(uint256)": FunctionFragment;
    "setStorage(address)": FunctionFragment;
    "store()": FunctionFragment;
    "underlying()": FunctionFragment;
    "uni()": FunctionFragment;
    "uniswap_CRV2WBTC(uint256)": FunctionFragment;
    "unsalvagableTokens(address)": FunctionFragment;
    "vault()": FunctionFragment;
    "wbtc()": FunctionFragment;
    "withdrawAllToVault()": FunctionFragment;
    "withdrawToVault(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "__crv", values?: undefined): string;
  encodeFunctionData(functionFragment: "__curve", values?: undefined): string;
  encodeFunctionData(functionFragment: "__gauge", values?: undefined): string;
  encodeFunctionData(functionFragment: "__mintr", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "__tokenIndex",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "__uniswap", values?: undefined): string;
  encodeFunctionData(functionFragment: "__wbtc", values?: undefined): string;
  encodeFunctionData(functionFragment: "__wbtcMix", values?: undefined): string;
  encodeFunctionData(functionFragment: "__weth", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "controller",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "crv", values?: undefined): string;
  encodeFunctionData(functionFragment: "curve", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "depositArbCheck",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "doHardWork",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "gauge", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "governance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "investedUnderlyingBalance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "mintr", values?: undefined): string;
  encodeFunctionData(functionFragment: "mixToken", values?: undefined): string;
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
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "sell", values?: undefined): string;
  encodeFunctionData(functionFragment: "sellFloor", values?: undefined): string;
  encodeFunctionData(functionFragment: "setSell", values: [boolean]): string;
  encodeFunctionData(
    functionFragment: "setSellFloor",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setStorage", values: [string]): string;
  encodeFunctionData(functionFragment: "store", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "underlying",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "uni", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "uniswap_CRV2WBTC",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unsalvagableTokens",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;
  encodeFunctionData(functionFragment: "wbtc", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawAllToVault",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawToVault",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "__crv", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "__curve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "__gauge", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "__mintr", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "__tokenIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "__uniswap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "__wbtc", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "__wbtcMix", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "__weth", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "controller", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "crv", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "curve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositArbCheck",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "doHardWork", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gauge", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "investedUnderlyingBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mintr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mixToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "profitSharingDenominator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "profitSharingNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "salvage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sell", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sellFloor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setSell", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setSellFloor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setStorage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "store", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "underlying", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "uni", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "uniswap_CRV2WBTC",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unsalvagableTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wbtc", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAllToVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawToVault",
    data: BytesLike
  ): Result;

  events: {
    "Liquidating(uint256)": EventFragment;
    "NotLiquidating(uint256)": EventFragment;
    "ProfitLog(uint256,uint256,uint256,uint256)": EventFragment;
    "ProfitsNotCollected()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Liquidating"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NotLiquidating"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProfitLog"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProfitsNotCollected"): EventFragment;
}

export class CRVStrategyWRenBTCMixMainnet extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: CRVStrategyWRenBTCMixMainnetInterface;

  functions: {
    __crv(overrides?: CallOverrides): Promise<[string]>;

    "__crv()"(overrides?: CallOverrides): Promise<[string]>;

    __curve(overrides?: CallOverrides): Promise<[string]>;

    "__curve()"(overrides?: CallOverrides): Promise<[string]>;

    __gauge(overrides?: CallOverrides): Promise<[string]>;

    "__gauge()"(overrides?: CallOverrides): Promise<[string]>;

    __mintr(overrides?: CallOverrides): Promise<[string]>;

    "__mintr()"(overrides?: CallOverrides): Promise<[string]>;

    __tokenIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    "__tokenIndex()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    __uniswap(overrides?: CallOverrides): Promise<[string]>;

    "__uniswap()"(overrides?: CallOverrides): Promise<[string]>;

    __wbtc(overrides?: CallOverrides): Promise<[string]>;

    "__wbtc()"(overrides?: CallOverrides): Promise<[string]>;

    __wbtcMix(overrides?: CallOverrides): Promise<[string]>;

    "__wbtcMix()"(overrides?: CallOverrides): Promise<[string]>;

    __weth(overrides?: CallOverrides): Promise<[string]>;

    "__weth()"(overrides?: CallOverrides): Promise<[string]>;

    controller(overrides?: CallOverrides): Promise<[string]>;

    "controller()"(overrides?: CallOverrides): Promise<[string]>;

    crv(overrides?: CallOverrides): Promise<[string]>;

    "crv()"(overrides?: CallOverrides): Promise<[string]>;

    curve(overrides?: CallOverrides): Promise<[string]>;

    "curve()"(overrides?: CallOverrides): Promise<[string]>;

    depositArbCheck(overrides?: CallOverrides): Promise<[boolean]>;

    "depositArbCheck()"(overrides?: CallOverrides): Promise<[boolean]>;

    doHardWork(overrides?: Overrides): Promise<ContractTransaction>;

    "doHardWork()"(overrides?: Overrides): Promise<ContractTransaction>;

    gauge(overrides?: CallOverrides): Promise<[string]>;

    "gauge()"(overrides?: CallOverrides): Promise<[string]>;

    governance(overrides?: CallOverrides): Promise<[string]>;

    "governance()"(overrides?: CallOverrides): Promise<[string]>;

    investedUnderlyingBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    "investedUnderlyingBalance()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    mintr(overrides?: CallOverrides): Promise<[string]>;

    "mintr()"(overrides?: CallOverrides): Promise<[string]>;

    mixToken(overrides?: CallOverrides): Promise<[string]>;

    "mixToken()"(overrides?: CallOverrides): Promise<[string]>;

    profitSharingDenominator(overrides?: CallOverrides): Promise<[BigNumber]>;

    "profitSharingDenominator()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    profitSharingNumerator(overrides?: CallOverrides): Promise<[BigNumber]>;

    "profitSharingNumerator()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    salvage(
      recipient: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "salvage(address,address,uint256)"(
      recipient: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    sell(overrides?: CallOverrides): Promise<[boolean]>;

    "sell()"(overrides?: CallOverrides): Promise<[boolean]>;

    sellFloor(overrides?: CallOverrides): Promise<[BigNumber]>;

    "sellFloor()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    setSell(s: boolean, overrides?: Overrides): Promise<ContractTransaction>;

    "setSell(bool)"(
      s: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setSellFloor(
      floor: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setSellFloor(uint256)"(
      floor: BigNumberish,
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

    underlying(overrides?: CallOverrides): Promise<[string]>;

    "underlying()"(overrides?: CallOverrides): Promise<[string]>;

    uni(overrides?: CallOverrides): Promise<[string]>;

    "uni()"(overrides?: CallOverrides): Promise<[string]>;

    uniswap_CRV2WBTC(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "uniswap_CRV2WBTC(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    unsalvagableTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "unsalvagableTokens(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    vault(overrides?: CallOverrides): Promise<[string]>;

    "vault()"(overrides?: CallOverrides): Promise<[string]>;

    wbtc(overrides?: CallOverrides): Promise<[string]>;

    "wbtc()"(overrides?: CallOverrides): Promise<[string]>;

    withdrawAllToVault(overrides?: Overrides): Promise<ContractTransaction>;

    "withdrawAllToVault()"(overrides?: Overrides): Promise<ContractTransaction>;

    withdrawToVault(
      amountUnderlying: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdrawToVault(uint256)"(
      amountUnderlying: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  __crv(overrides?: CallOverrides): Promise<string>;

  "__crv()"(overrides?: CallOverrides): Promise<string>;

  __curve(overrides?: CallOverrides): Promise<string>;

  "__curve()"(overrides?: CallOverrides): Promise<string>;

  __gauge(overrides?: CallOverrides): Promise<string>;

  "__gauge()"(overrides?: CallOverrides): Promise<string>;

  __mintr(overrides?: CallOverrides): Promise<string>;

  "__mintr()"(overrides?: CallOverrides): Promise<string>;

  __tokenIndex(overrides?: CallOverrides): Promise<BigNumber>;

  "__tokenIndex()"(overrides?: CallOverrides): Promise<BigNumber>;

  __uniswap(overrides?: CallOverrides): Promise<string>;

  "__uniswap()"(overrides?: CallOverrides): Promise<string>;

  __wbtc(overrides?: CallOverrides): Promise<string>;

  "__wbtc()"(overrides?: CallOverrides): Promise<string>;

  __wbtcMix(overrides?: CallOverrides): Promise<string>;

  "__wbtcMix()"(overrides?: CallOverrides): Promise<string>;

  __weth(overrides?: CallOverrides): Promise<string>;

  "__weth()"(overrides?: CallOverrides): Promise<string>;

  controller(overrides?: CallOverrides): Promise<string>;

  "controller()"(overrides?: CallOverrides): Promise<string>;

  crv(overrides?: CallOverrides): Promise<string>;

  "crv()"(overrides?: CallOverrides): Promise<string>;

  curve(overrides?: CallOverrides): Promise<string>;

  "curve()"(overrides?: CallOverrides): Promise<string>;

  depositArbCheck(overrides?: CallOverrides): Promise<boolean>;

  "depositArbCheck()"(overrides?: CallOverrides): Promise<boolean>;

  doHardWork(overrides?: Overrides): Promise<ContractTransaction>;

  "doHardWork()"(overrides?: Overrides): Promise<ContractTransaction>;

  gauge(overrides?: CallOverrides): Promise<string>;

  "gauge()"(overrides?: CallOverrides): Promise<string>;

  governance(overrides?: CallOverrides): Promise<string>;

  "governance()"(overrides?: CallOverrides): Promise<string>;

  investedUnderlyingBalance(overrides?: CallOverrides): Promise<BigNumber>;

  "investedUnderlyingBalance()"(overrides?: CallOverrides): Promise<BigNumber>;

  mintr(overrides?: CallOverrides): Promise<string>;

  "mintr()"(overrides?: CallOverrides): Promise<string>;

  mixToken(overrides?: CallOverrides): Promise<string>;

  "mixToken()"(overrides?: CallOverrides): Promise<string>;

  profitSharingDenominator(overrides?: CallOverrides): Promise<BigNumber>;

  "profitSharingDenominator()"(overrides?: CallOverrides): Promise<BigNumber>;

  profitSharingNumerator(overrides?: CallOverrides): Promise<BigNumber>;

  "profitSharingNumerator()"(overrides?: CallOverrides): Promise<BigNumber>;

  salvage(
    recipient: string,
    token: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "salvage(address,address,uint256)"(
    recipient: string,
    token: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  sell(overrides?: CallOverrides): Promise<boolean>;

  "sell()"(overrides?: CallOverrides): Promise<boolean>;

  sellFloor(overrides?: CallOverrides): Promise<BigNumber>;

  "sellFloor()"(overrides?: CallOverrides): Promise<BigNumber>;

  setSell(s: boolean, overrides?: Overrides): Promise<ContractTransaction>;

  "setSell(bool)"(
    s: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setSellFloor(
    floor: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setSellFloor(uint256)"(
    floor: BigNumberish,
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

  underlying(overrides?: CallOverrides): Promise<string>;

  "underlying()"(overrides?: CallOverrides): Promise<string>;

  uni(overrides?: CallOverrides): Promise<string>;

  "uni()"(overrides?: CallOverrides): Promise<string>;

  uniswap_CRV2WBTC(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "uniswap_CRV2WBTC(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  unsalvagableTokens(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "unsalvagableTokens(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  vault(overrides?: CallOverrides): Promise<string>;

  "vault()"(overrides?: CallOverrides): Promise<string>;

  wbtc(overrides?: CallOverrides): Promise<string>;

  "wbtc()"(overrides?: CallOverrides): Promise<string>;

  withdrawAllToVault(overrides?: Overrides): Promise<ContractTransaction>;

  "withdrawAllToVault()"(overrides?: Overrides): Promise<ContractTransaction>;

  withdrawToVault(
    amountUnderlying: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdrawToVault(uint256)"(
    amountUnderlying: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    __crv(overrides?: CallOverrides): Promise<string>;

    "__crv()"(overrides?: CallOverrides): Promise<string>;

    __curve(overrides?: CallOverrides): Promise<string>;

    "__curve()"(overrides?: CallOverrides): Promise<string>;

    __gauge(overrides?: CallOverrides): Promise<string>;

    "__gauge()"(overrides?: CallOverrides): Promise<string>;

    __mintr(overrides?: CallOverrides): Promise<string>;

    "__mintr()"(overrides?: CallOverrides): Promise<string>;

    __tokenIndex(overrides?: CallOverrides): Promise<BigNumber>;

    "__tokenIndex()"(overrides?: CallOverrides): Promise<BigNumber>;

    __uniswap(overrides?: CallOverrides): Promise<string>;

    "__uniswap()"(overrides?: CallOverrides): Promise<string>;

    __wbtc(overrides?: CallOverrides): Promise<string>;

    "__wbtc()"(overrides?: CallOverrides): Promise<string>;

    __wbtcMix(overrides?: CallOverrides): Promise<string>;

    "__wbtcMix()"(overrides?: CallOverrides): Promise<string>;

    __weth(overrides?: CallOverrides): Promise<string>;

    "__weth()"(overrides?: CallOverrides): Promise<string>;

    controller(overrides?: CallOverrides): Promise<string>;

    "controller()"(overrides?: CallOverrides): Promise<string>;

    crv(overrides?: CallOverrides): Promise<string>;

    "crv()"(overrides?: CallOverrides): Promise<string>;

    curve(overrides?: CallOverrides): Promise<string>;

    "curve()"(overrides?: CallOverrides): Promise<string>;

    depositArbCheck(overrides?: CallOverrides): Promise<boolean>;

    "depositArbCheck()"(overrides?: CallOverrides): Promise<boolean>;

    doHardWork(overrides?: CallOverrides): Promise<void>;

    "doHardWork()"(overrides?: CallOverrides): Promise<void>;

    gauge(overrides?: CallOverrides): Promise<string>;

    "gauge()"(overrides?: CallOverrides): Promise<string>;

    governance(overrides?: CallOverrides): Promise<string>;

    "governance()"(overrides?: CallOverrides): Promise<string>;

    investedUnderlyingBalance(overrides?: CallOverrides): Promise<BigNumber>;

    "investedUnderlyingBalance()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mintr(overrides?: CallOverrides): Promise<string>;

    "mintr()"(overrides?: CallOverrides): Promise<string>;

    mixToken(overrides?: CallOverrides): Promise<string>;

    "mixToken()"(overrides?: CallOverrides): Promise<string>;

    profitSharingDenominator(overrides?: CallOverrides): Promise<BigNumber>;

    "profitSharingDenominator()"(overrides?: CallOverrides): Promise<BigNumber>;

    profitSharingNumerator(overrides?: CallOverrides): Promise<BigNumber>;

    "profitSharingNumerator()"(overrides?: CallOverrides): Promise<BigNumber>;

    salvage(
      recipient: string,
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "salvage(address,address,uint256)"(
      recipient: string,
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    sell(overrides?: CallOverrides): Promise<boolean>;

    "sell()"(overrides?: CallOverrides): Promise<boolean>;

    sellFloor(overrides?: CallOverrides): Promise<BigNumber>;

    "sellFloor()"(overrides?: CallOverrides): Promise<BigNumber>;

    setSell(s: boolean, overrides?: CallOverrides): Promise<void>;

    "setSell(bool)"(s: boolean, overrides?: CallOverrides): Promise<void>;

    setSellFloor(floor: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "setSellFloor(uint256)"(
      floor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setStorage(_store: string, overrides?: CallOverrides): Promise<void>;

    "setStorage(address)"(
      _store: string,
      overrides?: CallOverrides
    ): Promise<void>;

    store(overrides?: CallOverrides): Promise<string>;

    "store()"(overrides?: CallOverrides): Promise<string>;

    underlying(overrides?: CallOverrides): Promise<string>;

    "underlying()"(overrides?: CallOverrides): Promise<string>;

    uni(overrides?: CallOverrides): Promise<string>;

    "uni()"(overrides?: CallOverrides): Promise<string>;

    uniswap_CRV2WBTC(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "uniswap_CRV2WBTC(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    unsalvagableTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "unsalvagableTokens(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    vault(overrides?: CallOverrides): Promise<string>;

    "vault()"(overrides?: CallOverrides): Promise<string>;

    wbtc(overrides?: CallOverrides): Promise<string>;

    "wbtc()"(overrides?: CallOverrides): Promise<string>;

    withdrawAllToVault(overrides?: CallOverrides): Promise<void>;

    "withdrawAllToVault()"(overrides?: CallOverrides): Promise<void>;

    withdrawToVault(
      amountUnderlying: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawToVault(uint256)"(
      amountUnderlying: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Liquidating(amount: null): EventFilter;

    NotLiquidating(amount: null): EventFilter;

    ProfitLog(
      oldBalance: null,
      newBalance: null,
      feeAmount: null,
      timestamp: null
    ): EventFilter;

    ProfitsNotCollected(): EventFilter;
  };

  estimateGas: {
    __crv(overrides?: CallOverrides): Promise<BigNumber>;

    "__crv()"(overrides?: CallOverrides): Promise<BigNumber>;

    __curve(overrides?: CallOverrides): Promise<BigNumber>;

    "__curve()"(overrides?: CallOverrides): Promise<BigNumber>;

    __gauge(overrides?: CallOverrides): Promise<BigNumber>;

    "__gauge()"(overrides?: CallOverrides): Promise<BigNumber>;

    __mintr(overrides?: CallOverrides): Promise<BigNumber>;

    "__mintr()"(overrides?: CallOverrides): Promise<BigNumber>;

    __tokenIndex(overrides?: CallOverrides): Promise<BigNumber>;

    "__tokenIndex()"(overrides?: CallOverrides): Promise<BigNumber>;

    __uniswap(overrides?: CallOverrides): Promise<BigNumber>;

    "__uniswap()"(overrides?: CallOverrides): Promise<BigNumber>;

    __wbtc(overrides?: CallOverrides): Promise<BigNumber>;

    "__wbtc()"(overrides?: CallOverrides): Promise<BigNumber>;

    __wbtcMix(overrides?: CallOverrides): Promise<BigNumber>;

    "__wbtcMix()"(overrides?: CallOverrides): Promise<BigNumber>;

    __weth(overrides?: CallOverrides): Promise<BigNumber>;

    "__weth()"(overrides?: CallOverrides): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<BigNumber>;

    "controller()"(overrides?: CallOverrides): Promise<BigNumber>;

    crv(overrides?: CallOverrides): Promise<BigNumber>;

    "crv()"(overrides?: CallOverrides): Promise<BigNumber>;

    curve(overrides?: CallOverrides): Promise<BigNumber>;

    "curve()"(overrides?: CallOverrides): Promise<BigNumber>;

    depositArbCheck(overrides?: CallOverrides): Promise<BigNumber>;

    "depositArbCheck()"(overrides?: CallOverrides): Promise<BigNumber>;

    doHardWork(overrides?: Overrides): Promise<BigNumber>;

    "doHardWork()"(overrides?: Overrides): Promise<BigNumber>;

    gauge(overrides?: CallOverrides): Promise<BigNumber>;

    "gauge()"(overrides?: CallOverrides): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<BigNumber>;

    "governance()"(overrides?: CallOverrides): Promise<BigNumber>;

    investedUnderlyingBalance(overrides?: CallOverrides): Promise<BigNumber>;

    "investedUnderlyingBalance()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mintr(overrides?: CallOverrides): Promise<BigNumber>;

    "mintr()"(overrides?: CallOverrides): Promise<BigNumber>;

    mixToken(overrides?: CallOverrides): Promise<BigNumber>;

    "mixToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    profitSharingDenominator(overrides?: CallOverrides): Promise<BigNumber>;

    "profitSharingDenominator()"(overrides?: CallOverrides): Promise<BigNumber>;

    profitSharingNumerator(overrides?: CallOverrides): Promise<BigNumber>;

    "profitSharingNumerator()"(overrides?: CallOverrides): Promise<BigNumber>;

    salvage(
      recipient: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "salvage(address,address,uint256)"(
      recipient: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    sell(overrides?: CallOverrides): Promise<BigNumber>;

    "sell()"(overrides?: CallOverrides): Promise<BigNumber>;

    sellFloor(overrides?: CallOverrides): Promise<BigNumber>;

    "sellFloor()"(overrides?: CallOverrides): Promise<BigNumber>;

    setSell(s: boolean, overrides?: Overrides): Promise<BigNumber>;

    "setSell(bool)"(s: boolean, overrides?: Overrides): Promise<BigNumber>;

    setSellFloor(
      floor: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setSellFloor(uint256)"(
      floor: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setStorage(_store: string, overrides?: Overrides): Promise<BigNumber>;

    "setStorage(address)"(
      _store: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    store(overrides?: CallOverrides): Promise<BigNumber>;

    "store()"(overrides?: CallOverrides): Promise<BigNumber>;

    underlying(overrides?: CallOverrides): Promise<BigNumber>;

    "underlying()"(overrides?: CallOverrides): Promise<BigNumber>;

    uni(overrides?: CallOverrides): Promise<BigNumber>;

    "uni()"(overrides?: CallOverrides): Promise<BigNumber>;

    uniswap_CRV2WBTC(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "uniswap_CRV2WBTC(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unsalvagableTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "unsalvagableTokens(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<BigNumber>;

    "vault()"(overrides?: CallOverrides): Promise<BigNumber>;

    wbtc(overrides?: CallOverrides): Promise<BigNumber>;

    "wbtc()"(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawAllToVault(overrides?: Overrides): Promise<BigNumber>;

    "withdrawAllToVault()"(overrides?: Overrides): Promise<BigNumber>;

    withdrawToVault(
      amountUnderlying: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "withdrawToVault(uint256)"(
      amountUnderlying: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    __crv(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "__crv()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    __curve(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "__curve()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    __gauge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "__gauge()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    __mintr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "__mintr()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    __tokenIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "__tokenIndex()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    __uniswap(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "__uniswap()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    __wbtc(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "__wbtc()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    __wbtcMix(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "__wbtcMix()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    __weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "__weth()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "controller()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    crv(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "crv()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    curve(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "curve()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    depositArbCheck(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "depositArbCheck()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    doHardWork(overrides?: Overrides): Promise<PopulatedTransaction>;

    "doHardWork()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    gauge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "gauge()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "governance()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    investedUnderlyingBalance(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "investedUnderlyingBalance()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mintr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "mintr()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mixToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "mixToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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
      recipient: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "salvage(address,address,uint256)"(
      recipient: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    sell(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "sell()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sellFloor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "sellFloor()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setSell(s: boolean, overrides?: Overrides): Promise<PopulatedTransaction>;

    "setSell(bool)"(
      s: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setSellFloor(
      floor: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setSellFloor(uint256)"(
      floor: BigNumberish,
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

    underlying(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "underlying()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    uni(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "uni()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    uniswap_CRV2WBTC(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "uniswap_CRV2WBTC(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unsalvagableTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "unsalvagableTokens(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "vault()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wbtc(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "wbtc()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawAllToVault(overrides?: Overrides): Promise<PopulatedTransaction>;

    "withdrawAllToVault()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdrawToVault(
      amountUnderlying: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdrawToVault(uint256)"(
      amountUnderlying: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}