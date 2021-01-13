/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { CRVStrategyWRenBTCMixMainnet } from "../CRVStrategyWRenBTCMixMainnet";

export class CRVStrategyWRenBTCMixMainnet__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _storage: string,
    _vault: string,
    overrides?: Overrides
  ): Promise<CRVStrategyWRenBTCMixMainnet> {
    return super.deploy(
      _storage,
      _vault,
      overrides || {}
    ) as Promise<CRVStrategyWRenBTCMixMainnet>;
  }
  getDeployTransaction(
    _storage: string,
    _vault: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_storage, _vault, overrides || {});
  }
  attach(address: string): CRVStrategyWRenBTCMixMainnet {
    return super.attach(address) as CRVStrategyWRenBTCMixMainnet;
  }
  connect(signer: Signer): CRVStrategyWRenBTCMixMainnet__factory {
    return super.connect(signer) as CRVStrategyWRenBTCMixMainnet__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CRVStrategyWRenBTCMixMainnet {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CRVStrategyWRenBTCMixMainnet;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_storage",
        type: "address",
      },
      {
        internalType: "address",
        name: "_vault",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Liquidating",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "NotLiquidating",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feeAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "ProfitLog",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "ProfitsNotCollected",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "__crv",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "__curve",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "__gauge",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "__mintr",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "__tokenIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "__uniswap",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "__wbtc",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "__wbtcMix",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "__weth",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "controller",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "crv",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "curve",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "depositArbCheck",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "doHardWork",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "gauge",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "governance",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "investedUnderlyingBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "mintr",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "mixToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "profitSharingDenominator",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "profitSharingNumerator",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "salvage",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "sell",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "sellFloor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "bool",
        name: "s",
        type: "bool",
      },
    ],
    name: "setSell",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "floor",
        type: "uint256",
      },
    ],
    name: "setSellFloor",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_store",
        type: "address",
      },
    ],
    name: "setStorage",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "store",
    outputs: [
      {
        internalType: "contract Storage",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "underlying",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "uni",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uniswap_CRV2WBTC",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "unsalvagableTokens",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "vault",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "wbtc",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "withdrawAllToVault",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "amountUnderlying",
        type: "uint256",
      },
    ],
    name: "withdrawToVault",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600f805460ff1916600117905567a688906bd8b000006010553480156200002a57600080fd5b506040516200243238038062002432833981810160405260408110156200005057600080fd5b50805160209091015181732260fac5e5542a773aa44fbcfedf7c193bc2c5998260017349849c98ae39fff122806c06791fa73784fb36757393054188d876f558f4a66b2ef1d97d16edf0895b73d533a949740bb3306d119cc777fa900ba034cd5273c02aaa39b223fe8d0a0e5c4f27ead9083c756cc273b1f2cdec61db658f091671f5f199635aef202cac73d061d61a4d941c39e5453435b6345dc261c2fce0737a250d5630b4cf539739df2c5dacb4c659f2488d8a8a81806001600160a01b03811662000165576040805162461bcd60e51b815260206004820152601e60248201527f6e65772073746f726167652073686f756c646e277420626520656d7074790000604482015290519081900360640190fd5b600080546001600160a01b039283166001600160a01b0319918216179091556003805494831694821694909417909355601e600190815560646002556005805485168f84161790556007805485168d841617905560048054909416918f169190911790925550899150811115620001d857fe5b6004805460ff60a01b1916600160a01b836001811115620001f557fe5b0217905550600680546001600160a01b03199081166001600160a01b038a811691909117909255600880548216898416179055600a80548216868416179055600c80548216888416908117909155600d80548316858516179055600b805490921685841617909155604080516060810182529182528683166020830152918c16918101919091526200028c90600e906003620002f1565b50506004546001600160a01b039081166000908152600960205260408082208054600160ff199182168117909255600654851684528284208054821683179055600c5490941683529120805490921617905550620003859a5050505050505050505050565b82805482825590600052602060002090810192821562000349579160200282015b828111156200034957825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019062000312565b50620003579291506200035b565b5090565b6200038291905b80821115620003575780546001600160a01b031916815560010162000362565b90565b61209d80620003956000396000f3fe608060405234801561001057600080fd5b506004361061021c5760003560e01c806386d4b36711610125578063bfd131f1116100ad578063ded078381161007c578063ded0783814610408578063edc9af9514610410578063f03312ff14610418578063f77c479114610435578063fbfa77cf1461043d5761021c565b8063bfd131f1146103d3578063c2a2a07b146103db578063ce8c42e8146103e3578063d1e61dcb146104005761021c565b8063a6f19c84116100f4578063a6f19c841461037f578063b076a53a14610387578063b60f151a146103a6578063ba09591e146103ae578063be85ba33146103cb5761021c565b806386d4b367146103415780639137c1a714610349578063975057e71461036f578063a1dab23e146103775761021c565b80634fa5d854116101a85780636a4874a1116101775780636a4874a1146103195780636f307dc3146103215780637165485d1461032957806377be00f3146103315780637f2c7237146103395761021c565b80634fa5d854146102db57806350185946146102e35780635aa6e675146103095780635b929edd146103115761021c565b80631b0adc1f116101ef5780631b0adc1f1461029f5780632cca0cd6146102a75780633cdc5389146102af57806345710074146102b757806345d01e4a146102d35761021c565b80630240c3e914610221578063026a0dd0146102455780630facefc91461025f5780631113ef5214610267575b600080fd5b610229610445565b604080516001600160a01b039092168252519081900360200190f35b61024d61045d565b60408051918252519081900360200190f35b610229610463565b61029d6004803603606081101561027d57600080fd5b506001600160a01b0381358116916020810135909116906040013561047b565b005b61024d6105ab565b6102296105b0565b6102296105c8565b6102bf6105d7565b604080519115158252519081900360200190f35b61024d6105e0565b61029d610701565b6102bf600480360360208110156102f957600080fd5b50356001600160a01b03166107a2565b6102296107b7565b610229610837565b61022961084f565b61022961085e565b61022961086d565b61022961087c565b610229610894565b6102296108ac565b61029d6004803603602081101561035f57600080fd5b50356001600160a01b03166108c4565b6102296109fa565b61024d610a09565b610229610a0f565b61029d6004803603602081101561039d57600080fd5b50351515610a1e565b61024d610aea565b61029d600480360360208110156103c457600080fd5b5035610af0565b610229610bae565b61029d610bbd565b6102bf610dc8565b61029d600480360360208110156103f957600080fd5b5035610dcd565b610229610ff1565b610229611000565b610229611018565b6102296004803603602081101561042e57600080fd5b5035611027565b61022961104e565b61022961109d565b7393054188d876f558f4a66b2ef1d97d16edf0895b81565b60025481565b73d533a949740bb3306d119cc777fa900ba034cd5281565b600054604080516337b87c3960e21b815233600482015290516001600160a01b039092169163dee1f0e491602480820192602092909190829003018186803b1580156104c657600080fd5b505afa1580156104da573d6000803e3d6000fd5b505050506040513d60208110156104f057600080fd5b5051610534576040805162461bcd60e51b815260206004820152600e60248201526d4e6f7420676f7665726e616e636560901b604482015290519081900360640190fd5b6001600160a01b03821660009081526009602052604090205460ff161561058c5760405162461bcd60e51b8152600401808060200182810382526023815260200180611fc56023913960400191505060405180910390fd5b6105a66001600160a01b038316848363ffffffff6110ac16565b505050565b600181565b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc281565b6004546001600160a01b031681565b600f5460ff1681565b600a54604080516370a0823160e01b8152306004820152905160009283926001600160a01b03909116916370a0823191602480820192602092909190829003018186803b15801561063057600080fd5b505afa158015610644573d6000803e3d6000fd5b505050506040513d602081101561065a57600080fd5b5051600754604080516370a0823160e01b815230600482015290519293506000926001600160a01b03909216916370a0823191602480820192602092909190829003018186803b1580156106ad57600080fd5b505afa1580156106c1573d6000803e3d6000fd5b505050506040513d60208110156106d757600080fd5b50519050816106e95791506106fe9050565b6106f9828263ffffffff6110fe16565b925050505b90565b6005546001600160a01b0316331480610732575061071d61104e565b6001600160a01b0316336001600160a01b0316145b8061075557506107406107b7565b6001600160a01b0316336001600160a01b0316145b6107905760405162461bcd60e51b8152600401808060200182810382526039815260200180611f8c6039913960400191505060405180910390fd5b610798611161565b6107a06115ce565b565b60096020526000908152604090205460ff1681565b60008060009054906101000a90046001600160a01b03166001600160a01b0316635aa6e6756040518163ffffffff1660e01b815260040160206040518083038186803b15801561080657600080fd5b505afa15801561081a573d6000803e3d6000fd5b505050506040513d602081101561083057600080fd5b5051905090565b732260fac5e5542a773aa44fbcfedf7c193bc2c59981565b600c546001600160a01b031681565b6007546001600160a01b031681565b6008546001600160a01b031681565b737a250d5630b4cf539739df2c5dacb4c659f2488d81565b7349849c98ae39fff122806c06791fa73784fb367581565b73d061d61a4d941c39e5453435b6345dc261c2fce081565b600054604080516337b87c3960e21b815233600482015290516001600160a01b039092169163dee1f0e491602480820192602092909190829003018186803b15801561090f57600080fd5b505afa158015610923573d6000803e3d6000fd5b505050506040513d602081101561093957600080fd5b505161097d576040805162461bcd60e51b815260206004820152600e60248201526d4e6f7420676f7665726e616e636560901b604482015290519081900360640190fd5b6001600160a01b0381166109d8576040805162461bcd60e51b815260206004820152601e60248201527f6e65772073746f726167652073686f756c646e277420626520656d7074790000604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031681565b60105481565b600a546001600160a01b031681565b600054604080516337b87c3960e21b815233600482015290516001600160a01b039092169163dee1f0e491602480820192602092909190829003018186803b158015610a6957600080fd5b505afa158015610a7d573d6000803e3d6000fd5b505050506040513d6020811015610a9357600080fd5b5051610ad7576040805162461bcd60e51b815260206004820152600e60248201526d4e6f7420676f7665726e616e636560901b604482015290519081900360640190fd5b600f805460ff1916911515919091179055565b60015481565b600054604080516337b87c3960e21b815233600482015290516001600160a01b039092169163dee1f0e491602480820192602092909190829003018186803b158015610b3b57600080fd5b505afa158015610b4f573d6000803e3d6000fd5b505050506040513d6020811015610b6557600080fd5b5051610ba9576040805162461bcd60e51b815260206004820152600e60248201526d4e6f7420676f7665726e616e636560901b604482015290519081900360640190fd5b601055565b6006546001600160a01b031681565b6005546001600160a01b0316331480610bee5750610bd961104e565b6001600160a01b0316336001600160a01b0316145b80610c115750610bfc6107b7565b6001600160a01b0316336001600160a01b0316145b610c4c5760405162461bcd60e51b8152600401808060200182810382526039815260200180611f8c6039913960400191505060405180910390fd5b600a54604080516370a0823160e01b815230600482015290516001600160a01b0390921691632e1a7d4d9183916370a0823191602480820192602092909190829003018186803b158015610c9f57600080fd5b505afa158015610cb3573d6000803e3d6000fd5b505050506040513d6020811015610cc957600080fd5b5051604080516001600160e01b031960e085901b168152600481019290925251602480830192600092919082900301818387803b158015610d0957600080fd5b505af1158015610d1d573d6000803e3d6000fd5b5050600754604080516370a0823160e01b81523060048201529051600094506001600160a01b0390921692506370a08231916024808301926020929190829003018186803b158015610d6e57600080fd5b505afa158015610d82573d6000803e3d6000fd5b505050506040513d6020811015610d9857600080fd5b505190508015610dc557600554600754610dc5916001600160a01b0391821691168363ffffffff6110ac16565b50565b600190565b6005546001600160a01b0316331480610dfe5750610de961104e565b6001600160a01b0316336001600160a01b0316145b80610e215750610e0c6107b7565b6001600160a01b0316336001600160a01b0316145b610e5c5760405162461bcd60e51b8152600401808060200182810382526039815260200180611f8c6039913960400191505060405180910390fd5b600a54604080516370a0823160e01b815230600482015290516001600160a01b0390921691632e1a7d4d9183916370a0823191602480820192602092909190829003018186803b158015610eaf57600080fd5b505afa158015610ec3573d6000803e3d6000fd5b505050506040513d6020811015610ed957600080fd5b5051604080516001600160e01b031960e085901b168152600481019290925251602480830192600092919082900301818387803b158015610f1957600080fd5b505af1158015610f2d573d6000803e3d6000fd5b5050600754604080516370a0823160e01b81523060048201529051600094506001600160a01b0390921692506370a08231916024808301926020929190829003018186803b158015610f7e57600080fd5b505afa158015610f92573d6000803e3d6000fd5b505050506040513d6020811015610fa857600080fd5b505190508015610fe557600554610fe5906001600160a01b0316610fcc84846116fc565b6007546001600160a01b0316919063ffffffff6110ac16565b610fed6115ce565b5050565b600b546001600160a01b031681565b73b1f2cdec61db658f091671f5f199635aef202cac81565b600d546001600160a01b031681565b600e818154811061103457fe5b6000918252602090912001546001600160a01b0316905081565b60008060009054906101000a90046001600160a01b03166001600160a01b031663f77c47916040518163ffffffff1660e01b815260040160206040518083038186803b15801561080657600080fd5b6005546001600160a01b031681565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526105a6908490611712565b600082820183811015611158576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b90505b92915050565b600f5460ff16611199576040517f444bcec8acce9dc46755761662d6262a490b9f61cca73243c5131d98df078ce390600090a16107a0565b600b54600a54604080516335313c2160e11b81526001600160a01b03928316600482015290519190921691636a62784291602480830192600092919082900301818387803b1580156111ea57600080fd5b505af11580156111fe573d6000803e3d6000fd5b5050600c54604080516370a0823160e01b81523060048201529051600094506001600160a01b0390921692506370a08231916024808301926020929190829003018186803b15801561124f57600080fd5b505afa158015611263573d6000803e3d6000fd5b505050506040513d602081101561127957600080fd5b5051601054909150811115611598576040805182815290517f875c79c14f0ec82c9ae01b82cfab0d1c5c4079f1500682832fb877a7dec614fb9181900360200190a160048054604080516370a0823160e01b81523093810193909352516000926001600160a01b03909216916370a08231916024808301926020929190829003018186803b15801561130a57600080fd5b505afa15801561131e573d6000803e3d6000fd5b505050506040513d602081101561133457600080fd5b5051600d54600c5491925061135d916001600160a01b039081169116600063ffffffff6118d016565b600d54600c54611380916001600160a01b0391821691168463ffffffff6118d016565b600d546040516338ed173960e01b8152600481018481526001602483018190523060648401819052426084850181905260a060448601908152600e805460a488018190526001600160a01b03909816976338ed1739978b97929594939160c4909101908690801561141a57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116113fc575b50509650505050505050600060405180830381600087803b15801561143e57600080fd5b505af1158015611452573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561147b57600080fd5b810190808051604051939291908464010000000082111561149b57600080fd5b9083019060208201858111156114b057600080fd5b82518660208202830111640100000000821117156114cd57600080fd5b82525081516020918201928201910280838360005b838110156114fa5781810151838201526020016114e2565b50505050919091016040818152600480546370a0823160e01b84523091840191909152905161158a97508896506001600160a01b0390911694506370a08231935060248083019350602092829003018186803b15801561155957600080fd5b505afa15801561156d573d6000803e3d6000fd5b505050506040513d602081101561158357600080fd5b50516119e3565b611592611b82565b50610dc5565b6040805182815290517f56cd5c162f2d05345e02b24951c7627411fdfeba5c92af8ff4c95c57a3957e7e9181900360200190a150565b600754604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561161957600080fd5b505afa15801561162d573d6000803e3d6000fd5b505050506040513d602081101561164357600080fd5b505190508015610dc557600a54600754611671916001600160a01b039182169116600063ffffffff6118d016565b600a54600754611694916001600160a01b0391821691168363ffffffff6118d016565b600a546040805163b6b55f2560e01b81526004810184905290516001600160a01b039092169163b6b55f259160248082019260009290919082900301818387803b1580156116e157600080fd5b505af11580156116f5573d6000803e3d6000fd5b5050505050565b600081831061170b5781611158565b5090919050565b611724826001600160a01b0316611cf9565b611775576040805162461bcd60e51b815260206004820152601f60248201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604482015290519081900360640190fd5b60006060836001600160a01b0316836040518082805190602001908083835b602083106117b35780518252601f199092019160209182019101611794565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611815576040519150601f19603f3d011682016040523d82523d6000602084013e61181a565b606091505b509150915081611871576040805162461bcd60e51b815260206004820181905260248201527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604482015290519081900360640190fd5b8051156118ca5780806020019051602081101561188d57600080fd5b50516118ca5760405162461bcd60e51b815260040180806020018281038252602a815260200180612009602a913960400191505060405180910390fd5b50505050565b801580611956575060408051636eb1769f60e11b81523060048201526001600160a01b03848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b15801561192857600080fd5b505afa15801561193c573d6000803e3d6000fd5b505050506040513d602081101561195257600080fd5b5051155b6119915760405162461bcd60e51b81526004018080602001828103825260368152602001806120336036913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526105a6908490611712565b81811115611b385760006119fd828463ffffffff611d3516565b90506000611a28600254611a1c60015485611d7790919063ffffffff16565b9063ffffffff611dd016565b604080518681526020810186905280820183905242606082015290519192507f0b34b93979d93253da0e9e54841c680c66377f129a340ef2a37e802865e40588919081900360800190a1611a97611a7d61104e565b6003546001600160a01b031690600063ffffffff6118d016565b611abb611aa261104e565b6003546001600160a01b0316908363ffffffff6118d016565b611ac361104e565b60035460408051631ee0d7e560e31b81526001600160a01b039283166004820152602481018590529051929091169163f706bf289160448082019260009290919082900301818387803b158015611b1957600080fd5b505af1158015611b2d573d6000803e3d6000fd5b505050505050610fed565b604080518381526020810183905260008183015242606082015290517f0b34b93979d93253da0e9e54841c680c66377f129a340ef2a37e802865e405889181900360800190a15050565b60048054604080516370a0823160e01b81523093810193909352516000926001600160a01b03909216916370a08231916024808301926020929190829003018186803b158015611bd157600080fd5b505afa158015611be5573d6000803e3d6000fd5b505050506040513d6020811015611bfb57600080fd5b505190508015610dc557600854600454611c29916001600160a01b039182169116600063ffffffff6118d016565b600854600454611c4c916001600160a01b0391821691168363ffffffff6118d016565b6000611c56611f6d565b611c5f83611e12565b60085460408051630b4c7e4d60e01b81529293506001600160a01b0390911691630b4c7e4d91849186916004909101908190849080838360005b83811015611cb1578181015183820152602001611c99565b5050505090500182815260200192505050600060405180830381600087803b158015611cdc57600080fd5b505af1158015611cf0573d6000803e3d6000fd5b50505050505050565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470818114801590611d2d57508115155b949350505050565b600061115883836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611e71565b600082611d865750600061115b565b82820282848281611d9357fe5b04146111585760405162461bcd60e51b8152600401808060200182810382526021815260200180611fe86021913960400191505060405180910390fd5b600061115883836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611f08565b611e1a611f6d565b611e22611f6d565b50604080518082019091526000808252602082015260045483908290600160a01b900460ff166001811115611e5357fe5b66ffffffffffffff1660028110611e6657fe5b602002015292915050565b60008184841115611f005760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611ec5578181015183820152602001611ead565b50505050905090810190601f168015611ef25780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60008183611f575760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611ec5578181015183820152602001611ead565b506000838581611f6357fe5b0495945050505050565b6040518060400160405280600290602082028038833950919291505056fe5468652073656e6465722068617320746f2062652074686520636f6e74726f6c6c65722c20676f7665726e616e63652c206f72207661756c74746f6b656e20697320646566696e6564206173206e6f742073616c7661676561626c65536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e6365a265627a7a7231582011ae94bd1e32bc0691ff5c5393f63be81b5998ebdd6bd9c57c08144af5832a7264736f6c63430005100032";
