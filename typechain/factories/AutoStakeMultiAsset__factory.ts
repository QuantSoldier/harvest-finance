/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { AutoStakeMultiAsset } from "../AutoStakeMultiAsset";

export class AutoStakeMultiAsset__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _storage: string,
    _pool: string,
    _lpToken: string,
    _greylistEscrow: string,
    _autostake: string,
    _farm: string,
    overrides?: Overrides
  ): Promise<AutoStakeMultiAsset> {
    return super.deploy(
      _storage,
      _pool,
      _lpToken,
      _greylistEscrow,
      _autostake,
      _farm,
      overrides || {}
    ) as Promise<AutoStakeMultiAsset>;
  }
  getDeployTransaction(
    _storage: string,
    _pool: string,
    _lpToken: string,
    _greylistEscrow: string,
    _autostake: string,
    _farm: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _storage,
      _pool,
      _lpToken,
      _greylistEscrow,
      _autostake,
      _farm,
      overrides || {}
    );
  }
  attach(address: string): AutoStakeMultiAsset {
    return super.attach(address) as AutoStakeMultiAsset;
  }
  connect(signer: Signer): AutoStakeMultiAsset__factory {
    return super.connect(signer) as AutoStakeMultiAsset__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AutoStakeMultiAsset {
    return new Contract(address, _abi, signerOrProvider) as AutoStakeMultiAsset;
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
        name: "_pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lpToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_greylistEscrow",
        type: "address",
      },
      {
        internalType: "address",
        name: "_autostake",
        type: "address",
      },
      {
        internalType: "address",
        name: "_farm",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [],
    name: "DecreaseInFarm",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "grelisted",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ForceGreylistExited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "greylistedAddress",
        type: "address",
      },
    ],
    name: "SmartContractDenied",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "smartContractAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "smartContractInitiator",
        type: "address",
      },
    ],
    name: "SmartContractRecorded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "balanceOfLp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "balanceOfFarm",
        type: "uint256",
      },
    ],
    name: "Staked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "StakingDenied",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "farm",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "UNIT_FARM",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balance",
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
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "balanceOfJoint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
    name: "debtPerDebtShare",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "debtShare",
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
    inputs: [],
    name: "exit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "farm",
    outputs: [
      {
        internalType: "contract IERC20",
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
    name: "farmAutoStake",
    outputs: [
      {
        internalType: "contract AutoStake",
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
    name: "farmPerToken",
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
        name: "greyListed",
        type: "address",
      },
    ],
    name: "forceGreyListedExit",
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
    constant: true,
    inputs: [],
    name: "greylistEscrow",
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
    name: "lpToken",
    outputs: [
      {
        internalType: "contract IERC20",
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
    name: "refreshAutoStake",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "rewardPool",
    outputs: [
      {
        internalType: "contract NoMintRewardPool",
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
        name: "_greylistEscrow",
        type: "address",
      },
    ],
    name: "setGreylistEscrow",
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
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
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
    name: "totalBalanceFarm",
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
    name: "totalBalanceLp",
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
    name: "totalDebtShares",
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
];

const _bytecode =
  "0x608060405260006006556000600755670de0b6b3a76400006008553480156200002757600080fd5b506040516200206c3803806200206c833981810160405260c08110156200004d57600080fd5b508051602082015160408301516060840151608085015160a090950151939492939192909185806001600160a01b038116620000d0576040805162461bcd60e51b815260206004820152601e60248201527f6e65772073746f726167652073686f756c646e277420626520656d7074790000604482015290519081900360640190fd5b600080546001600160a01b03199081166001600160a01b0393841617909155600180548216898416179055600280548216868416179055600480548216858416179055600380548216888416179055600c805490911691861691909117905550670de0b6b3a7640000600a556200014662000152565b5050505050506200042a565b60065462000176576000600755670de0b6b3a76400006008819055600a5562000275565b60048054604080516370a0823160e01b81523093810193909352516001600160a01b03909116916370a08231916024808301926020929190829003018186803b158015620001c357600080fd5b505afa158015620001d8573d6000803e3d6000fd5b505050506040513d6020811015620001ef57600080fd5b5051600755600654600a54600b546200027192916200023291670de0b6b3a7640000916200025d9162000246918491869162000277602090811b62000ba817901c565b620002de60201b62000c0a1790919060201c565b6007546200032860201b620011711790919060201c565b6200027760201b62000ba81790919060201c565b6008555b565b6000826200028857506000620002d8565b828202828482816200029657fe5b0414620002d55760405162461bcd60e51b81526004018080602001828103825260218152602001806200204b6021913960400191505060405180910390fd5b90505b92915050565b6000620002d583836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506200038360201b60201c565b600082820183811015620002d5576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60008183620004135760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015620003d7578181015183820152602001620003bd565b50505050905090810190601f168015620004055780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385816200042057fe5b0495945050505050565b611c11806200043a6000396000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c8063906a397d116100c3578063e092a6081161007c578063e092a608146102e1578063e3d670d7146102e9578063e9fad8ee1461030f578063f1f8865714610317578063f4ff64c31461031f578063f77c47911461034557610158565b8063906a397d1461025e5780639137c1a714610286578063975057e7146102ac578063a694fc3a146102b4578063aebd0ead146102d1578063b540652e146102d957610158565b80635fcbd285116101155780635fcbd285146101d957806366666aa9146101e157806370a08231146101e957806370a897421461020f5780638481a8781461024e5780638e25c2d51461025657610158565b80630da4b5711461015d5780631b859e41146101775780632851e2e01461017f57806336e9332d146101a557806354fa9b25146101c95780635aa6e675146101d1575b600080fd5b61016561034d565b60408051918252519081900360200190f35b610165610359565b6101656004803603602081101561019557600080fd5b50356001600160a01b031661035f565b6101ad610371565b604080516001600160a01b039092168252519081900360200190f35b6101ad610380565b6101ad61038f565b6101ad61040f565b6101ad61041e565b610165600480360360208110156101ff57600080fd5b50356001600160a01b031661042d565b6102356004803603602081101561022557600080fd5b50356001600160a01b0316610448565b6040805192835260208301919091528051918290030190f35b610165610509565b61016561050f565b6102846004803603602081101561027457600080fd5b50356001600160a01b0316610515565b005b6102846004803603602081101561029c57600080fd5b50356001600160a01b031661064b565b6101ad610781565b610284600480360360208110156102ca57600080fd5b5035610790565b61016561099d565b6102846109a3565b6101656109bd565b610165600480360360208110156102ff57600080fd5b50356001600160a01b03166109c3565b6102846109d5565b6101ad610a2c565b6102846004803603602081101561033557600080fd5b50356001600160a01b0316610a3b565b6101ad610b59565b670de0b6b3a764000081565b600b5481565b60096020526000908152604090205481565b6004546001600160a01b031681565b600c546001600160a01b031681565b60008060009054906101000a90046001600160a01b03166001600160a01b0316635aa6e6756040518163ffffffff1660e01b815260040160206040518083038186803b1580156103de57600080fd5b505afa1580156103f2573d6000803e3d6000fd5b505050506040513d602081101561040857600080fd5b5051905090565b6003546001600160a01b031681565b6001546001600160a01b031681565b6001600160a01b031660009081526005602052604090205490565b6001600160a01b0381166000908152600560205260408120546008548291829161049191670de0b6b3a7640000916104859163ffffffff610ba816565b9063ffffffff610c0a16565b6001600160a01b038516600090815260096020526040812054600a5492935090916104cf91670de0b6b3a7640000916104859163ffffffff610ba816565b9050808211156104f0576104e9828263ffffffff610c4c16565b91506104f5565b600091505b6104fe8561042d565b935090915050915091565b60075481565b600a5481565b600054604080516337b87c3960e21b815233600482015290516001600160a01b039092169163dee1f0e491602480820192602092909190829003018186803b15801561056057600080fd5b505afa158015610574573d6000803e3d6000fd5b505050506040513d602081101561058a57600080fd5b50516105ce576040805162461bcd60e51b815260206004820152600e60248201526d4e6f7420676f7665726e616e636560901b604482015290519081900360640190fd5b6001600160a01b038116610629576040805162461bcd60e51b815260206004820152601e60248201527f657363726f772063616e6e6f7420626520656d70747920616464726573730000604482015290519081900360640190fd5b600c80546001600160a01b0319166001600160a01b0392909216919091179055565b600054604080516337b87c3960e21b815233600482015290516001600160a01b039092169163dee1f0e491602480820192602092909190829003018186803b15801561069657600080fd5b505afa1580156106aa573d6000803e3d6000fd5b505050506040513d60208110156106c057600080fd5b5051610704576040805162461bcd60e51b815260206004820152600e60248201526d4e6f7420676f7665726e616e636560901b604482015290519081900360640190fd5b6001600160a01b03811661075f576040805162461bcd60e51b815260206004820152601e60248201527f6e65772073746f726167652073686f756c646e277420626520656d7074790000604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031681565b610798610c8e565b6107a0610f75565b3233146107ea57336000818152600d6020526040808220805460ff19166001179055513292917f70da7b97c021a1e9d5c080587a8ecf9eae97ef5f9bc39e1ac9bfc054104e9e0691a35b6107f333611065565b156108335760408051828152905133917f8534c36eb5138fbd97b21b177423caf9dbbb77468a91ffe5c40f7112b06e5d9e919081900360200190a2610992565b600654600354610854906001600160a01b031633308563ffffffff61111716565b600654610867908363ffffffff61117116565b6006553360009081526005602052604090205461088a908363ffffffff61117116565b33600090815260056020526040902055801561093257600a546000906108b790600263ffffffff610c0a16565b905060006108e6600a54610485846108da88600854610ba890919063ffffffff16565b9063ffffffff61117116565b33600090815260096020526040902054909150610909908263ffffffff61117116565b33600090815260096020526040902055600b5461092c908263ffffffff61117116565b600b5550505b61093a610f75565b60008061094633610448565b6040805187815260208101849052808201839052905192945090925033917fb4caaf29adda3eefee3ad552a8e85058589bf834c7466cae4ee58787f70589ed9181900360600190a25050505b61099a6111cb565b50565b60065481565b6109ab610c8e565b6109b3610f75565b6109bb6111cb565b565b60085481565b60056020526000908152604090205481565b6109dd610c8e565b6109e5610f75565b6109ee33611065565b15610a235760405133907f4bc6394fa32e66e0212dedb00dde8d1e32f233b0a398952a84dd95930f56c9de90600090a26109b3565b6109ab336115d9565b6002546001600160a01b031681565b600054604080516337b87c3960e21b815233600482015290516001600160a01b039092169163dee1f0e491602480820192602092909190829003018186803b158015610a8657600080fd5b505afa158015610a9a573d6000803e3d6000fd5b505050506040513d6020811015610ab057600080fd5b5051610af4576040805162461bcd60e51b815260206004820152600e60248201526d4e6f7420676f7665726e616e636560901b604482015290519081900360640190fd5b610afd81611065565b610b385760405162461bcd60e51b8152600401808060200182810382526021815260200180611b866021913960400191505060405180910390fd5b610b40610c8e565b610b48610f75565b610b51816115d9565b610992610f75565b60008060009054906101000a90046001600160a01b03166001600160a01b031663f77c47916040518163ffffffff1660e01b815260040160206040518083038186803b1580156103de57600080fd5b600082610bb757506000610c04565b82820282848281610bc457fe5b0414610c015760405162461bcd60e51b8152600401808060200182810382526021815260200180611b3b6021913960400191505060405180910390fd5b90505b92915050565b6000610c0183836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506116e0565b6000610c0183836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611782565b600254604080516370a0823160e01b815230600482015290516001600160a01b03909216916370a0823191602480820192602092909190829003018186803b158015610cd957600080fd5b505afa158015610ced573d6000803e3d6000fd5b505050506040513d6020811015610d0357600080fd5b505115610e8f57600260009054906101000a90046001600160a01b03166001600160a01b031663e9fad8ee6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610d5a57600080fd5b505af1158015610d6e573d6000803e3d6000fd5b505060048054604080516370a0823160e01b8152309381019390935251600094506001600160a01b0390911692506370a0823191602480820192602092909190829003018186803b158015610dc257600080fd5b505afa158015610dd6573d6000803e3d6000fd5b505050506040513d6020811015610dec57600080fd5b50516007549091501580610e01575080600754145b15610e0b57610e8d565b806007541115610e43576040517f666db22bcbe5459bd7453880f782b580be116cd6f72e6fd151194e0693b0e75490600090a1610e8d565b600754600090610e659061048584670de0b6b3a764000063ffffffff610ba816565b9050610e88670de0b6b3a764000061048583600a54610ba890919063ffffffff16565b600a55505b505b600154604080516370a0823160e01b815230600482015290516001600160a01b03909216916370a0823191602480820192602092909190829003018186803b158015610eda57600080fd5b505afa158015610eee573d6000803e3d6000fd5b505050506040513d6020811015610f0457600080fd5b5051156109bb57600160009054906101000a90046001600160a01b03166001600160a01b031663e9fad8ee6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610f5b57600080fd5b505af1158015610f6f573d6000803e3d6000fd5b50505050565b600654610f97576000600755670de0b6b3a76400006008819055600a556109bb565b60048054604080516370a0823160e01b81523093810193909352516001600160a01b03909116916370a08231916024808301926020929190829003018186803b158015610fe357600080fd5b505afa158015610ff7573d6000803e3d6000fd5b505050506040513d602081101561100d57600080fd5b5051600755600654600a54600b54611060929161048591670de0b6b3a76400009161105491611045918491869163ffffffff610ba816565b6007549063ffffffff61117116565b9063ffffffff610ba816565b600855565b6001600160a01b0381166000908152600d602052604081205460ff168015610c045750611090610b59565b6001600160a01b03166330e412ad836040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b1580156110e557600080fd5b505afa1580156110f9573d6000803e3d6000fd5b505050506040513d602081101561110f57600080fd5b505192915050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052610f6f9085906117dc565b600082820183811015610c01576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600354604080516370a0823160e01b815230600482015290516001600160a01b03909216916370a0823191602480820192602092909190829003018186803b15801561121657600080fd5b505afa15801561122a573d6000803e3d6000fd5b505050506040513d602081101561124057600080fd5b5051156113db5760015460035461126b916001600160a01b039182169116600063ffffffff61199416565b600154600354604080516370a0823160e01b81523060048201529051611303936001600160a01b039081169316916370a08231916024808301926020929190829003018186803b1580156112be57600080fd5b505afa1580156112d2573d6000803e3d6000fd5b505050506040513d60208110156112e857600080fd5b50516003546001600160a01b0316919063ffffffff61199416565b600154600354604080516370a0823160e01b815230600482015290516001600160a01b039384169363a694fc3a9316916370a08231916024808301926020929190829003018186803b15801561135857600080fd5b505afa15801561136c573d6000803e3d6000fd5b505050506040513d602081101561138257600080fd5b5051604080516001600160e01b031960e085901b168152600481019290925251602480830192600092919082900301818387803b1580156113c257600080fd5b505af11580156113d6573d6000803e3d6000fd5b505050505b60048054604080516370a0823160e01b81523093810193909352516001600160a01b03909116916370a08231916024808301926020929190829003018186803b15801561142757600080fd5b505afa15801561143b573d6000803e3d6000fd5b505050506040513d602081101561145157600080fd5b5051156109bb5760025460045461147c916001600160a01b039182169116600063ffffffff61199416565b60025460048054604080516370a0823160e01b8152309381019390935251611517936001600160a01b03908116939216916370a08231916024808301926020929190829003018186803b1580156114d257600080fd5b505afa1580156114e6573d6000803e3d6000fd5b505050506040513d60208110156114fc57600080fd5b50516004546001600160a01b0316919063ffffffff61199416565b60025460048054604080516370a0823160e01b81523093810193909352516001600160a01b039384169363a694fc3a939216916370a08231916024808301926020929190829003018186803b15801561156f57600080fd5b505afa158015611583573d6000803e3d6000fd5b505050506040513d602081101561159957600080fd5b5051604080516001600160e01b031960e085901b168152600481019290925251602480830192600092919082900301818387803b158015610f5b57600080fd5b6000806115e583610448565b6001600160a01b038516600090815260056020526040902054600654929450909250611617919063ffffffff610c4c16565b6006556001600160a01b03831660009081526005602090815260408083208390556009909152902054600b546116529163ffffffff610c4c16565b600b556001600160a01b038084166000908152600960205260408120556003546116849116848463ffffffff611aac16565b6004546116a1906001600160a01b0316848363ffffffff611aac16565b6040805183815260208101839052815133927f92ccf450a286a957af52509bc1c9939d1a6a481783e142e41e2499f0bb66ebc6928290030190a2505050565b6000818361176c5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611731578181015183820152602001611719565b50505050905090810190601f16801561175e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161177857fe5b0495945050505050565b600081848411156117d45760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611731578181015183820152602001611719565b505050900390565b6117ee826001600160a01b0316611afe565b61183f576040805162461bcd60e51b815260206004820152601f60248201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604482015290519081900360640190fd5b60006060836001600160a01b0316836040518082805190602001908083835b6020831061187d5780518252601f19909201916020918201910161185e565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146118df576040519150601f19603f3d011682016040523d82523d6000602084013e6118e4565b606091505b50915091508161193b576040805162461bcd60e51b815260206004820181905260248201527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604482015290519081900360640190fd5b805115610f6f5780806020019051602081101561195757600080fd5b5051610f6f5760405162461bcd60e51b815260040180806020018281038252602a815260200180611b5c602a913960400191505060405180910390fd5b801580611a1a575060408051636eb1769f60e11b81523060048201526001600160a01b03848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b1580156119ec57600080fd5b505afa158015611a00573d6000803e3d6000fd5b505050506040513d6020811015611a1657600080fd5b5051155b611a555760405162461bcd60e51b8152600401808060200182810382526036815260200180611ba76036913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052611aa79084906117dc565b505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052611aa79084906117dc565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470818114801590611b3257508115155b94935050505056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f74207375636365656463616e206f6e6c7920666f7263652065786974206120677265796c69737465642e5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e6365a265627a7a72315820cadee221b38561a44ce11f82d5a01f6e4db145fe439de6c2654d8686c545480064736f6c63430005100032536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77";