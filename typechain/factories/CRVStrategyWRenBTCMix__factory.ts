/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { CRVStrategyWRenBTCMix } from "../CRVStrategyWRenBTCMix";

export class CRVStrategyWRenBTCMix__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _storage: string,
    _wbtc: string,
    _vault: string,
    _tokenIndex: BigNumberish,
    _mixToken: string,
    _curvePool: string,
    _crv: string,
    _weth: string,
    _gauge: string,
    _mintr: string,
    _uniswap: string,
    overrides?: Overrides
  ): Promise<CRVStrategyWRenBTCMix> {
    return super.deploy(
      _storage,
      _wbtc,
      _vault,
      _tokenIndex,
      _mixToken,
      _curvePool,
      _crv,
      _weth,
      _gauge,
      _mintr,
      _uniswap,
      overrides || {}
    ) as Promise<CRVStrategyWRenBTCMix>;
  }
  getDeployTransaction(
    _storage: string,
    _wbtc: string,
    _vault: string,
    _tokenIndex: BigNumberish,
    _mixToken: string,
    _curvePool: string,
    _crv: string,
    _weth: string,
    _gauge: string,
    _mintr: string,
    _uniswap: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _storage,
      _wbtc,
      _vault,
      _tokenIndex,
      _mixToken,
      _curvePool,
      _crv,
      _weth,
      _gauge,
      _mintr,
      _uniswap,
      overrides || {}
    );
  }
  attach(address: string): CRVStrategyWRenBTCMix {
    return super.attach(address) as CRVStrategyWRenBTCMix;
  }
  connect(signer: Signer): CRVStrategyWRenBTCMix__factory {
    return super.connect(signer) as CRVStrategyWRenBTCMix__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CRVStrategyWRenBTCMix {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CRVStrategyWRenBTCMix;
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
        name: "_wbtc",
        type: "address",
      },
      {
        internalType: "address",
        name: "_vault",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenIndex",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_mixToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_curvePool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_crv",
        type: "address",
      },
      {
        internalType: "address",
        name: "_weth",
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
  "0x6080604052600f805460ff1916600117905567a688906bd8b000006010553480156200002a57600080fd5b50604051620022183803806200221883398181016040526101608110156200005157600080fd5b508051602082015160408301516060840151608085015160a086015160c087015160e08801516101008901516101208a0151610140909a0151989997989697959694959394929391929091908a8a81806001600160a01b038116620000fd576040805162461bcd60e51b815260206004820152601e60248201527f6e65772073746f726167652073686f756c646e277420626520656d7074790000604482015290519081900360640190fd5b600080546001600160a01b039283166001600160a01b0319918216179091556003805494831694821694909417909355601e600190815560646002556005805485168f84161790556007805485168d841617905560048054909416918f1691909117909255508991508111156200017057fe5b6004805460ff60a01b1916600160a01b8360018111156200018d57fe5b0217905550600680546001600160a01b03199081166001600160a01b038a811691909117909255600880548216898416179055600a80548216868416179055600c80548216888416908117909155600d80548316858516179055600b805490921685841617909155604080516060810182529182528683166020830152918c16918101919091526200022490600e90600362000287565b50506004546001600160a01b039081166000908152600960205260408082208054600160ff199182168117909255600654851684528284208054821683179055600c54909416835291208054909216179055506200031b98505050505050505050565b828054828255906000526020600020908101928215620002df579160200282015b82811115620002df57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190620002a8565b50620002ed929150620002f1565b5090565b6200031891905b80821115620002ed5780546001600160a01b0319168155600101620002f8565b90565b611eed806200032b6000396000f3fe608060405234801561001057600080fd5b50600436106101795760003560e01c8063a1dab23e116100d9578063c2a2a07b11610087578063c2a2a07b146102f8578063ce8c42e814610300578063d1e61dcb1461031d578063edc9af9514610325578063f03312ff1461032d578063f77c47911461034a578063fbfa77cf1461035257610179565b8063a1dab23e14610294578063a6f19c841461029c578063b076a53a146102a4578063b60f151a146102c3578063ba09591e146102cb578063be85ba33146102e8578063bfd131f1146102f057610179565b8063501859461161013657806350185946146102205780635aa6e675146102465780636a4874a11461024e5780636f307dc3146102565780637165485d1461025e5780639137c1a714610266578063975057e71461028c57610179565b8063026a0dd01461017e5780631113ef52146101985780633cdc5389146101d057806345710074146101f457806345d01e4a146102105780634fa5d85414610218575b600080fd5b61018661035a565b60408051918252519081900360200190f35b6101ce600480360360608110156101ae57600080fd5b506001600160a01b03813581169160208101359091169060400135610360565b005b6101d8610490565b604080516001600160a01b039092168252519081900360200190f35b6101fc61049f565b604080519115158252519081900360200190f35b6101866104a8565b6101ce6105c9565b6101fc6004803603602081101561023657600080fd5b50356001600160a01b031661066a565b6101d861067f565b6101d86106ff565b6101d861070e565b6101d861071d565b6101ce6004803603602081101561027c57600080fd5b50356001600160a01b031661072c565b6101d8610862565b610186610871565b6101d8610877565b6101ce600480360360208110156102ba57600080fd5b50351515610886565b610186610952565b6101ce600480360360208110156102e157600080fd5b5035610958565b6101d8610a16565b6101ce610a25565b6101fc610c30565b6101ce6004803603602081101561031657600080fd5b5035610c35565b6101d8610e59565b6101d8610e68565b6101d86004803603602081101561034357600080fd5b5035610e77565b6101d8610e9e565b6101d8610eed565b60025481565b600054604080516337b87c3960e21b815233600482015290516001600160a01b039092169163dee1f0e491602480820192602092909190829003018186803b1580156103ab57600080fd5b505afa1580156103bf573d6000803e3d6000fd5b505050506040513d60208110156103d557600080fd5b5051610419576040805162461bcd60e51b815260206004820152600e60248201526d4e6f7420676f7665726e616e636560901b604482015290519081900360640190fd5b6001600160a01b03821660009081526009602052604090205460ff16156104715760405162461bcd60e51b8152600401808060200182810382526023815260200180611e156023913960400191505060405180910390fd5b61048b6001600160a01b038316848363ffffffff610efc16565b505050565b6004546001600160a01b031681565b600f5460ff1681565b600a54604080516370a0823160e01b8152306004820152905160009283926001600160a01b03909116916370a0823191602480820192602092909190829003018186803b1580156104f857600080fd5b505afa15801561050c573d6000803e3d6000fd5b505050506040513d602081101561052257600080fd5b5051600754604080516370a0823160e01b815230600482015290519293506000926001600160a01b03909216916370a0823191602480820192602092909190829003018186803b15801561057557600080fd5b505afa158015610589573d6000803e3d6000fd5b505050506040513d602081101561059f57600080fd5b50519050816105b15791506105c69050565b6105c1828263ffffffff610f4e16565b925050505b90565b6005546001600160a01b03163314806105fa57506105e5610e9e565b6001600160a01b0316336001600160a01b0316145b8061061d575061060861067f565b6001600160a01b0316336001600160a01b0316145b6106585760405162461bcd60e51b8152600401808060200182810382526039815260200180611ddc6039913960400191505060405180910390fd5b610660610fb1565b61066861141e565b565b60096020526000908152604090205460ff1681565b60008060009054906101000a90046001600160a01b03166001600160a01b0316635aa6e6756040518163ffffffff1660e01b815260040160206040518083038186803b1580156106ce57600080fd5b505afa1580156106e2573d6000803e3d6000fd5b505050506040513d60208110156106f857600080fd5b5051905090565b600c546001600160a01b031681565b6007546001600160a01b031681565b6008546001600160a01b031681565b600054604080516337b87c3960e21b815233600482015290516001600160a01b039092169163dee1f0e491602480820192602092909190829003018186803b15801561077757600080fd5b505afa15801561078b573d6000803e3d6000fd5b505050506040513d60208110156107a157600080fd5b50516107e5576040805162461bcd60e51b815260206004820152600e60248201526d4e6f7420676f7665726e616e636560901b604482015290519081900360640190fd5b6001600160a01b038116610840576040805162461bcd60e51b815260206004820152601e60248201527f6e65772073746f726167652073686f756c646e277420626520656d7074790000604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031681565b60105481565b600a546001600160a01b031681565b600054604080516337b87c3960e21b815233600482015290516001600160a01b039092169163dee1f0e491602480820192602092909190829003018186803b1580156108d157600080fd5b505afa1580156108e5573d6000803e3d6000fd5b505050506040513d60208110156108fb57600080fd5b505161093f576040805162461bcd60e51b815260206004820152600e60248201526d4e6f7420676f7665726e616e636560901b604482015290519081900360640190fd5b600f805460ff1916911515919091179055565b60015481565b600054604080516337b87c3960e21b815233600482015290516001600160a01b039092169163dee1f0e491602480820192602092909190829003018186803b1580156109a357600080fd5b505afa1580156109b7573d6000803e3d6000fd5b505050506040513d60208110156109cd57600080fd5b5051610a11576040805162461bcd60e51b815260206004820152600e60248201526d4e6f7420676f7665726e616e636560901b604482015290519081900360640190fd5b601055565b6006546001600160a01b031681565b6005546001600160a01b0316331480610a565750610a41610e9e565b6001600160a01b0316336001600160a01b0316145b80610a795750610a6461067f565b6001600160a01b0316336001600160a01b0316145b610ab45760405162461bcd60e51b8152600401808060200182810382526039815260200180611ddc6039913960400191505060405180910390fd5b600a54604080516370a0823160e01b815230600482015290516001600160a01b0390921691632e1a7d4d9183916370a0823191602480820192602092909190829003018186803b158015610b0757600080fd5b505afa158015610b1b573d6000803e3d6000fd5b505050506040513d6020811015610b3157600080fd5b5051604080516001600160e01b031960e085901b168152600481019290925251602480830192600092919082900301818387803b158015610b7157600080fd5b505af1158015610b85573d6000803e3d6000fd5b5050600754604080516370a0823160e01b81523060048201529051600094506001600160a01b0390921692506370a08231916024808301926020929190829003018186803b158015610bd657600080fd5b505afa158015610bea573d6000803e3d6000fd5b505050506040513d6020811015610c0057600080fd5b505190508015610c2d57600554600754610c2d916001600160a01b0391821691168363ffffffff610efc16565b50565b600190565b6005546001600160a01b0316331480610c665750610c51610e9e565b6001600160a01b0316336001600160a01b0316145b80610c895750610c7461067f565b6001600160a01b0316336001600160a01b0316145b610cc45760405162461bcd60e51b8152600401808060200182810382526039815260200180611ddc6039913960400191505060405180910390fd5b600a54604080516370a0823160e01b815230600482015290516001600160a01b0390921691632e1a7d4d9183916370a0823191602480820192602092909190829003018186803b158015610d1757600080fd5b505afa158015610d2b573d6000803e3d6000fd5b505050506040513d6020811015610d4157600080fd5b5051604080516001600160e01b031960e085901b168152600481019290925251602480830192600092919082900301818387803b158015610d8157600080fd5b505af1158015610d95573d6000803e3d6000fd5b5050600754604080516370a0823160e01b81523060048201529051600094506001600160a01b0390921692506370a08231916024808301926020929190829003018186803b158015610de657600080fd5b505afa158015610dfa573d6000803e3d6000fd5b505050506040513d6020811015610e1057600080fd5b505190508015610e4d57600554610e4d906001600160a01b0316610e34848461154c565b6007546001600160a01b0316919063ffffffff610efc16565b610e5561141e565b5050565b600b546001600160a01b031681565b600d546001600160a01b031681565b600e8181548110610e8457fe5b6000918252602090912001546001600160a01b0316905081565b60008060009054906101000a90046001600160a01b03166001600160a01b031663f77c47916040518163ffffffff1660e01b815260040160206040518083038186803b1580156106ce57600080fd5b6005546001600160a01b031681565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261048b908490611562565b600082820183811015610fa8576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b90505b92915050565b600f5460ff16610fe9576040517f444bcec8acce9dc46755761662d6262a490b9f61cca73243c5131d98df078ce390600090a1610668565b600b54600a54604080516335313c2160e11b81526001600160a01b03928316600482015290519190921691636a62784291602480830192600092919082900301818387803b15801561103a57600080fd5b505af115801561104e573d6000803e3d6000fd5b5050600c54604080516370a0823160e01b81523060048201529051600094506001600160a01b0390921692506370a08231916024808301926020929190829003018186803b15801561109f57600080fd5b505afa1580156110b3573d6000803e3d6000fd5b505050506040513d60208110156110c957600080fd5b50516010549091508111156113e8576040805182815290517f875c79c14f0ec82c9ae01b82cfab0d1c5c4079f1500682832fb877a7dec614fb9181900360200190a160048054604080516370a0823160e01b81523093810193909352516000926001600160a01b03909216916370a08231916024808301926020929190829003018186803b15801561115a57600080fd5b505afa15801561116e573d6000803e3d6000fd5b505050506040513d602081101561118457600080fd5b5051600d54600c549192506111ad916001600160a01b039081169116600063ffffffff61172016565b600d54600c546111d0916001600160a01b0391821691168463ffffffff61172016565b600d546040516338ed173960e01b8152600481018481526001602483018190523060648401819052426084850181905260a060448601908152600e805460a488018190526001600160a01b03909816976338ed1739978b97929594939160c4909101908690801561126a57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161124c575b50509650505050505050600060405180830381600087803b15801561128e57600080fd5b505af11580156112a2573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405260208110156112cb57600080fd5b81019080805160405193929190846401000000008211156112eb57600080fd5b90830190602082018581111561130057600080fd5b825186602082028301116401000000008211171561131d57600080fd5b82525081516020918201928201910280838360005b8381101561134a578181015183820152602001611332565b50505050919091016040818152600480546370a0823160e01b8452309184019190915290516113da97508896506001600160a01b0390911694506370a08231935060248083019350602092829003018186803b1580156113a957600080fd5b505afa1580156113bd573d6000803e3d6000fd5b505050506040513d60208110156113d357600080fd5b5051611833565b6113e26119d2565b50610c2d565b6040805182815290517f56cd5c162f2d05345e02b24951c7627411fdfeba5c92af8ff4c95c57a3957e7e9181900360200190a150565b600754604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561146957600080fd5b505afa15801561147d573d6000803e3d6000fd5b505050506040513d602081101561149357600080fd5b505190508015610c2d57600a546007546114c1916001600160a01b039182169116600063ffffffff61172016565b600a546007546114e4916001600160a01b0391821691168363ffffffff61172016565b600a546040805163b6b55f2560e01b81526004810184905290516001600160a01b039092169163b6b55f259160248082019260009290919082900301818387803b15801561153157600080fd5b505af1158015611545573d6000803e3d6000fd5b5050505050565b600081831061155b5781610fa8565b5090919050565b611574826001600160a01b0316611b49565b6115c5576040805162461bcd60e51b815260206004820152601f60248201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604482015290519081900360640190fd5b60006060836001600160a01b0316836040518082805190602001908083835b602083106116035780518252601f1990920191602091820191016115e4565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611665576040519150601f19603f3d011682016040523d82523d6000602084013e61166a565b606091505b5091509150816116c1576040805162461bcd60e51b815260206004820181905260248201527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604482015290519081900360640190fd5b80511561171a578080602001905160208110156116dd57600080fd5b505161171a5760405162461bcd60e51b815260040180806020018281038252602a815260200180611e59602a913960400191505060405180910390fd5b50505050565b8015806117a6575060408051636eb1769f60e11b81523060048201526001600160a01b03848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b15801561177857600080fd5b505afa15801561178c573d6000803e3d6000fd5b505050506040513d60208110156117a257600080fd5b5051155b6117e15760405162461bcd60e51b8152600401808060200182810382526036815260200180611e836036913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b17905261048b908490611562565b8181111561198857600061184d828463ffffffff611b8516565b9050600061187860025461186c60015485611bc790919063ffffffff16565b9063ffffffff611c2016565b604080518681526020810186905280820183905242606082015290519192507f0b34b93979d93253da0e9e54841c680c66377f129a340ef2a37e802865e40588919081900360800190a16118e76118cd610e9e565b6003546001600160a01b031690600063ffffffff61172016565b61190b6118f2610e9e565b6003546001600160a01b0316908363ffffffff61172016565b611913610e9e565b60035460408051631ee0d7e560e31b81526001600160a01b039283166004820152602481018590529051929091169163f706bf289160448082019260009290919082900301818387803b15801561196957600080fd5b505af115801561197d573d6000803e3d6000fd5b505050505050610e55565b604080518381526020810183905260008183015242606082015290517f0b34b93979d93253da0e9e54841c680c66377f129a340ef2a37e802865e405889181900360800190a15050565b60048054604080516370a0823160e01b81523093810193909352516000926001600160a01b03909216916370a08231916024808301926020929190829003018186803b158015611a2157600080fd5b505afa158015611a35573d6000803e3d6000fd5b505050506040513d6020811015611a4b57600080fd5b505190508015610c2d57600854600454611a79916001600160a01b039182169116600063ffffffff61172016565b600854600454611a9c916001600160a01b0391821691168363ffffffff61172016565b6000611aa6611dbd565b611aaf83611c62565b60085460408051630b4c7e4d60e01b81529293506001600160a01b0390911691630b4c7e4d91849186916004909101908190849080838360005b83811015611b01578181015183820152602001611ae9565b5050505090500182815260200192505050600060405180830381600087803b158015611b2c57600080fd5b505af1158015611b40573d6000803e3d6000fd5b50505050505050565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470818114801590611b7d57508115155b949350505050565b6000610fa883836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611cc1565b600082611bd657506000610fab565b82820282848281611be357fe5b0414610fa85760405162461bcd60e51b8152600401808060200182810382526021815260200180611e386021913960400191505060405180910390fd5b6000610fa883836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611d58565b611c6a611dbd565b611c72611dbd565b50604080518082019091526000808252602082015260045483908290600160a01b900460ff166001811115611ca357fe5b66ffffffffffffff1660028110611cb657fe5b602002015292915050565b60008184841115611d505760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611d15578181015183820152602001611cfd565b50505050905090810190601f168015611d425780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60008183611da75760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611d15578181015183820152602001611cfd565b506000838581611db357fe5b0495945050505050565b6040518060400160405280600290602082028038833950919291505056fe5468652073656e6465722068617320746f2062652074686520636f6e74726f6c6c65722c20676f7665726e616e63652c206f72207661756c74746f6b656e20697320646566696e6564206173206e6f742073616c7661676561626c65536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e6365a265627a7a72315820c0c4e3c541ae03a4f59d87b122274dda085b3856ff4e8b3d092174243fded79764736f6c63430005100032";