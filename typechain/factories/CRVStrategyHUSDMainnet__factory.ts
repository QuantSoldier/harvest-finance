/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { CRVStrategyHUSDMainnet } from "../CRVStrategyHUSDMainnet";

export class CRVStrategyHUSDMainnet__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _storage: string,
    _vault: string,
    overrides?: Overrides
  ): Promise<CRVStrategyHUSDMainnet> {
    return super.deploy(
      _storage,
      _vault,
      overrides || {}
    ) as Promise<CRVStrategyHUSDMainnet>;
  }
  getDeployTransaction(
    _storage: string,
    _vault: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_storage, _vault, overrides || {});
  }
  attach(address: string): CRVStrategyHUSDMainnet {
    return super.attach(address) as CRVStrategyHUSDMainnet;
  }
  connect(signer: Signer): CRVStrategyHUSDMainnet__factory {
    return super.connect(signer) as CRVStrategyHUSDMainnet__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CRVStrategyHUSDMainnet {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CRVStrategyHUSDMainnet;
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
    name: "curveDepositHUSD",
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
  "0x6080604052600b80546001600160a01b031916737a250d5630b4cf539739df2c5dacb4c659f2488d179055600019600e556010805460ff19166001179055670de0b6b3a76400006011553480156200005657600080fd5b506040516200225938038062002259833981810160405260408110156200007c57600080fd5b5080516020909101518181735b5cfe992adac0c9d48e05854b2d91c73a003858732db0e83599a91b508ac268a6197b8b14f5e7284073d061d61a4d941c39e5453435b6345dc261c2fce073d533a949740bb3306d119cc777fa900ba034cd5273c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2736b175474e89094c44da98b954eedeac495271d0f7309672362833d8f703d5395ef3252d4bfa51c15ca737a250d5630b4cf539739df2c5dacb4c659f2488d898581806001600160a01b0381166200018f576040805162461bcd60e51b815260206004820152601e60248201527f6e65772073746f726167652073686f756c646e277420626520656d7074790000604482015290519081900360640190fd5b600080546001600160a01b03199081166001600160a01b03938416179091556003805490911691841691909117905550601e60015560646002555050876001600160a01b0316896001600160a01b0316636f307dc36040518163ffffffff1660e01b815260040160206040518083038186803b1580156200020f57600080fd5b505afa15801562000224573d6000803e3d6000fd5b505050506040513d60208110156200023b57600080fd5b50516001600160a01b03161462000299576040805162461bcd60e51b815260206004820152601e60248201527f7661756c7420646f6573206e6f7420737570706f727420687573644352560000604482015290519081900360640190fd5b600d80546001600160a01b03199081166001600160a01b038c8116919091179092556004805482168b84161790556005805482168a8416179055600680548216898416179055600780548216888416179081905560088054831688851617908190556009805484168886161790819055600a80548516888716179055600b805490941686861617909355604080516060810182529285168352908416602083015291909216908201526200035290600f906003620003a4565b50506004546001600160a01b039081166000908152600c60205260408082208054600160ff19918216811790925560075490941683529120805490921617905550620004389950505050505050505050565b828054828255906000526020600020908101928215620003fc579160200282015b82811115620003fc57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190620003c5565b506200040a9291506200040e565b5090565b6200043591905b808211156200040a5780546001600160a01b031916815560010162000415565b90565b611e1180620004486000396000f3fe608060405234801561001057600080fd5b506004361061019f5760003560e01c8063975057e7116100f4578063ce8c42e8116100a2578063f4b9fa7511610071578063f4b9fa7514610370578063f77c479114610378578063f7c618c114610380578063fbfa77cf146103885761019f565b8063ce8c42e814610326578063d1e61dcb14610343578063edc9af951461034b578063f1af3af4146103535761019f565b8063975057e7146102c2578063a1dab23e146102ca578063b076a53a146102d2578063b60f151a146102f1578063ba09591e146102f9578063bfd131f114610316578063c2a2a07b1461031e5761019f565b80634fa5d854116101515780634fa5d8541461024e57806350185946146102565780635aa6e6751461027c5780636a4874a1146102845780636f307dc31461028c5780638a68cfee146102945780639137c1a71461029c5761019f565b8063026a0dd0146101a45780631113ef52146101be57806316f0115b146101f65780633fc8cef31461021a578063457100741461022257806345d01e4a1461023e5780634a8cfa6914610246575b600080fd5b6101ac610390565b60408051918252519081900360200190f35b6101f4600480360360608110156101d457600080fd5b506001600160a01b03813581169160208101359091169060400135610396565b005b6101fe6104c6565b604080516001600160a01b039092168252519081900360200190f35b6101fe6104d5565b61022a6104e4565b604080519115158252519081900360200190f35b6101ac6104ed565b6101f46105f3565b6101f46107b5565b61022a6004803603602081101561026c57600080fd5b50356001600160a01b0316610856565b6101fe61086b565b6101fe6108eb565b6101fe6108fa565b6101fe610909565b6101f4600480360360208110156102b257600080fd5b50356001600160a01b0316610918565b6101fe610a4e565b6101ac610a5d565b6101f4600480360360208110156102e857600080fd5b50351515610a63565b6101ac610b2f565b6101f46004803603602081101561030f57600080fd5b5035610b35565b6101f4610bf3565b61022a610d36565b6101f46004803603602081101561033c57600080fd5b5035610d3b565b6101fe610f09565b6101fe610f18565b6101fe6004803603602081101561036957600080fd5b5035610f27565b6101fe610f4e565b6101fe610f5d565b6101fe610fac565b6101fe610fbb565b60025481565b600054604080516337b87c3960e21b815233600482015290516001600160a01b039092169163dee1f0e491602480820192602092909190829003018186803b1580156103e157600080fd5b505afa1580156103f5573d6000803e3d6000fd5b505050506040513d602081101561040b57600080fd5b505161044f576040805162461bcd60e51b815260206004820152600e60248201526d4e6f7420676f7665726e616e636560901b604482015290519081900360640190fd5b6001600160a01b0382166000908152600c602052604090205460ff16156104a75760405162461bcd60e51b8152600401808060200182810382526023815260200180611d396023913960400191505060405180910390fd5b6104c16001600160a01b038316848363ffffffff610fca16565b505050565b6005546001600160a01b031681565b6008546001600160a01b031681565b60105460ff1681565b60048054604080516370a0823160e01b81523093810193909352516000926105ee926001600160a01b0316916370a0823191602480820192602092909190829003018186803b15801561053f57600080fd5b505afa158015610553573d6000803e3d6000fd5b505050506040513d602081101561056957600080fd5b5051600554604080516370a0823160e01b815230600482015290516001600160a01b03909216916370a0823191602480820192602092909190829003018186803b1580156105b657600080fd5b505afa1580156105ca573d6000803e3d6000fd5b505050506040513d60208110156105e057600080fd5b50519063ffffffff61101c16565b905090565b600d546001600160a01b0316331480610624575061060f610f5d565b6001600160a01b0316336001600160a01b0316145b80610647575061063261086b565b6001600160a01b0316336001600160a01b0316145b6106825760405162461bcd60e51b8152600401808060200182810382526039815260200180611d006039913960400191505060405180910390fd5b60048054604080516370a0823160e01b81523093810193909352516000926001600160a01b03909216916370a08231916024808301926020929190829003018186803b1580156106d157600080fd5b505afa1580156106e5573d6000803e3d6000fd5b505050506040513d60208110156106fb57600080fd5b5051905080156107b257600554600454610729916001600160a01b039182169116600063ffffffff61107f16565b60055460045461074c916001600160a01b0391821691168363ffffffff61107f16565b6005546040805163b6b55f2560e01b81526004810184905290516001600160a01b039092169163b6b55f259160248082019260009290919082900301818387803b15801561079957600080fd5b505af11580156107ad573d6000803e3d6000fd5b505050505b50565b600d546001600160a01b03163314806107e657506107d1610f5d565b6001600160a01b0316336001600160a01b0316145b8061080957506107f461086b565b6001600160a01b0316336001600160a01b0316145b6108445760405162461bcd60e51b8152600401808060200182810382526039815260200180611d006039913960400191505060405180910390fd5b61084c611192565b6108546105f3565b565b600c6020526000908152604090205460ff1681565b60008060009054906101000a90046001600160a01b03166001600160a01b0316635aa6e6756040518163ffffffff1660e01b815260040160206040518083038186803b1580156108ba57600080fd5b505afa1580156108ce573d6000803e3d6000fd5b505050506040513d60208110156108e457600080fd5b5051905090565b6007546001600160a01b031681565b6004546001600160a01b031681565b600a546001600160a01b031681565b600054604080516337b87c3960e21b815233600482015290516001600160a01b039092169163dee1f0e491602480820192602092909190829003018186803b15801561096357600080fd5b505afa158015610977573d6000803e3d6000fd5b505050506040513d602081101561098d57600080fd5b50516109d1576040805162461bcd60e51b815260206004820152600e60248201526d4e6f7420676f7665726e616e636560901b604482015290519081900360640190fd5b6001600160a01b038116610a2c576040805162461bcd60e51b815260206004820152601e60248201527f6e65772073746f726167652073686f756c646e277420626520656d7074790000604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031681565b60115481565b600054604080516337b87c3960e21b815233600482015290516001600160a01b039092169163dee1f0e491602480820192602092909190829003018186803b158015610aae57600080fd5b505afa158015610ac2573d6000803e3d6000fd5b505050506040513d6020811015610ad857600080fd5b5051610b1c576040805162461bcd60e51b815260206004820152600e60248201526d4e6f7420676f7665726e616e636560901b604482015290519081900360640190fd5b6010805460ff1916911515919091179055565b60015481565b600054604080516337b87c3960e21b815233600482015290516001600160a01b039092169163dee1f0e491602480820192602092909190829003018186803b158015610b8057600080fd5b505afa158015610b94573d6000803e3d6000fd5b505050506040513d6020811015610baa57600080fd5b5051610bee576040805162461bcd60e51b815260206004820152600e60248201526d4e6f7420676f7665726e616e636560901b604482015290519081900360640190fd5b601155565b600d546001600160a01b0316331480610c245750610c0f610f5d565b6001600160a01b0316336001600160a01b0316145b80610c475750610c3261086b565b6001600160a01b0316336001600160a01b0316145b610c825760405162461bcd60e51b8152600401808060200182810382526039815260200180611d006039913960400191505060405180910390fd5b610c8a611192565b610c95600e546115f9565b60048054604080516370a0823160e01b81523093810193909352516000926001600160a01b03909216916370a08231916024808301926020929190829003018186803b158015610ce457600080fd5b505afa158015610cf8573d6000803e3d6000fd5b505050506040513d6020811015610d0e57600080fd5b5051600d546004549192506107b2916001600160a01b0390811691168363ffffffff610fca16565b600190565b600d546001600160a01b0316331480610d6c5750610d57610f5d565b6001600160a01b0316336001600160a01b0316145b80610d8f5750610d7a61086b565b6001600160a01b0316336001600160a01b0316145b610dca5760405162461bcd60e51b8152600401808060200182810382526039815260200180611d006039913960400191505060405180910390fd5b610dd3816115f9565b60048054604080516370a0823160e01b815230938101939093525183926001600160a01b03909216916370a08231916024808301926020929190829003018186803b158015610e2157600080fd5b505afa158015610e35573d6000803e3d6000fd5b505050506040513d6020811015610e4b57600080fd5b50511015610e5b57610e5b611192565b60048054604080516370a0823160e01b8152309381019390935251600092610edf926001600160a01b0316916370a0823191602480820192602092909190829003018186803b158015610ead57600080fd5b505afa158015610ec1573d6000803e3d6000fd5b505050506040513d6020811015610ed757600080fd5b5051836116b7565b600d54600454919250610f05916001600160a01b0390811691168363ffffffff610fca16565b5050565b6006546001600160a01b031681565b600b546001600160a01b031681565b600f8181548110610f3457fe5b6000918252602090912001546001600160a01b0316905081565b6009546001600160a01b031681565b60008060009054906101000a90046001600160a01b03166001600160a01b031663f77c47916040518163ffffffff1660e01b815260040160206040518083038186803b1580156108ba57600080fd5b6003546001600160a01b031681565b600d546001600160a01b031681565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526104c19084906116cd565b600082820183811015611076576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b90505b92915050565b801580611105575060408051636eb1769f60e11b81523060048201526001600160a01b03848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b1580156110d757600080fd5b505afa1580156110eb573d6000803e3d6000fd5b505050506040513d602081101561110157600080fd5b5051155b6111405760405162461bcd60e51b8152600401808060200182810382526036815260200180611da76036913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b1790526104c19084906116cd565b60105460ff166111ca576040517f444bcec8acce9dc46755761662d6262a490b9f61cca73243c5131d98df078ce390600090a1610854565b600654600554604080516335313c2160e11b81526001600160a01b03928316600482015290519190921691636a62784291602480830192600092919082900301818387803b15801561121b57600080fd5b505af115801561122f573d6000803e3d6000fd5b5050600754604080516370a0823160e01b81523060048201529051600094506001600160a01b0390921692506370a08231916024808301926020929190829003018186803b15801561128057600080fd5b505afa158015611294573d6000803e3d6000fd5b505050506040513d60208110156112aa57600080fd5b50516011549091508110156112e8576040517f444bcec8acce9dc46755761662d6262a490b9f61cca73243c5131d98df078ce390600090a150610854565b6112f18161188b565b600754604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561133c57600080fd5b505afa158015611350573d6000803e3d6000fd5b505050506040513d602081101561136657600080fd5b505190508015610f05576040805182815290517f875c79c14f0ec82c9ae01b82cfab0d1c5c4079f1500682832fb877a7dec614fb9181900360200190a1600b546007546113c7916001600160a01b039182169116600063ffffffff61107f16565b600b546007546113ea916001600160a01b0391821691168363ffffffff61107f16565b600b546040516338ed173960e01b8152600481018381526001602483018190523060648401819052426084850181905260a060448601908152600f805460a488018190526001600160a01b03909816976338ed1739978a97929594939160c4909101908690801561148457602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611466575b50509650505050505050600060405180830381600087803b1580156114a857600080fd5b505af11580156114bc573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405260208110156114e557600080fd5b810190808051604051939291908464010000000082111561150557600080fd5b90830190602082018581111561151a57600080fd5b825186602082028301116401000000008211171561153757600080fd5b82525081516020918201928201910280838360005b8381101561156457818101518382015260200161154c565b505050509190910160408181526009546370a0823160e01b83523060048401529051600097506001600160a01b0390911695506370a08231945060248083019450602093509091829003018186803b1580156115bf57600080fd5b505afa1580156115d3573d6000803e3d6000fd5b505050506040513d60208110156115e957600080fd5b50511115610f0557610f05611a04565b600554604080516370a0823160e01b815230600482015290516001600160a01b0390921691632e1a7d4d916116819184916370a08231916024808301926020929190829003018186803b15801561164f57600080fd5b505afa158015611663573d6000803e3d6000fd5b505050506040513d602081101561167957600080fd5b5051846116b7565b6040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561079957600080fd5b60008183106116c65781611076565b5090919050565b6116df826001600160a01b0316611b8b565b611730576040805162461bcd60e51b815260206004820152601f60248201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604482015290519081900360640190fd5b60006060836001600160a01b0316836040518082805190602001908083835b6020831061176e5780518252601f19909201916020918201910161174f565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146117d0576040519150601f19603f3d011682016040523d82523d6000602084013e6117d5565b606091505b50915091508161182c576040805162461bcd60e51b815260206004820181905260248201527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604482015290519081900360640190fd5b8051156118855780806020019051602081101561184857600080fd5b50516118855760405162461bcd60e51b815260040180806020018281038252602a815260200180611d7d602a913960400191505060405180910390fd5b50505050565b80156119c25760006118ba6002546118ae60015485611bc790919063ffffffff16565b9063ffffffff611c2016565b6040805184815260208101839052428183015290519192507f33fd2845a0f10293482de360244dd4ad31ddbb4b8c4a1ded3875cf8ebfba184b919081900360600190a1611922611908610f5d565b6003546001600160a01b031690600063ffffffff61107f16565b61194661192d610f5d565b6003546001600160a01b0316908363ffffffff61107f16565b61194e610f5d565b60035460408051631ee0d7e560e31b81526001600160a01b039283166004820152602481018590529051929091169163f706bf289160448082019260009290919082900301818387803b1580156119a457600080fd5b505af11580156119b8573d6000803e3d6000fd5b50505050506107b2565b6040805160008082526020820152428183015290517f33fd2845a0f10293482de360244dd4ad31ddbb4b8c4a1ded3875cf8ebfba184b9181900360600190a150565b600954604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b158015611a4f57600080fd5b505afa158015611a63573d6000803e3d6000fd5b505050506040513d6020811015611a7957600080fd5b5051905080156107b257600a54600954611aa7916001600160a01b039182169116600063ffffffff61107f16565b600a54600954611aca916001600160a01b0391821691168363ffffffff61107f16565b600a54604080516080808201835260008083526020830186905282840181905260608301819052925162a6cbcd60e21b815292936001600160a01b03169263029b2f34929185916004019081908490808383875b83811015611b36578181015183820152602001611b1e565b5050505090500182815260200192505050602060405180830381600087803b158015611b6157600080fd5b505af1158015611b75573d6000803e3d6000fd5b505050506040513d602081101561188557600080fd5b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470818114801590611bbf57508115155b949350505050565b600082611bd657506000611079565b82820282848281611be357fe5b04146110765760405162461bcd60e51b8152600401808060200182810382526021815260200180611d5c6021913960400191505060405180910390fd5b600061107683836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525060008183611ce95760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611cae578181015183820152602001611c96565b50505050905090810190601f168015611cdb5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581611cf557fe5b049594505050505056fe5468652073656e6465722068617320746f2062652074686520636f6e74726f6c6c65722c20676f7665726e616e63652c206f72207661756c74746f6b656e20697320646566696e6564206173206e6f742073616c7661676561626c65536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e6365a265627a7a72315820d41ffed8c9eac5136ef8a020b10fc7cba665ddc0ee7055d0ce386958f94276c664736f6c63430005100032";
