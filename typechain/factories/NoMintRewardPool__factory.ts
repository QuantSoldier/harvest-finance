/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { NoMintRewardPool } from "../NoMintRewardPool";

export class NoMintRewardPool__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _rewardToken: string,
    _lpToken: string,
    _duration: BigNumberish,
    _rewardDistribution: string,
    _storage: string,
    _sourceVault: string,
    _migrationStrategy: string,
    overrides?: Overrides
  ): Promise<NoMintRewardPool> {
    return super.deploy(
      _rewardToken,
      _lpToken,
      _duration,
      _rewardDistribution,
      _storage,
      _sourceVault,
      _migrationStrategy,
      overrides || {}
    ) as Promise<NoMintRewardPool>;
  }
  getDeployTransaction(
    _rewardToken: string,
    _lpToken: string,
    _duration: BigNumberish,
    _rewardDistribution: string,
    _storage: string,
    _sourceVault: string,
    _migrationStrategy: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _rewardToken,
      _lpToken,
      _duration,
      _rewardDistribution,
      _storage,
      _sourceVault,
      _migrationStrategy,
      overrides || {}
    );
  }
  attach(address: string): NoMintRewardPool {
    return super.attach(address) as NoMintRewardPool;
  }
  connect(signer: Signer): NoMintRewardPool__factory {
    return super.connect(signer) as NoMintRewardPool__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NoMintRewardPool {
    return new Contract(address, _abi, signerOrProvider) as NoMintRewardPool;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lpToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_rewardDistribution",
        type: "address",
      },
      {
        internalType: "address",
        name: "_storage",
        type: "address",
      },
      {
        internalType: "address",
        name: "_sourceVault",
        type: "address",
      },
      {
        internalType: "address",
        name: "_migrationStrategy",
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
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "legacyShare",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newShare",
        type: "uint256",
      },
    ],
    name: "Migrated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "RewardAdded",
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
        name: "reward",
        type: "uint256",
      },
    ],
    name: "RewardDenied",
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
        name: "reward",
        type: "uint256",
      },
    ],
    name: "RewardPaid",
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
    name: "Withdrawn",
    type: "event",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "account",
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
    inputs: [],
    name: "canMigrate",
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
    name: "duration",
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
        name: "account",
        type: "address",
      },
    ],
    name: "earned",
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
    constant: false,
    inputs: [],
    name: "getReward",
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
    name: "isOwner",
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
    name: "lastTimeRewardApplicable",
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
    name: "lastUpdateTime",
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
    name: "migrate",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "migrationStrategy",
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
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "notifyRewardAmount",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
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
    name: "periodFinish",
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
    name: "pullFromStrategy",
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
        name: "recipient",
        type: "address",
      },
    ],
    name: "pushReward",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "rewardPerToken",
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
    name: "rewardPerTokenStored",
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
    name: "rewardRate",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "rewards",
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
        name: "_canMigrate",
        type: "bool",
      },
    ],
    name: "setCanMigrate",
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
        name: "_rewardDistribution",
        type: "address",
      },
    ],
    name: "setRewardDistribution",
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
    name: "sourceVault",
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
    name: "totalSupply",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
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
    name: "userRewardPerTokenPaid",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000600855600060095534801561001a57600080fd5b50604051612195380380612195833981810160405260e081101561003d57600080fd5b508051602082015160408301516060840151608085015160a086015160c090960151949593949293919290919082808560006100806001600160e01b036101a516565b600380546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600480546001600160a01b0319166001600160a01b03928316179055811661013d576040805162461bcd60e51b815260206004820152601e60248201527f6e65772073746f726167652073686f756c646e277420626520656d7074790000604482015290519081900360640190fd5b600580546001600160a01b03199081166001600160a01b03938416179091556006805482169a83169a909a17909955600080548a169882169890981790975550600794909455600f8054871691861691909117905550506010805490931691161790556101a9565b3390565b611fdd806101b86000396000f3fe608060405234801561001057600080fd5b50600436106102105760003560e01c80638da5cb5b11610125578063ce970630116100ad578063ebe2b12b1161007c578063ebe2b12b14610453578063f2fde38b1461045b578063f77c479114610481578063f7c618c114610489578063fa9389a21461049157610210565b8063ce97063014610433578063df136d651461043b578063e5e3a9b014610443578063e9fad8ee1461044b57610210565b8063975057e7116100f4578063975057e7146103f6578063a694fc3a146103fe578063c8f33c911461041b578063c9a8b55a14610423578063cd3daf9d1461042b57610210565b80638da5cb5b146103b85780638f32d59b146103c05780638fd3ab80146103c85780639137c1a7146103d057610210565b80633c6b16ab116101a857806370a082311161017757806370a0823114610354578063715018a61461037a5780637b0a47ee1461038257806380faa57d1461038a5780638b8763471461039257610210565b80633c6b16ab146103035780633d18b912146103205780635aa6e675146103285780635fcbd2851461034c57610210565b806315672d58116101e457806315672d58146102a357806318160ddd146102c257806319ed21bd146102ca5780632e1a7d4d146102e657610210565b80628cc262146102155780630700037d1461024d5780630d68b761146102735780630fb5a6b41461029b575b600080fd5b61023b6004803603602081101561022b57600080fd5b50356001600160a01b03166104b7565b60408051918252519081900360200190f35b61023b6004803603602081101561026357600080fd5b50356001600160a01b031661053d565b6102996004803603602081101561028957600080fd5b50356001600160a01b031661054f565b005b61023b6105ca565b610299600480360360208110156102b957600080fd5b503515156105d0565b61023b6106a7565b6102d26106ae565b604080519115158252519081900360200190f35b610299600480360360208110156102fc57600080fd5b50356106be565b6102996004803603602081101561031957600080fd5b50356107a5565b610299610978565b610330610b21565b604080516001600160a01b039092168252519081900360200190f35b610330610b97565b61023b6004803603602081101561036a57600080fd5b50356001600160a01b0316610ba6565b610299610bc1565b61023b610c64565b61023b610c6a565b61023b600480360360208110156103a857600080fd5b50356001600160a01b0316610c7d565b610330610c8f565b6102d2610c9e565b610299610cc4565b610299600480360360208110156103e657600080fd5b50356001600160a01b0316610fb6565b6103306110ec565b6102996004803603602081101561041457600080fd5b50356110fb565b61023b6111e7565b6102996111ed565b61023b6112e4565b610330611338565b61023b611347565b61033061134d565b61029961135c565b61023b611375565b6102996004803603602081101561047157600080fd5b50356001600160a01b031661137b565b6103306113e0565b610330611425565b610299600480360360208110156104a757600080fd5b50356001600160a01b0316611434565b6001600160a01b0381166000908152600d6020908152604080832054600c909252822054610537919061052b90670de0b6b3a76400009061051f9061050a906104fe6112e4565b9063ffffffff6116ba16565b61051388610ba6565b9063ffffffff61170316565b9063ffffffff61175c16565b9063ffffffff61179e16565b92915050565b600d6020526000908152604090205481565b610557610c9e565b6105a8576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600480546001600160a01b0319166001600160a01b0392909216919091179055565b60075481565b600554604080516337b87c3960e21b815233600482015290516001600160a01b039092169163dee1f0e491602480820192602092909190829003018186803b15801561061b57600080fd5b505afa15801561062f573d6000803e3d6000fd5b505050506040513d602081101561064557600080fd5b5051610689576040805162461bcd60e51b815260206004820152600e60248201526d4e6f7420676f7665726e616e636560901b604482015290519081900360640190fd5b60108054911515600160a01b0260ff60a01b19909216919091179055565b6001545b90565b601054600160a01b900460ff1681565b336106c76112e4565b600b556106d2610c6a565b600a556001600160a01b03811615610719576106ed816104b7565b6001600160a01b0382166000908152600d6020908152604080832093909355600b54600c909152919020555b60008211610762576040805162461bcd60e51b8152602060048201526011602482015270043616e6e6f74207769746864726177203607c1b604482015290519081900360640190fd5b61076b826117f8565b60408051838152905133917f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5919081900360200190a25050565b6004546001600160a01b03166107b9611859565b6001600160a01b0316146107fe5760405162461bcd60e51b8152600401808060200182810382526021815260200180611f5e6021913960400191505060405180910390fd5b60006108086112e4565b600b55610813610c6a565b600a556001600160a01b0381161561085a5761082e816104b7565b6001600160a01b0382166000908152600d6020908152604080832093909355600b54600c909152919020555b7812725dd1d243aba0e75fe645cc4873f9e65afe688c928e1f2182106108b15760405162461bcd60e51b8152600401808060200182810382526039815260200180611f046039913960400191505060405180910390fd5b60085442106108d6576007546108ce90839063ffffffff61175c16565b600955610925565b6008546000906108ec904263ffffffff6116ba16565b905060006109056009548361170390919063ffffffff16565b60075490915061091f9061051f868463ffffffff61179e16565b60095550505b42600a81905560075461093e919063ffffffff61179e16565b6008556040805183815290517fde88a922e0d3b88b24e9623efeb464919c6bf9f66857a65e2bfcf2ce87a9433d9181900360200190a15050565b336109816112e4565b600b5561098c610c6a565b600a556001600160a01b038116156109d3576109a7816104b7565b6001600160a01b0382166000908152600d6020908152604080832093909355600b54600c909152919020555b60006109de336104b7565b90508015610b1d57336000818152600d6020526040812055321480610a895750610a066113e0565b6001600160a01b03166330e412ad336040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b158015610a5b57600080fd5b505afa158015610a6f573d6000803e3d6000fd5b505050506040513d6020811015610a8557600080fd5b5051155b15610ae657600654610aab906001600160a01b0316338363ffffffff61185d16565b60408051828152905133917fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e0486919081900360200190a2610b1d565b60408051828152905133917f3c053e6b7030f90e85c5a23cdadc6806d9e2fc865df1be2a1261580a1ecd1da9919081900360200190a25b5050565b60055460408051635aa6e67560e01b815290516000926001600160a01b031691635aa6e675916004808301926020929190829003018186803b158015610b6657600080fd5b505afa158015610b7a573d6000803e3d6000fd5b505050506040513d6020811015610b9057600080fd5b5051905090565b6000546001600160a01b031681565b6001600160a01b031660009081526002602052604090205490565b610bc9610c9e565b610c1a576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6003546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600380546001600160a01b0319169055565b60095481565b6000610c78426008546118af565b905090565b600c6020526000908152604090205481565b6003546001600160a01b031690565b6003546000906001600160a01b0316610cb5611859565b6001600160a01b031614905090565b601054600160a01b900460ff16610d1b576040805162461bcd60e51b8152602060048201526016602482015275119d5b991cc81b9bdd081e595d081b5a59dc985d195960521b604482015290519081900360640190fd5b610d236118c5565b60008054600f54604080516370a0823160e01b815230600482015290516001600160a01b039384169493610e219316916370a08231916024808301926020929190829003018186803b158015610d7857600080fd5b505afa158015610d8c573d6000803e3d6000fd5b505050506040513d6020811015610da257600080fd5b5051600f54604080516318160ddd60e01b815290516001600160a01b03909216916318160ddd91600480820192602092909190829003018186803b158015610de957600080fd5b505afa158015610dfd573d6000803e3d6000fd5b505050506040513d6020811015610e1357600080fd5b50519063ffffffff6116ba16565b90506000610e76610e306106a7565b604080516370a0823160e01b815230600482015290516001600160a01b038716916370a08231916024808301926020929190829003018186803b158015610de957600080fd5b600f54604080516370a0823160e01b815233600482015290519293506000926001600160a01b03909216916370a0823191602480820192602092909190829003018186803b158015610ec757600080fd5b505afa158015610edb573d6000803e3d6000fd5b505050506040513d6020811015610ef157600080fd5b5051905082811115610f345760405162461bcd60e51b815260040180806020018281038252604d815260200180611e91604d913960600191505060405180910390fd5b6000610f4a8461051f848663ffffffff61170316565b600f54909150610f6b906001600160a01b031633308563ffffffff61191016565b610f753382611970565b6040805183815260208101839052815133927fd083678824038160bef3975359ab29f19c3f0e9bcf9d7ead540a492d4d678b63928290030190a25050505050565b600554604080516337b87c3960e21b815233600482015290516001600160a01b039092169163dee1f0e491602480820192602092909190829003018186803b15801561100157600080fd5b505afa158015611015573d6000803e3d6000fd5b505050506040513d602081101561102b57600080fd5b505161106f576040805162461bcd60e51b815260206004820152600e60248201526d4e6f7420676f7665726e616e636560901b604482015290519081900360640190fd5b6001600160a01b0381166110ca576040805162461bcd60e51b815260206004820152601e60248201527f6e65772073746f726167652073686f756c646e277420626520656d7074790000604482015290519081900360640190fd5b600580546001600160a01b0319166001600160a01b0392909216919091179055565b6005546001600160a01b031681565b336111046112e4565b600b5561110f610c6a565b600a556001600160a01b038116156111565761112a816104b7565b6001600160a01b0382166000908152600d6020908152604080832093909355600b54600c909152919020555b6000821161119c576040805162461bcd60e51b815260206004820152600e60248201526d043616e6e6f74207374616b6520360941b604482015290519081900360640190fd5b6111a46118c5565b6111ad82611a19565b60408051838152905133917f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d919081900360200190a25050565b600a5481565b6010546001600160a01b031633146112365760405162461bcd60e51b8152600401808060200182810382526025815260200180611e6c6025913960400191505060405180910390fd5b6010805460ff60a01b1916600160a01b179055600054604080516370a0823160e01b8152336004820181905291516112e29330926001600160a01b03909116916370a0823191602480820192602092909190829003018186803b15801561129c57600080fd5b505afa1580156112b0573d6000803e3d6000fd5b505050506040513d60208110156112c657600080fd5b50516000546001600160a01b031692919063ffffffff61191016565b565b60006112ee6106a7565b6112fb5750600b546106ab565b610c786113296113096106a7565b61051f670de0b6b3a7640000610513600954610513600a546104fe610c6a565b600b549063ffffffff61179e16565b600f546001600160a01b031681565b600b5481565b6010546001600160a01b031681565b61136d61136833610ba6565b6106be565b6112e2610978565b60085481565b611383610c9e565b6113d4576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6113dd81611a7b565b50565b6005546040805163f77c479160e01b815290516000926001600160a01b03169163f77c4791916004808301926020929190829003018186803b158015610b6657600080fd5b6006546001600160a01b031681565b8061143d6112e4565b600b55611448610c6a565b600a556001600160a01b0381161561148f57611463816104b7565b6001600160a01b0382166000908152600d6020908152604080832093909355600b54600c909152919020555b600554604080516337b87c3960e21b815233600482015290516001600160a01b039092169163dee1f0e491602480820192602092909190829003018186803b1580156114da57600080fd5b505afa1580156114ee573d6000803e3d6000fd5b505050506040513d602081101561150457600080fd5b5051611548576040805162461bcd60e51b815260206004820152600e60248201526d4e6f7420676f7665726e616e636560901b604482015290519081900360640190fd5b6000611553836104b7565b905080156116b5576001600160a01b0383166000818152600d602052604081205561157d90611b1c565b158061160f575061158c6113e0565b6001600160a01b03166330e412ad846040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b1580156115e157600080fd5b505afa1580156115f5573d6000803e3d6000fd5b505050506040513d602081101561160b57600080fd5b5051155b1561167557600654611631906001600160a01b0316848363ffffffff61185d16565b6040805182815290516001600160a01b038516917fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e0486919081900360200190a26116b5565b6040805182815290516001600160a01b038516917f3c053e6b7030f90e85c5a23cdadc6806d9e2fc865df1be2a1261580a1ecd1da9919081900360200190a25b505050565b60006116fc83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611b58565b9392505050565b60008261171257506000610537565b8282028284828161171f57fe5b04146116fc5760405162461bcd60e51b8152600401808060200182810382526021815260200180611f3d6021913960400191505060405180910390fd5b60006116fc83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611bef565b6000828201838110156116fc576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60015461180b908263ffffffff6116ba16565b6001553360009081526002602052604090205461182e908263ffffffff6116ba16565b3360008181526002602052604081209290925590546113dd916001600160a01b03909116908361185d565b3390565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526116b5908490611c54565b60008183106118be57816116fc565b5090919050565b3233146112e257336000818152600e6020526040808220805460ff19166001179055513292917f70da7b97c021a1e9d5c080587a8ecf9eae97ef5f9bc39e1ac9bfc054104e9e0691a3565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261196a908590611c54565b50505050565b816119796112e4565b600b55611984610c6a565b600a556001600160a01b038116156119cb5761199f816104b7565b6001600160a01b0382166000908152600d6020908152604080832093909355600b54600c909152919020555b6119d58383611e0c565b6040805183815290516001600160a01b038516917f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d919081900360200190a2505050565b600154611a2c908263ffffffff61179e16565b60015533600090815260026020526040902054611a4f908263ffffffff61179e16565b3360008181526002602052604081209290925590546113dd916001600160a01b03909116903084611910565b6001600160a01b038116611ac05760405162461bcd60e51b8152600401808060200182810382526026815260200180611ede6026913960400191505060405180910390fd5b6003546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600380546001600160a01b0319166001600160a01b0392909216919091179055565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470818114801590611b5057508115155b949350505050565b60008184841115611be75760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611bac578181015183820152602001611b94565b50505050905090810190601f168015611bd95780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60008183611c3e5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611bac578181015183820152602001611b94565b506000838581611c4a57fe5b0495945050505050565b611c66826001600160a01b0316611b1c565b611cb7576040805162461bcd60e51b815260206004820152601f60248201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604482015290519081900360640190fd5b60006060836001600160a01b0316836040518082805190602001908083835b60208310611cf55780518252601f199092019160209182019101611cd6565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611d57576040519150601f19603f3d011682016040523d82523d6000602084013e611d5c565b606091505b509150915081611db3576040805162461bcd60e51b815260206004820181905260248201527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604482015290519081900360640190fd5b80511561196a57808060200190516020811015611dcf57600080fd5b505161196a5760405162461bcd60e51b815260040180806020018281038252602a815260200180611f7f602a913960400191505060405180910390fd5b600154611e1f908263ffffffff61179e16565b6001556001600160a01b038216600090815260026020526040902054611e4b908263ffffffff61179e16565b6001600160a01b039092166000908152600260205260409020919091555056fe73656e646572206e6565647320746f206265206d6967726174696f6e207374726174656779696d706f737369626c6520666f722075736572206c656761637920736861726520746f2068617665206d6f7265207468616e207468652072656d61696e696e67206c65676163792073686172654f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373746865206e6f746966696564207265776172642063616e6e6f7420696e766f6b65206d756c7469706c69636174696f6e206f766572666c6f77536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7743616c6c6572206973206e6f742072657761726420646973747269627574696f6e5361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a265627a7a723158208cf909d8a08ea4df64acd5c81e37cc9c9eb0edd5dd509c7950b4419b6e982d0b64736f6c63430005100032";