/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { CRVStrategyYCRVMainnet } from "../CRVStrategyYCRVMainnet";

export class CRVStrategyYCRVMainnet__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _storage: string,
    _vault: string,
    overrides?: Overrides
  ): Promise<CRVStrategyYCRVMainnet> {
    return super.deploy(
      _storage,
      _vault,
      overrides || {}
    ) as Promise<CRVStrategyYCRVMainnet>;
  }
  getDeployTransaction(
    _storage: string,
    _vault: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_storage, _vault, overrides || {});
  }
  attach(address: string): CRVStrategyYCRVMainnet {
    return super.attach(address) as CRVStrategyYCRVMainnet;
  }
  connect(signer: Signer): CRVStrategyYCRVMainnet__factory {
    return super.connect(signer) as CRVStrategyYCRVMainnet__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CRVStrategyYCRVMainnet {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CRVStrategyYCRVMainnet;
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
    name: "dai",
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
    constant: false,
    inputs: [],
    name: "investAllUnderlying",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
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
    name: "pool",
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
    name: "uniswap_CRV2DAI",
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
    name: "weth",
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
  {
    constant: true,
    inputs: [],
    name: "yDai",
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
];

const _bytecode =
  "0x6080604052600c80546001600160a01b031916737a250d5630b4cf539739df2c5dacb4c659f2488d179055600019600f553480156200003d57600080fd5b506040516200222c3803806200222c833981810160405260408110156200006357600080fd5b508051602090910151818173df5e0e81dff6faf3a7e52ba697820c5e32d806a873fa712ee4788c042e2b7bb55e6cb8ec569c4530c173d061d61a4d941c39e5453435b6345dc261c2fce073d533a949740bb3306d119cc777fa900ba034cd527345f783cce6b7ff23b2ab2d70e416cdb7d6055f5173c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2736b175474e89094c44da98b954eedeac495271d0f7316de59092dae5ccf4a1e6439d611fd0653f0bd01737a250d5630b4cf539739df2c5dacb4c659f2488d8a8381806001600160a01b0381166200018b576040805162461bcd60e51b815260206004820152601e60248201527f6e65772073746f726167652073686f756c646e277420626520656d7074790000604482015290519081900360640190fd5b600080546001600160a01b03199081166001600160a01b03938416179091556003805490911691841691909117905550601e60015560646002555050886001600160a01b03168a6001600160a01b0316636f307dc36040518163ffffffff1660e01b815260040160206040518083038186803b1580156200020b57600080fd5b505afa15801562000220573d6000803e3d6000fd5b505050506040513d60208110156200023757600080fd5b50516001600160a01b03161462000295576040805162461bcd60e51b815260206004820152601b60248201527f7661756c7420646f6573206e6f7420737570706f727420794352560000000000604482015290519081900360640190fd5b600e80546001600160a01b03199081166001600160a01b038d8116919091179092556004805482168c84161790556005805482168b84161790556006805482168a841617905560078054821689841617908190556008805483168985161790556009805483168885161790819055600a805484168886161790819055600b80548516888716179055600c805490941686861617909355604080516060810182529285168352908416602083015291909216908201526200035a906010906003620003ad565b50506004546001600160a01b039081166000908152600d60205260408082208054600160ff19918216811790925560075490941683529120805490921617905550620004419a5050505050505050505050565b82805482825590600052602060002090810192821562000405579160200282015b828111156200040557825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190620003ce565b506200041392915062000417565b5090565b6200043e91905b80821115620004135780546001600160a01b03191681556001016200041e565b90565b611ddb80620004516000396000f3fe608060405234801561001057600080fd5b50600436106101635760003560e01c80639137c1a7116100ce578063ce8c42e811610087578063ce8c42e8146102a6578063d1e61dcb146102c3578063edc9af95146102cb578063f1af3af4146102d3578063f4b9fa75146102f0578063f77c4791146102f8578063fbfa77cf1461030057610163565b80639137c1a714610258578063975057e71461027e578063aef52e3f14610286578063b60f151a1461028e578063bfd131f114610296578063c2a2a07b1461029e57610163565b80634fa5d854116101205780634fa5d854146101f657806350185946146101fe5780635aa6e675146102385780636a4874a1146102405780636f307dc3146102485780637165485d1461025057610163565b8063026a0dd0146101685780631113ef521461018257806316f0115b146101ba5780633fc8cef3146101de57806345d01e4a146101e65780634a8cfa69146101ee575b600080fd5b610170610308565b60408051918252519081900360200190f35b6101b86004803603606081101561019857600080fd5b506001600160a01b0381358116916020810135909116906040013561030e565b005b6101c261043e565b604080516001600160a01b039092168252519081900360200190f35b6101c261044d565b61017061045c565b6101b8610562565b6101b8610724565b6102246004803603602081101561021457600080fd5b50356001600160a01b03166107c5565b604080519115158252519081900360200190f35b6101c26107da565b6101c261085a565b6101c2610869565b6101c2610878565b6101b86004803603602081101561026e57600080fd5b50356001600160a01b0316610887565b6101c26109bd565b6101c26109cc565b6101706109db565b6101b86109e1565b610224610b24565b6101b8600480360360208110156102bc57600080fd5b5035610b29565b6101c2610cf7565b6101c2610d06565b6101c2600480360360208110156102e957600080fd5b5035610d15565b6101c2610d3c565b6101c2610d4b565b6101c2610d9a565b60025481565b600054604080516337b87c3960e21b815233600482015290516001600160a01b039092169163dee1f0e491602480820192602092909190829003018186803b15801561035957600080fd5b505afa15801561036d573d6000803e3d6000fd5b505050506040513d602081101561038357600080fd5b50516103c7576040805162461bcd60e51b815260206004820152600e60248201526d4e6f7420676f7665726e616e636560901b604482015290519081900360640190fd5b6001600160a01b0382166000908152600d602052604090205460ff161561041f5760405162461bcd60e51b8152600401808060200182810382526023815260200180611d036023913960400191505060405180910390fd5b6104396001600160a01b038316848363ffffffff610da916565b505050565b6005546001600160a01b031681565b6009546001600160a01b031681565b60048054604080516370a0823160e01b815230938101939093525160009261055d926001600160a01b0316916370a0823191602480820192602092909190829003018186803b1580156104ae57600080fd5b505afa1580156104c2573d6000803e3d6000fd5b505050506040513d60208110156104d857600080fd5b5051600554604080516370a0823160e01b815230600482015290516001600160a01b03909216916370a0823191602480820192602092909190829003018186803b15801561052557600080fd5b505afa158015610539573d6000803e3d6000fd5b505050506040513d602081101561054f57600080fd5b50519063ffffffff610dfb16565b905090565b600e546001600160a01b0316331480610593575061057e610d4b565b6001600160a01b0316336001600160a01b0316145b806105b657506105a16107da565b6001600160a01b0316336001600160a01b0316145b6105f15760405162461bcd60e51b8152600401808060200182810382526039815260200180611cca6039913960400191505060405180910390fd5b60048054604080516370a0823160e01b81523093810193909352516000926001600160a01b03909216916370a08231916024808301926020929190829003018186803b15801561064057600080fd5b505afa158015610654573d6000803e3d6000fd5b505050506040513d602081101561066a57600080fd5b50519050801561072157600554600454610698916001600160a01b039182169116600063ffffffff610e5e16565b6005546004546106bb916001600160a01b0391821691168363ffffffff610e5e16565b6005546040805163b6b55f2560e01b81526004810184905290516001600160a01b039092169163b6b55f259160248082019260009290919082900301818387803b15801561070857600080fd5b505af115801561071c573d6000803e3d6000fd5b505050505b50565b600e546001600160a01b03163314806107555750610740610d4b565b6001600160a01b0316336001600160a01b0316145b8061077857506107636107da565b6001600160a01b0316336001600160a01b0316145b6107b35760405162461bcd60e51b8152600401808060200182810382526039815260200180611cca6039913960400191505060405180910390fd5b6107bb610f71565b6107c3610562565b565b600d6020526000908152604090205460ff1681565b60008060009054906101000a90046001600160a01b03166001600160a01b0316635aa6e6756040518163ffffffff1660e01b815260040160206040518083038186803b15801561082957600080fd5b505afa15801561083d573d6000803e3d6000fd5b505050506040513d602081101561085357600080fd5b5051905090565b6007546001600160a01b031681565b6004546001600160a01b031681565b6008546001600160a01b031681565b600054604080516337b87c3960e21b815233600482015290516001600160a01b039092169163dee1f0e491602480820192602092909190829003018186803b1580156108d257600080fd5b505afa1580156108e6573d6000803e3d6000fd5b505050506040513d60208110156108fc57600080fd5b5051610940576040805162461bcd60e51b815260206004820152600e60248201526d4e6f7420676f7665726e616e636560901b604482015290519081900360640190fd5b6001600160a01b03811661099b576040805162461bcd60e51b815260206004820152601e60248201527f6e65772073746f726167652073686f756c646e277420626520656d7074790000604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031681565b600b546001600160a01b031681565b60015481565b600e546001600160a01b0316331480610a1257506109fd610d4b565b6001600160a01b0316336001600160a01b0316145b80610a355750610a206107da565b6001600160a01b0316336001600160a01b0316145b610a705760405162461bcd60e51b8152600401808060200182810382526039815260200180611cca6039913960400191505060405180910390fd5b610a78610f71565b610a83600f546113dd565b60048054604080516370a0823160e01b81523093810193909352516000926001600160a01b03909216916370a08231916024808301926020929190829003018186803b158015610ad257600080fd5b505afa158015610ae6573d6000803e3d6000fd5b505050506040513d6020811015610afc57600080fd5b5051600e54600454919250610721916001600160a01b0390811691168363ffffffff610da916565b600190565b600e546001600160a01b0316331480610b5a5750610b45610d4b565b6001600160a01b0316336001600160a01b0316145b80610b7d5750610b686107da565b6001600160a01b0316336001600160a01b0316145b610bb85760405162461bcd60e51b8152600401808060200182810382526039815260200180611cca6039913960400191505060405180910390fd5b610bc1816113dd565b60048054604080516370a0823160e01b815230938101939093525183926001600160a01b03909216916370a08231916024808301926020929190829003018186803b158015610c0f57600080fd5b505afa158015610c23573d6000803e3d6000fd5b505050506040513d6020811015610c3957600080fd5b50511015610c4957610c49610f71565b60048054604080516370a0823160e01b8152309381019390935251600092610ccd926001600160a01b0316916370a0823191602480820192602092909190829003018186803b158015610c9b57600080fd5b505afa158015610caf573d6000803e3d6000fd5b505050506040513d6020811015610cc557600080fd5b50518361149b565b600e54600454919250610cf3916001600160a01b0390811691168363ffffffff610da916565b5050565b6006546001600160a01b031681565b600c546001600160a01b031681565b60108181548110610d2257fe5b6000918252602090912001546001600160a01b0316905081565b600a546001600160a01b031681565b60008060009054906101000a90046001600160a01b03166001600160a01b031663f77c47916040518163ffffffff1660e01b815260040160206040518083038186803b15801561082957600080fd5b600e546001600160a01b031681565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526104399084906114b1565b600082820183811015610e55576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b90505b92915050565b801580610ee4575060408051636eb1769f60e11b81523060048201526001600160a01b03848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b158015610eb657600080fd5b505afa158015610eca573d6000803e3d6000fd5b505050506040513d6020811015610ee057600080fd5b5051155b610f1f5760405162461bcd60e51b8152600401808060200182810382526036815260200180611d716036913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526104399084906114b1565b600654600554604080516335313c2160e11b81526001600160a01b03928316600482015290519190921691636a62784291602480830192600092919082900301818387803b158015610fc257600080fd5b505af1158015610fd6573d6000803e3d6000fd5b5050600754604080516370a0823160e01b81523060048201529051600094506001600160a01b0390921692506370a08231916024808301926020929190829003018186803b15801561102757600080fd5b505afa15801561103b573d6000803e3d6000fd5b505050506040513d602081101561105157600080fd5b50516040805182815290519192507f875c79c14f0ec82c9ae01b82cfab0d1c5c4079f1500682832fb877a7dec614fb919081900360200190a1801561072157600a54604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b1580156110db57600080fd5b505afa1580156110ef573d6000803e3d6000fd5b505050506040513d602081101561110557600080fd5b5051600c5460075491925061112e916001600160a01b039081169116600063ffffffff610e5e16565b600c54600754611151916001600160a01b0391821691168463ffffffff610e5e16565b600c546040516338ed173960e01b8152600481018481526001602483018190523060648401819052426084850181905260a0604486019081526010805460a488018190526001600160a01b03909816976338ed1739978b97929594939160c490910190869080156111eb57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116111cd575b50509650505050505050600060405180830381600087803b15801561120f57600080fd5b505af1158015611223573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561124c57600080fd5b810190808051604051939291908464010000000082111561126c57600080fd5b90830190602082018581111561128157600080fd5b825186602082028301116401000000008211171561129e57600080fd5b82525081516020918201928201910280838360005b838110156112cb5781810151838201526020016112b3565b50505050919091016040818152600a546370a0823160e01b8352306004840152905161135897508896506001600160a01b0390911694506370a08231935060248083019350602092829003018186803b15801561132757600080fd5b505afa15801561133b573d6000803e3d6000fd5b505050506040513d602081101561135157600080fd5b505161166f565b600a54604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b1580156113a357600080fd5b505afa1580156113b7573d6000803e3d6000fd5b505050506040513d60208110156113cd57600080fd5b50511115610cf357610cf361180e565b600554604080516370a0823160e01b815230600482015290516001600160a01b0390921691632e1a7d4d916114659184916370a08231916024808301926020929190829003018186803b15801561143357600080fd5b505afa158015611447573d6000803e3d6000fd5b505050506040513d602081101561145d57600080fd5b50518461149b565b6040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561070857600080fd5b60008183106114aa5781610e55565b5090919050565b6114c3826001600160a01b0316611ab4565b611514576040805162461bcd60e51b815260206004820152601f60248201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604482015290519081900360640190fd5b60006060836001600160a01b0316836040518082805190602001908083835b602083106115525780518252601f199092019160209182019101611533565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146115b4576040519150601f19603f3d011682016040523d82523d6000602084013e6115b9565b606091505b509150915081611610576040805162461bcd60e51b815260206004820181905260248201527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604482015290519081900360640190fd5b8051156116695780806020019051602081101561162c57600080fd5b50516116695760405162461bcd60e51b815260040180806020018281038252602a815260200180611d47602a913960400191505060405180910390fd5b50505050565b818111156117c4576000611689828463ffffffff611af016565b905060006116b46002546116a860015485611b3290919063ffffffff16565b9063ffffffff611b8b16565b604080518681526020810186905280820183905242606082015290519192507f0b34b93979d93253da0e9e54841c680c66377f129a340ef2a37e802865e40588919081900360800190a1611723611709610d4b565b6003546001600160a01b031690600063ffffffff610e5e16565b61174761172e610d4b565b6003546001600160a01b0316908363ffffffff610e5e16565b61174f610d4b565b60035460408051631ee0d7e560e31b81526001600160a01b039283166004820152602481018590529051929091169163f706bf289160448082019260009290919082900301818387803b1580156117a557600080fd5b505af11580156117b9573d6000803e3d6000fd5b505050505050610cf3565b604080518381526020810183905260008183015242606082015290517f0b34b93979d93253da0e9e54841c680c66377f129a340ef2a37e802865e405889181900360800190a15050565b600a54604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561185957600080fd5b505afa15801561186d573d6000803e3d6000fd5b505050506040513d602081101561188357600080fd5b50519050801561193a57600b54600a546118b1916001600160a01b039182169116600063ffffffff610e5e16565b600b54600a546118d4916001600160a01b0391821691168363ffffffff610e5e16565b600b546040805163b6b55f2560e01b81526004810184905290516001600160a01b039092169163b6b55f259160248082019260009290919082900301818387803b15801561192157600080fd5b505af1158015611935573d6000803e3d6000fd5b505050505b600b54604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561198557600080fd5b505afa158015611999573d6000803e3d6000fd5b505050506040513d60208110156119af57600080fd5b505190508015610cf357600854600b546119dd916001600160a01b039182169116600063ffffffff610e5e16565b600854600b54611a00916001600160a01b0391821691168363ffffffff610e5e16565b600854604080516080808201835284825260006020830181905282840181905260608301819052925162a6cbcd60e21b815292936001600160a01b03169263029b2f34929185916004019081908490808383875b83811015611a6c578181015183820152602001611a54565b5050505090500182815260200192505050600060405180830381600087803b158015611a9757600080fd5b505af1158015611aab573d6000803e3d6000fd5b50505050505050565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470818114801590611ae857508115155b949350505050565b6000610e5583836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611bcd565b600082611b4157506000610e58565b82820282848281611b4e57fe5b0414610e555760405162461bcd60e51b8152600401808060200182810382526021815260200180611d266021913960400191505060405180910390fd5b6000610e5583836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611c64565b60008184841115611c5c5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611c21578181015183820152602001611c09565b50505050905090810190601f168015611c4e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60008183611cb35760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611c21578181015183820152602001611c09565b506000838581611cbf57fe5b049594505050505056fe5468652073656e6465722068617320746f2062652074686520636f6e74726f6c6c65722c20676f7665726e616e63652c206f72207661756c74746f6b656e20697320646566696e6564206173206e6f742073616c7661676561626c65536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e6365a265627a7a72315820274942cb5d94d4b8feaaa68dfdb10d897f6bd01b604332b8c45eedbd36f37c0764736f6c63430005100032";