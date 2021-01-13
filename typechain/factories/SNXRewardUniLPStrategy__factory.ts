/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { SNXRewardUniLPStrategy } from "../SNXRewardUniLPStrategy";

export class SNXRewardUniLPStrategy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _storage: string,
    _underlying: string,
    _vault: string,
    _rewardPool: string,
    _rewardToken: string,
    overrides?: Overrides
  ): Promise<SNXRewardUniLPStrategy> {
    return super.deploy(
      _storage,
      _underlying,
      _vault,
      _rewardPool,
      _rewardToken,
      overrides || {}
    ) as Promise<SNXRewardUniLPStrategy>;
  }
  getDeployTransaction(
    _storage: string,
    _underlying: string,
    _vault: string,
    _rewardPool: string,
    _rewardToken: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _storage,
      _underlying,
      _vault,
      _rewardPool,
      _rewardToken,
      overrides || {}
    );
  }
  attach(address: string): SNXRewardUniLPStrategy {
    return super.attach(address) as SNXRewardUniLPStrategy;
  }
  connect(signer: Signer): SNXRewardUniLPStrategy__factory {
    return super.connect(signer) as SNXRewardUniLPStrategy__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SNXRewardUniLPStrategy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SNXRewardUniLPStrategy;
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
        name: "_underlying",
        type: "address",
      },
      {
        internalType: "address",
        name: "_vault",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rewardPool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rewardToken",
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
    constant: false,
    inputs: [],
    name: "continueInvesting",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
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
    constant: false,
    inputs: [],
    name: "emergencyExit",
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
    name: "rewardPool",
    outputs: [
      {
        internalType: "contract SNXRewardInterface",
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
        internalType: "address[]",
        name: "_uniswapRouteToToken0",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_uniswapRouteToToken1",
        type: "address[]",
      },
    ],
    name: "setLiquidationPaths",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
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
        internalType: "contract ERC20Detailed",
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
    name: "uniLPComponentToken0",
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
    name: "uniLPComponentToken1",
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
    name: "uniswapRouterV2",
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uniswapRoutes",
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
        name: "amount",
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
  "0x60806040526007805460ff60a01b1990811690915560098054909116600160a01b179055678ac7230489e80000600a553480156200003c57600080fd5b5060405162002bc738038062002bc7833981810160405260a08110156200006257600080fd5b50805160208201516040830151606084015160809094015192939192909190848181806001600160a01b038116620000e1576040805162461bcd60e51b815260206004820152601e60248201527f6e65772073746f726167652073686f756c646e277420626520656d7074790000604482015290519081900360640190fd5b600080546001600160a01b039283166001600160a01b0319918216179091556003805494831694821694909417909355601e600155606460025560048054841689831617808255600780549095168984161790945560408051630dfe168160e01b81529051949092169450630dfe1681938282019350602092909190829003018186803b1580156200017257600080fd5b505afa15801562000187573d6000803e3d6000fd5b505050506040513d60208110156200019e57600080fd5b5051600580546001600160a01b0319166001600160a01b03928316179055600480546040805163d21220a760e01b81529051919093169263d21220a79281810192602092909190829003018186803b158015620001fa57600080fd5b505afa1580156200020f573d6000803e3d6000fd5b505050506040513d60208110156200022657600080fd5b5051600680546001600160a01b039283166001600160a01b03199182161790915560088054948316948216949094179093556009805492821692909316821790925592166000908152600c6020526040808220805460ff1990811660019081179092559483529120805490931617909155505061291e80620002a96000396000f3fe608060405234801561001057600080fd5b50600436106101835760003560e01c80636f307dc3116100d9578063bfd131f111610087578063bfd131f114610449578063c2a2a07b14610451578063ce8c42e814610459578063db62048514610476578063f77c47911461047e578063f7c618c114610486578063fbfa77cf1461048e57610183565b80636f307dc3146103c75780639137c1a7146103cf578063975057e7146103f5578063a1dab23e146103fd578063b076a53a14610405578063b60f151a14610424578063ba09591e1461042c57610183565b80635018594611610136578063501859461461025657806353cfd7f61461027c5780635641ec0314610284578063596fa9e31461028c5780635aa6e6751461029457806366666aa91461029c5780636a5b061e146102a457610183565b8062b70eb714610188578063026a0dd0146101d05780630b144226146101ea5780631113ef52146101f2578063457100741461022a57806345d01e4a146102465780634fa5d8541461024e575b600080fd5b6101b46004803603604081101561019e57600080fd5b506001600160a01b038135169060200135610496565b604080516001600160a01b039092168252519081900360200190f35b6101d86104cb565b60408051918252519081900360200190f35b6101b46104d1565b6102286004803603606081101561020857600080fd5b506001600160a01b038135811691602081013590911690604001356104e0565b005b610232610687565b604080519115158252519081900360200190f35b6101d8610697565b61022861082e565b6102326004803603602081101561026c57600080fd5b50356001600160a01b0316610980565b6101b4610995565b6102286109a4565b6101b4610ada565b6101b4610af2565b6101b4610b72565b610228600480360360408110156102ba57600080fd5b810190602081018135600160201b8111156102d457600080fd5b8201836020820111156102e657600080fd5b803590602001918460208302840111600160201b8311171561030757600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561035657600080fd5b82018360208201111561036857600080fd5b803590602001918460208302840111600160201b8311171561038957600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610b81945050505050565b6101b4610c91565b610228600480360360208110156103e557600080fd5b50356001600160a01b0316610ca0565b6101b4610dd6565b6101d8610de5565b6102286004803603602081101561041b57600080fd5b50351515610deb565b6101d8610ec2565b6102286004803603602081101561044257600080fd5b5035610ec8565b610228610f86565b610232611132565b6102286004803603602081101561046f57600080fd5b5035611137565b6102286113d1565b6101b4611499565b6101b46114e8565b6101b46114f7565b600b60205281600052604060002081815481106104af57fe5b6000918252602090912001546001600160a01b03169150829050565b60025481565b6006546001600160a01b031681565b6000546040805163b429afeb60e01b815233600482015290516001600160a01b039092169163b429afeb91602480820192602092909190829003018186803b15801561052b57600080fd5b505afa15801561053f573d6000803e3d6000fd5b505050506040513d602081101561055557600080fd5b5051806105d55750600054604080516337b87c3960e21b815233600482015290516001600160a01b039092169163dee1f0e491602480820192602092909190829003018186803b1580156105a857600080fd5b505afa1580156105bc573d6000803e3d6000fd5b505050506040513d60208110156105d257600080fd5b50515b6106105760405162461bcd60e51b815260040180806020018281038252602b8152602001806127af602b913960400191505060405180910390fd5b6001600160a01b0382166000908152600c602052604090205460ff16156106685760405162461bcd60e51b81526004018080602001828103825260228152602001806127da6022913960400191505060405180910390fd5b6106826001600160a01b038316848363ffffffff61150616565b505050565b600954600160a01b900460ff1681565b6008546000906001600160a01b03166107295760048054604080516370a0823160e01b81523093810193909352516001600160a01b03909116916370a08231916024808301926020929190829003018186803b1580156106f657600080fd5b505afa15801561070a573d6000803e3d6000fd5b505050506040513d602081101561072057600080fd5b5051905061082b565b60048054604080516370a0823160e01b8152309381019390935251610828926001600160a01b03909216916370a08231916024808301926020929190829003018186803b15801561077957600080fd5b505afa15801561078d573d6000803e3d6000fd5b505050506040513d60208110156107a357600080fd5b5051600854604080516370a0823160e01b815230600482015290516001600160a01b03909216916370a0823191602480820192602092909190829003018186803b1580156107f057600080fd5b505afa158015610804573d6000803e3d6000fd5b505050506040513d602081101561081a57600080fd5b50519063ffffffff61155816565b90505b90565b600754600160a01b900460ff16156108775760405162461bcd60e51b81526004018080602001828103825260348152602001806128b66034913960400191505060405180910390fd5b6007546001600160a01b03163314806108a85750610893611499565b6001600160a01b0316336001600160a01b0316145b806108cb57506108b6610af2565b6001600160a01b0316336001600160a01b0316145b6109065760405162461bcd60e51b81526004018080602001828103825260398152602001806127fc6039913960400191505060405180910390fd5b600860009054906101000a90046001600160a01b03166001600160a01b0316633d18b9126040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561095657600080fd5b505af115801561096a573d6000803e3d6000fd5b505050506109766115bb565b61097e611e12565b565b600c6020526000908152604090205460ff1681565b6005546001600160a01b031681565b600054604080516337b87c3960e21b815233600482015290516001600160a01b039092169163dee1f0e491602480820192602092909190829003018186803b1580156109ef57600080fd5b505afa158015610a03573d6000803e3d6000fd5b505050506040513d6020811015610a1957600080fd5b5051610a5d576040805162461bcd60e51b815260206004820152600e60248201526d4e6f7420676f7665726e616e636560901b604482015290519081900360640190fd5b600860009054906101000a90046001600160a01b03166001600160a01b031663e9fad8ee6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610aad57600080fd5b505af1158015610ac1573d6000803e3d6000fd5b50506007805460ff60a01b1916600160a01b1790555050565b737a250d5630b4cf539739df2c5dacb4c659f2488d81565b60008060009054906101000a90046001600160a01b03166001600160a01b0316635aa6e6756040518163ffffffff1660e01b815260040160206040518083038186803b158015610b4157600080fd5b505afa158015610b55573d6000803e3d6000fd5b505050506040513d6020811015610b6b57600080fd5b5051905090565b6008546001600160a01b031681565b600054604080516337b87c3960e21b815233600482015290516001600160a01b039092169163dee1f0e491602480820192602092909190829003018186803b158015610bcc57600080fd5b505afa158015610be0573d6000803e3d6000fd5b505050506040513d6020811015610bf657600080fd5b5051610c3a576040805162461bcd60e51b815260206004820152600e60248201526d4e6f7420676f7665726e616e636560901b604482015290519081900360640190fd5b6005546001600160a01b03166000908152600b602090815260409091208351610c6592850190612725565b506006546001600160a01b03166000908152600b60209081526040909120825161068292840190612725565b6004546001600160a01b031681565b600054604080516337b87c3960e21b815233600482015290516001600160a01b039092169163dee1f0e491602480820192602092909190829003018186803b158015610ceb57600080fd5b505afa158015610cff573d6000803e3d6000fd5b505050506040513d6020811015610d1557600080fd5b5051610d59576040805162461bcd60e51b815260206004820152600e60248201526d4e6f7420676f7665726e616e636560901b604482015290519081900360640190fd5b6001600160a01b038116610db4576040805162461bcd60e51b815260206004820152601e60248201527f6e65772073746f726167652073686f756c646e277420626520656d7074790000604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031681565b600a5481565b600054604080516337b87c3960e21b815233600482015290516001600160a01b039092169163dee1f0e491602480820192602092909190829003018186803b158015610e3657600080fd5b505afa158015610e4a573d6000803e3d6000fd5b505050506040513d6020811015610e6057600080fd5b5051610ea4576040805162461bcd60e51b815260206004820152600e60248201526d4e6f7420676f7665726e616e636560901b604482015290519081900360640190fd5b60098054911515600160a01b0260ff60a01b19909216919091179055565b60015481565b600054604080516337b87c3960e21b815233600482015290516001600160a01b039092169163dee1f0e491602480820192602092909190829003018186803b158015610f1357600080fd5b505afa158015610f27573d6000803e3d6000fd5b505050506040513d6020811015610f3d57600080fd5b5051610f81576040805162461bcd60e51b815260206004820152600e60248201526d4e6f7420676f7665726e616e636560901b604482015290519081900360640190fd5b600a55565b6007546001600160a01b0316331480610fb75750610fa2611499565b6001600160a01b0316336001600160a01b0316145b80610fda5750610fc5610af2565b6001600160a01b0316336001600160a01b0316145b6110155760405162461bcd60e51b81526004018080602001828103825260398152602001806127fc6039913960400191505060405180910390fd5b6008546001600160a01b03161561108f57600860009054906101000a90046001600160a01b03166001600160a01b031663e9fad8ee6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561107657600080fd5b505af115801561108a573d6000803e3d6000fd5b505050505b6110976115bb565b60075460048054604080516370a0823160e01b815230938101939093525161097e936001600160a01b03908116939216916370a08231916024808301926020929190829003018186803b1580156110ed57600080fd5b505afa158015611101573d6000803e3d6000fd5b505050506040513d602081101561111757600080fd5b50516004546001600160a01b0316919063ffffffff61150616565b600190565b6007546001600160a01b03163314806111685750611153611499565b6001600160a01b0316336001600160a01b0316145b8061118b5750611176610af2565b6001600160a01b0316336001600160a01b0316145b6111c65760405162461bcd60e51b81526004018080602001828103825260398152602001806127fc6039913960400191505060405180910390fd5b60048054604080516370a0823160e01b81523093810193909352516001600160a01b03909116916370a08231916024808301926020929190829003018186803b15801561121257600080fd5b505afa158015611226573d6000803e3d6000fd5b505050506040513d602081101561123c57600080fd5b50518111156113ab5760048054604080516370a0823160e01b81523093810193909352516000926112d0926001600160a01b0316916370a0823191602480820192602092909190829003018186803b15801561129757600080fd5b505afa1580156112ab573d6000803e3d6000fd5b505050506040513d60208110156112c157600080fd5b5051839063ffffffff6120bb16565b600854604080516370a0823160e01b815230600482015290519293506001600160a01b0390911691632e1a7d4d9161135b9184916370a08231916024808301926020929190829003018186803b15801561132957600080fd5b505afa15801561133d573d6000803e3d6000fd5b505050506040513d602081101561135357600080fd5b5051846120fd565b6040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561139157600080fd5b505af11580156113a5573d6000803e3d6000fd5b50505050505b6007546004546113ce916001600160a01b0391821691168363ffffffff61150616565b50565b600054604080516337b87c3960e21b815233600482015290516001600160a01b039092169163dee1f0e491602480820192602092909190829003018186803b15801561141c57600080fd5b505afa158015611430573d6000803e3d6000fd5b505050506040513d602081101561144657600080fd5b505161148a576040805162461bcd60e51b815260206004820152600e60248201526d4e6f7420676f7665726e616e636560901b604482015290519081900360640190fd5b6007805460ff60a01b19169055565b60008060009054906101000a90046001600160a01b03166001600160a01b031663f77c47916040518163ffffffff1660e01b815260040160206040518083038186803b158015610b4157600080fd5b6009546001600160a01b031681565b6007546001600160a01b031681565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610682908490612113565b6000828201838110156115b2576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b90505b92915050565b600954604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561160657600080fd5b505afa15801561161a573d6000803e3d6000fd5b505050506040513d602081101561163057600080fd5b5051600954909150600160a01b900460ff16158061164f5750600a5481105b15611683576040517f444bcec8acce9dc46755761662d6262a490b9f61cca73243c5131d98df078ce390600090a15061097e565b61168c816122cb565b600954604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b1580156116d757600080fd5b505afa1580156116eb573d6000803e3d6000fd5b505050506040513d602081101561170157600080fd5b50519050801580159061172e57506005546001600160a01b03166000908152600b60205260409020546001105b801561175457506006546001600160a01b03166000908152600b60205260409020546001105b15611e0e5760095460019061178e906001600160a01b0316737a250d5630b4cf539739df2c5dacb4c659f2488d600063ffffffff61244416565b6009546117bf906001600160a01b0316737a250d5630b4cf539739df2c5dacb4c659f2488d8463ffffffff61244416565b6005546001600160a01b03166000908152600b60205260409081902090516338ed173960e01b81526002840460048201818152602483018590523060648401819052426084850181905260a060448601908152865460a48701819052737a250d5630b4cf539739df2c5dacb4c659f2488d976338ed1739978a9691959493919260c4909101908690801561187c57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161185e575b50509650505050505050600060405180830381600087803b1580156118a057600080fd5b505af11580156118b4573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405260208110156118dd57600080fd5b8101908080516040519392919084600160201b8211156118fc57600080fd5b90830190602082018581111561191157600080fd5b82518660208202830111600160201b8211171561192d57600080fd5b82525081516020918201928201910280838360005b8381101561195a578181015183820152602001611942565b505050509190910160408181526005546370a0823160e01b83523060048401529051600097506001600160a01b0390911695506370a08231945060248083019450602093509091829003018186803b1580156119b557600080fd5b505afa1580156119c9573d6000803e3d6000fd5b505050506040513d60208110156119df57600080fd5b5051600954604080516370a0823160e01b815230600482015290519293506001600160a01b03909116916370a0823191602480820192602092909190829003018186803b158015611a2f57600080fd5b505afa158015611a43573d6000803e3d6000fd5b505050506040513d6020811015611a5957600080fd5b50516006546001600160a01b03166000908152600b60205260409081902090516338ed173960e01b815260048101838152602482018690523060648301819052426084840181905260a060448501908152855460a48601819052969950737a250d5630b4cf539739df2c5dacb4c659f2488d966338ed1739968b968b9691959493919260c49091019086908015611b1957602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611afb575b50509650505050505050600060405180830381600087803b158015611b3d57600080fd5b505af1158015611b51573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526020811015611b7a57600080fd5b8101908080516040519392919084600160201b821115611b9957600080fd5b908301906020820185811115611bae57600080fd5b82518660208202830111600160201b82111715611bca57600080fd5b82525081516020918201928201910280838360005b83811015611bf7578181015183820152602001611bdf565b505050509190910160408181526006546370a0823160e01b83523060048401529051600097506001600160a01b0390911695506370a08231945060248083019450602093509091829003018186803b158015611c5257600080fd5b505afa158015611c66573d6000803e3d6000fd5b505050506040513d6020811015611c7c57600080fd5b5051600554909150611cb3906001600160a01b0316737a250d5630b4cf539739df2c5dacb4c659f2488d600063ffffffff61244416565b600554611ce4906001600160a01b0316737a250d5630b4cf539739df2c5dacb4c659f2488d8463ffffffff61244416565b600654611d16906001600160a01b0316737a250d5630b4cf539739df2c5dacb4c659f2488d600063ffffffff61244416565b600654611d47906001600160a01b0316737a250d5630b4cf539739df2c5dacb4c659f2488d8363ffffffff61244416565b6005546006546040805162e8e33760e81b81526001600160a01b039384166004820152929091166024830152604482018490526064820183905260016084830181905260a48301523060c48301524260e483015251600091737a250d5630b4cf539739df2c5dacb4c659f2488d9163e8e33700916101048082019260609290919082900301818787803b158015611ddd57600080fd5b505af1158015611df1573d6000803e3d6000fd5b505050506040513d6060811015611e0757600080fd5b5050505050505b5050565b600754600160a01b900460ff1615611e5b5760405162461bcd60e51b81526004018080602001828103825260348152602001806128b66034913960400191505060405180910390fd5b60048054604080516370a0823160e01b81523093810193909352516000926001600160a01b03909216916370a08231916024808301926020929190829003018186803b158015611eaa57600080fd5b505afa158015611ebe573d6000803e3d6000fd5b505050506040513d6020811015611ed457600080fd5b5051111561097e5760048054600854604080516370a0823160e01b81523094810194909452516001600160a01b039283169363095ea7b3939092169184916370a0823191602480820192602092909190829003018186803b158015611f3857600080fd5b505afa158015611f4c573d6000803e3d6000fd5b505050506040513d6020811015611f6257600080fd5b5051604080516001600160e01b031960e086901b1681526001600160a01b03909316600484015260248301919091525160448083019260209291908290030181600087803b158015611fb357600080fd5b505af1158015611fc7573d6000803e3d6000fd5b505050506040513d6020811015611fdd57600080fd5b505060085460048054604080516370a0823160e01b81523093810193909352516001600160a01b039384169363a694fc3a939216916370a08231916024808301926020929190829003018186803b15801561203757600080fd5b505afa15801561204b573d6000803e3d6000fd5b505050506040513d602081101561206157600080fd5b5051604080516001600160e01b031960e085901b168152600481019290925251602480830192600092919082900301818387803b1580156120a157600080fd5b505af11580156120b5573d6000803e3d6000fd5b50505050565b60006115b283836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612557565b600081831061210c57816115b2565b5090919050565b612125826001600160a01b03166125ee565b612176576040805162461bcd60e51b815260206004820152601f60248201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604482015290519081900360640190fd5b60006060836001600160a01b0316836040518082805190602001908083835b602083106121b45780518252601f199092019160209182019101612195565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114612216576040519150601f19603f3d011682016040523d82523d6000602084013e61221b565b606091505b509150915081612272576040805162461bcd60e51b815260206004820181905260248201527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604482015290519081900360640190fd5b8051156120b55780806020019051602081101561228e57600080fd5b50516120b55760405162461bcd60e51b815260040180806020018281038252602a815260200180612856602a913960400191505060405180910390fd5b80156124025760006122fa6002546122ee6001548561262a90919063ffffffff16565b9063ffffffff61268316565b6040805184815260208101839052428183015290519192507f33fd2845a0f10293482de360244dd4ad31ddbb4b8c4a1ded3875cf8ebfba184b919081900360600190a1612362612348611499565b6003546001600160a01b031690600063ffffffff61244416565b61238661236d611499565b6003546001600160a01b0316908363ffffffff61244416565b61238e611499565b60035460408051631ee0d7e560e31b81526001600160a01b039283166004820152602481018590529051929091169163f706bf289160448082019260009290919082900301818387803b1580156123e457600080fd5b505af11580156123f8573d6000803e3d6000fd5b50505050506113ce565b6040805160008082526020820152428183015290517f33fd2845a0f10293482de360244dd4ad31ddbb4b8c4a1ded3875cf8ebfba184b9181900360600190a150565b8015806124ca575060408051636eb1769f60e11b81523060048201526001600160a01b03848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b15801561249c57600080fd5b505afa1580156124b0573d6000803e3d6000fd5b505050506040513d60208110156124c657600080fd5b5051155b6125055760405162461bcd60e51b81526004018080602001828103825260368152602001806128806036913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052610682908490612113565b600081848411156125e65760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156125ab578181015183820152602001612593565b50505050905090810190601f1680156125d85780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081811480159061262257508115155b949350505050565b600082612639575060006115b5565b8282028284828161264657fe5b04146115b25760405162461bcd60e51b81526004018080602001828103825260218152602001806128356021913960400191505060405180910390fd5b60006115b283836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506000818361270f5760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156125ab578181015183820152602001612593565b50600083858161271b57fe5b0495945050505050565b82805482825590600052602060002090810192821561277a579160200282015b8281111561277a57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190612745565b5061278692915061278a565b5090565b61082b91905b808211156127865780546001600160a01b031916815560010161279056fe5468652063616c6c6572206d75737420626520636f6e74726f6c6c6572206f7220676f7665726e616e6365746f6b656e20697320646566696e6564206173206e6f742073616c76616761626c655468652073656e6465722068617320746f2062652074686520636f6e74726f6c6c65722c20676f7665726e616e63652c206f72207661756c74536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e6365416374696f6e20626c6f636b65642061732074686520737472617465677920697320696e20656d657267656e6379207374617465a265627a7a72315820393e21befcdecffdfe2913242b78f133c197307d457d3051578e1ecf1130d9ba64736f6c63430005100032";
