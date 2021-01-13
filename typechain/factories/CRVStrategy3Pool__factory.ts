/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { CRVStrategy3Pool } from "../CRVStrategy3Pool";

export class CRVStrategy3Pool__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _storage: string,
    _vault: string,
    _underlying: string,
    _gauge: string,
    _mintr: string,
    _crv: string,
    _curve: string,
    _weth: string,
    _dai: string,
    _uniswap: string,
    overrides?: Overrides
  ): Promise<CRVStrategy3Pool> {
    return super.deploy(
      _storage,
      _vault,
      _underlying,
      _gauge,
      _mintr,
      _crv,
      _curve,
      _weth,
      _dai,
      _uniswap,
      overrides || {}
    ) as Promise<CRVStrategy3Pool>;
  }
  getDeployTransaction(
    _storage: string,
    _vault: string,
    _underlying: string,
    _gauge: string,
    _mintr: string,
    _crv: string,
    _curve: string,
    _weth: string,
    _dai: string,
    _uniswap: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _storage,
      _vault,
      _underlying,
      _gauge,
      _mintr,
      _crv,
      _curve,
      _weth,
      _dai,
      _uniswap,
      overrides || {}
    );
  }
  attach(address: string): CRVStrategy3Pool {
    return super.attach(address) as CRVStrategy3Pool;
  }
  connect(signer: Signer): CRVStrategy3Pool__factory {
    return super.connect(signer) as CRVStrategy3Pool__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CRVStrategy3Pool {
    return new Contract(address, _abi, signerOrProvider) as CRVStrategy3Pool;
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
      {
        internalType: "address",
        name: "_underlying",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gauge",
        type: "address",
      },
      {
        internalType: "address",
        name: "_mintr",
        type: "address",
      },
      {
        internalType: "address",
        name: "_crv",
        type: "address",
      },
      {
        internalType: "address",
        name: "_curve",
        type: "address",
      },
      {
        internalType: "address",
        name: "_weth",
        type: "address",
      },
      {
        internalType: "address",
        name: "_dai",
        type: "address",
      },
      {
        internalType: "address",
        name: "_uniswap",
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
        name: "profitAmount",
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
    name: "ProfitLogInReward",
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
    constant: false,
    inputs: [],
    name: "curve3PoolFromDai",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
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
    constant: true,
    inputs: [],
    name: "rewardToken",
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
];

const _bytecode =
  "0x6080604052600019600e556010805460ff19166001179055670de0b6b3a76400006011553480156200003057600080fd5b50604051620021d1380380620021d183398181016040526101408110156200005757600080fd5b508051602082015160408301516060840151608085015160a086015160c087015160e08801516101008901516101209099015197989697959694959394929391929091898581806001600160a01b038116620000fa576040805162461bcd60e51b815260206004820152601e60248201527f6e65772073746f726167652073686f756c646e277420626520656d7074790000604482015290519081900360640190fd5b600080546001600160a01b03199081166001600160a01b03938416179091556003805490911691841691909117905550601e60015560646002555050876001600160a01b0316896001600160a01b0316636f307dc36040518163ffffffff1660e01b815260040160206040518083038186803b1580156200017a57600080fd5b505afa1580156200018f573d6000803e3d6000fd5b505050506040513d6020811015620001a657600080fd5b50516001600160a01b03161462000204576040805162461bcd60e51b815260206004820152601b60248201527f7661756c7420646f6573206e6f7420737570706f727420336372760000000000604482015290519081900360640190fd5b600d80546001600160a01b03199081166001600160a01b038c8116919091179092556004805482168b84161790556005805482168a841617905560068054821689841617905560078054821688841617908190556008805483168885161790556009805483168785161790819055600a805484168786161790819055600b80549094168686161790935560408051606081018252928516835290841660208301529190921690820152620002bd90600f9060036200030d565b50506004546001600160a01b039081166000908152600c60205260408082208054600160ff19918216811790925560075490941683529120805490921617905550620003a1975050505050505050565b82805482825590600052602060002090810192821562000365579160200282015b828111156200036557825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906200032e565b506200037392915062000377565b5090565b6200039e91905b80821115620003735780546001600160a01b03191681556001016200037e565b90565b611e2080620003b16000396000f3fe608060405234801561001057600080fd5b50600436106101ba5760003560e01c8063975057e7116100f4578063ce8c42e8116100a2578063f4b9fa7511610071578063f4b9fa7514610393578063f77c47911461039b578063f7c618c1146103a3578063fbfa77cf146103ab576101ba565b8063ce8c42e814610349578063d1e61dcb14610366578063edc9af951461036e578063f1af3af414610376576101ba565b8063975057e7146102e5578063a1dab23e146102ed578063b076a53a146102f5578063b60f151a14610314578063ba09591e1461031c578063bfd131f114610339578063c2a2a07b14610341576101ba565b80634a8cfa691161016c5780636a4874a11161013b5780636a4874a1146102a75780636f307dc3146102af5780637165485d146102b75780639137c1a7146102bf576101ba565b80634a8cfa69146102695780634fa5d8541461027157806350185946146102795780635aa6e6751461029f576101ba565b8063026a0dd0146101bf5780631113ef52146101d957806316f0115b146102115780633d58ced3146102355780633fc8cef31461023d578063457100741461024557806345d01e4a14610261575b600080fd5b6101c76103b3565b60408051918252519081900360200190f35b61020f600480360360608110156101ef57600080fd5b506001600160a01b038135811691602081013590911690604001356103b9565b005b6102196104e9565b604080516001600160a01b039092168252519081900360200190f35b61020f6104f8565b61021961066c565b61024d61067b565b604080519115158252519081900360200190f35b6101c7610684565b61020f61078a565b61020f61094b565b61024d6004803603602081101561028f57600080fd5b50356001600160a01b03166109ec565b610219610a01565b610219610a81565b610219610a90565b610219610a9f565b61020f600480360360208110156102d557600080fd5b50356001600160a01b0316610aae565b610219610be4565b6101c7610bf3565b61020f6004803603602081101561030b57600080fd5b50351515610bf9565b6101c7610cc5565b61020f6004803603602081101561033257600080fd5b5035610ccb565b61020f610d89565b61024d610ecc565b61020f6004803603602081101561035f57600080fd5b5035610ed1565b61021961109f565b6102196110ae565b6102196004803603602081101561038c57600080fd5b50356110bd565b6102196110e4565b6102196110f3565b610219611142565b610219611151565b60025481565b600054604080516337b87c3960e21b815233600482015290516001600160a01b039092169163dee1f0e491602480820192602092909190829003018186803b15801561040457600080fd5b505afa158015610418573d6000803e3d6000fd5b505050506040513d602081101561042e57600080fd5b5051610472576040805162461bcd60e51b815260206004820152600e60248201526d4e6f7420676f7665726e616e636560901b604482015290519081900360640190fd5b6001600160a01b0382166000908152600c602052604090205460ff16156104ca5760405162461bcd60e51b8152600401808060200182810382526023815260200180611d486023913960400191505060405180910390fd5b6104e46001600160a01b038316848363ffffffff61116016565b505050565b6005546001600160a01b031681565b600a54604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561054357600080fd5b505afa158015610557573d6000803e3d6000fd5b505050506040513d602081101561056d57600080fd5b50519050801561066957600854600a5461059b916001600160a01b039182169116600063ffffffff6111b216565b600854600a546105be916001600160a01b0391821691168363ffffffff6111b216565b60085460408051606080820183528482526000602083018190528284018190529251634515cef360e01b815292936001600160a01b031692634515cef3929185916004019081908490808383875b8381101561062457818101518382015260200161060c565b5050505090500182815260200192505050600060405180830381600087803b15801561064f57600080fd5b505af1158015610663573d6000803e3d6000fd5b50505050505b50565b6009546001600160a01b031681565b60105460ff1681565b60048054604080516370a0823160e01b8152309381019390935251600092610785926001600160a01b0316916370a0823191602480820192602092909190829003018186803b1580156106d657600080fd5b505afa1580156106ea573d6000803e3d6000fd5b505050506040513d602081101561070057600080fd5b5051600554604080516370a0823160e01b815230600482015290516001600160a01b03909216916370a0823191602480820192602092909190829003018186803b15801561074d57600080fd5b505afa158015610761573d6000803e3d6000fd5b505050506040513d602081101561077757600080fd5b50519063ffffffff6112c516565b905090565b600d546001600160a01b03163314806107bb57506107a66110f3565b6001600160a01b0316336001600160a01b0316145b806107de57506107c9610a01565b6001600160a01b0316336001600160a01b0316145b6108195760405162461bcd60e51b8152600401808060200182810382526039815260200180611d0f6039913960400191505060405180910390fd5b60048054604080516370a0823160e01b81523093810193909352516000926001600160a01b03909216916370a08231916024808301926020929190829003018186803b15801561086857600080fd5b505afa15801561087c573d6000803e3d6000fd5b505050506040513d602081101561089257600080fd5b505190508015610669576005546004546108c0916001600160a01b039182169116600063ffffffff6111b216565b6005546004546108e3916001600160a01b0391821691168363ffffffff6111b216565b6005546040805163b6b55f2560e01b81526004810184905290516001600160a01b039092169163b6b55f259160248082019260009290919082900301818387803b15801561093057600080fd5b505af1158015610944573d6000803e3d6000fd5b5050505050565b600d546001600160a01b031633148061097c57506109676110f3565b6001600160a01b0316336001600160a01b0316145b8061099f575061098a610a01565b6001600160a01b0316336001600160a01b0316145b6109da5760405162461bcd60e51b8152600401808060200182810382526039815260200180611d0f6039913960400191505060405180910390fd5b6109e2611328565b6109ea61078a565b565b600c6020526000908152604090205460ff1681565b60008060009054906101000a90046001600160a01b03166001600160a01b0316635aa6e6756040518163ffffffff1660e01b815260040160206040518083038186803b158015610a5057600080fd5b505afa158015610a64573d6000803e3d6000fd5b505050506040513d6020811015610a7a57600080fd5b5051905090565b6007546001600160a01b031681565b6004546001600160a01b031681565b6008546001600160a01b031681565b600054604080516337b87c3960e21b815233600482015290516001600160a01b039092169163dee1f0e491602480820192602092909190829003018186803b158015610af957600080fd5b505afa158015610b0d573d6000803e3d6000fd5b505050506040513d6020811015610b2357600080fd5b5051610b67576040805162461bcd60e51b815260206004820152600e60248201526d4e6f7420676f7665726e616e636560901b604482015290519081900360640190fd5b6001600160a01b038116610bc2576040805162461bcd60e51b815260206004820152601e60248201527f6e65772073746f726167652073686f756c646e277420626520656d7074790000604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031681565b60115481565b600054604080516337b87c3960e21b815233600482015290516001600160a01b039092169163dee1f0e491602480820192602092909190829003018186803b158015610c4457600080fd5b505afa158015610c58573d6000803e3d6000fd5b505050506040513d6020811015610c6e57600080fd5b5051610cb2576040805162461bcd60e51b815260206004820152600e60248201526d4e6f7420676f7665726e616e636560901b604482015290519081900360640190fd5b6010805460ff1916911515919091179055565b60015481565b600054604080516337b87c3960e21b815233600482015290516001600160a01b039092169163dee1f0e491602480820192602092909190829003018186803b158015610d1657600080fd5b505afa158015610d2a573d6000803e3d6000fd5b505050506040513d6020811015610d4057600080fd5b5051610d84576040805162461bcd60e51b815260206004820152600e60248201526d4e6f7420676f7665726e616e636560901b604482015290519081900360640190fd5b601155565b600d546001600160a01b0316331480610dba5750610da56110f3565b6001600160a01b0316336001600160a01b0316145b80610ddd5750610dc8610a01565b6001600160a01b0316336001600160a01b0316145b610e185760405162461bcd60e51b8152600401808060200182810382526039815260200180611d0f6039913960400191505060405180910390fd5b610e20611328565b610e2b600e5461178f565b60048054604080516370a0823160e01b81523093810193909352516000926001600160a01b03909216916370a08231916024808301926020929190829003018186803b158015610e7a57600080fd5b505afa158015610e8e573d6000803e3d6000fd5b505050506040513d6020811015610ea457600080fd5b5051600d54600454919250610669916001600160a01b0390811691168363ffffffff61116016565b600190565b600d546001600160a01b0316331480610f025750610eed6110f3565b6001600160a01b0316336001600160a01b0316145b80610f255750610f10610a01565b6001600160a01b0316336001600160a01b0316145b610f605760405162461bcd60e51b8152600401808060200182810382526039815260200180611d0f6039913960400191505060405180910390fd5b610f698161178f565b60048054604080516370a0823160e01b815230938101939093525183926001600160a01b03909216916370a08231916024808301926020929190829003018186803b158015610fb757600080fd5b505afa158015610fcb573d6000803e3d6000fd5b505050506040513d6020811015610fe157600080fd5b50511015610ff157610ff1611328565b60048054604080516370a0823160e01b8152309381019390935251600092611075926001600160a01b0316916370a0823191602480820192602092909190829003018186803b15801561104357600080fd5b505afa158015611057573d6000803e3d6000fd5b505050506040513d602081101561106d57600080fd5b50518361184d565b600d5460045491925061109b916001600160a01b0390811691168363ffffffff61116016565b5050565b6006546001600160a01b031681565b600b546001600160a01b031681565b600f81815481106110ca57fe5b6000918252602090912001546001600160a01b0316905081565b600a546001600160a01b031681565b60008060009054906101000a90046001600160a01b03166001600160a01b031663f77c47916040518163ffffffff1660e01b815260040160206040518083038186803b158015610a5057600080fd5b6003546001600160a01b031681565b600d546001600160a01b031681565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526104e4908490611863565b801580611238575060408051636eb1769f60e11b81523060048201526001600160a01b03848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b15801561120a57600080fd5b505afa15801561121e573d6000803e3d6000fd5b505050506040513d602081101561123457600080fd5b5051155b6112735760405162461bcd60e51b8152600401808060200182810382526036815260200180611db66036913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526104e4908490611863565b60008282018381101561131f576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b90505b92915050565b60105460ff16611360576040517f444bcec8acce9dc46755761662d6262a490b9f61cca73243c5131d98df078ce390600090a16109ea565b600654600554604080516335313c2160e11b81526001600160a01b03928316600482015290519190921691636a62784291602480830192600092919082900301818387803b1580156113b157600080fd5b505af11580156113c5573d6000803e3d6000fd5b5050600754604080516370a0823160e01b81523060048201529051600094506001600160a01b0390921692506370a08231916024808301926020929190829003018186803b15801561141657600080fd5b505afa15801561142a573d6000803e3d6000fd5b505050506040513d602081101561144057600080fd5b505160115490915081101561147e576040517f444bcec8acce9dc46755761662d6262a490b9f61cca73243c5131d98df078ce390600090a1506109ea565b61148781611a21565b600754604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b1580156114d257600080fd5b505afa1580156114e6573d6000803e3d6000fd5b505050506040513d60208110156114fc57600080fd5b50519050801561109b576040805182815290517f875c79c14f0ec82c9ae01b82cfab0d1c5c4079f1500682832fb877a7dec614fb9181900360200190a1600b5460075461155d916001600160a01b039182169116600063ffffffff6111b216565b600b54600754611580916001600160a01b0391821691168363ffffffff6111b216565b600b546040516338ed173960e01b8152600481018381526001602483018190523060648401819052426084850181905260a060448601908152600f805460a488018190526001600160a01b03909816976338ed1739978a97929594939160c4909101908690801561161a57602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116115fc575b50509650505050505050600060405180830381600087803b15801561163e57600080fd5b505af1158015611652573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561167b57600080fd5b810190808051604051939291908464010000000082111561169b57600080fd5b9083019060208201858111156116b057600080fd5b82518660208202830111640100000000821117156116cd57600080fd5b82525081516020918201928201910280838360005b838110156116fa5781810151838201526020016116e2565b50505050919091016040818152600a546370a0823160e01b83523060048401529051600097506001600160a01b0390911695506370a08231945060248083019450602093509091829003018186803b15801561175557600080fd5b505afa158015611769573d6000803e3d6000fd5b505050506040513d602081101561177f57600080fd5b5051111561109b5761109b6104f8565b600554604080516370a0823160e01b815230600482015290516001600160a01b0390921691632e1a7d4d916118179184916370a08231916024808301926020929190829003018186803b1580156117e557600080fd5b505afa1580156117f9573d6000803e3d6000fd5b505050506040513d602081101561180f57600080fd5b50518461184d565b6040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561093057600080fd5b600081831061185c578161131f565b5090919050565b611875826001600160a01b0316611b9a565b6118c6576040805162461bcd60e51b815260206004820152601f60248201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604482015290519081900360640190fd5b60006060836001600160a01b0316836040518082805190602001908083835b602083106119045780518252601f1990920191602091820191016118e5565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611966576040519150601f19603f3d011682016040523d82523d6000602084013e61196b565b606091505b5091509150816119c2576040805162461bcd60e51b815260206004820181905260248201527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604482015290519081900360640190fd5b805115611a1b578080602001905160208110156119de57600080fd5b5051611a1b5760405162461bcd60e51b815260040180806020018281038252602a815260200180611d8c602a913960400191505060405180910390fd5b50505050565b8015611b58576000611a50600254611a4460015485611bd690919063ffffffff16565b9063ffffffff611c2f16565b6040805184815260208101839052428183015290519192507f33fd2845a0f10293482de360244dd4ad31ddbb4b8c4a1ded3875cf8ebfba184b919081900360600190a1611ab8611a9e6110f3565b6003546001600160a01b031690600063ffffffff6111b216565b611adc611ac36110f3565b6003546001600160a01b0316908363ffffffff6111b216565b611ae46110f3565b60035460408051631ee0d7e560e31b81526001600160a01b039283166004820152602481018590529051929091169163f706bf289160448082019260009290919082900301818387803b158015611b3a57600080fd5b505af1158015611b4e573d6000803e3d6000fd5b5050505050610669565b6040805160008082526020820152428183015290517f33fd2845a0f10293482de360244dd4ad31ddbb4b8c4a1ded3875cf8ebfba184b9181900360600190a150565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470818114801590611bce57508115155b949350505050565b600082611be557506000611322565b82820282848281611bf257fe5b041461131f5760405162461bcd60e51b8152600401808060200182810382526021815260200180611d6b6021913960400191505060405180910390fd5b600061131f83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525060008183611cf85760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611cbd578181015183820152602001611ca5565b50505050905090810190601f168015611cea5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581611d0457fe5b049594505050505056fe5468652073656e6465722068617320746f2062652074686520636f6e74726f6c6c65722c20676f7665726e616e63652c206f72207661756c74746f6b656e20697320646566696e6564206173206e6f742073616c7661676561626c65536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e6365a265627a7a7231582074ec55fd756c37befcb643d903818965a00afdf4fc36e6feeea0813225e1caf264736f6c63430005100032";
