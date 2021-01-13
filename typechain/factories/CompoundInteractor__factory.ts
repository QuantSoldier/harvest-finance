/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { CompoundInteractor } from "../CompoundInteractor";

export class CompoundInteractor__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _underlying: string,
    _ctoken: string,
    _comptroller: string,
    overrides?: Overrides
  ): Promise<CompoundInteractor> {
    return super.deploy(
      _underlying,
      _ctoken,
      _comptroller,
      overrides || {}
    ) as Promise<CompoundInteractor>;
  }
  getDeployTransaction(
    _underlying: string,
    _ctoken: string,
    _comptroller: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _underlying,
      _ctoken,
      _comptroller,
      overrides || {}
    );
  }
  attach(address: string): CompoundInteractor {
    return super.attach(address) as CompoundInteractor;
  }
  connect(signer: Signer): CompoundInteractor__factory {
    return super.connect(signer) as CompoundInteractor__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CompoundInteractor {
    return new Contract(address, _abi, signerOrProvider) as CompoundInteractor;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_underlying",
        type: "address",
      },
      {
        internalType: "address",
        name: "_ctoken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_comptroller",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback",
  },
  {
    constant: true,
    inputs: [],
    name: "_weth",
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
    name: "claimComp",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "comptroller",
    outputs: [
      {
        internalType: "contract ComptrollerInterface",
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
    name: "ctoken",
    outputs: [
      {
        internalType: "contract CompleteCToken",
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
    name: "getLiquidity",
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
    name: "underlying",
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
];

const _bytecode =
  "0x6080604052600180546001600160a01b03191673c02aaa39b223fe8d0a0e5c4f27ead9083c756cc217905534801561003657600080fd5b506040516104b93803806104b98339818101604052606081101561005957600080fd5b50805160208083015160409384015160008054600380546001600160a01b03199081166001600160a01b038087169190911790925560ff199092166001908117610100600160a81b031916610100838a1602179093556002805490921690851617905585518181528087019096529394919390926060929190828101908038833901905050905082816000815181106100ee57fe5b6001600160a01b03928316602091820292909201810191909152600354604051631853304760e31b815260048101838152855160248301528551929094169363c299823893869391928392604490910191858101910280838360005b8381101561016257818101518382015260200161014a565b5050505090500192505050600060405180830381600087803b15801561018757600080fd5b505af115801561019b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405260208110156101c457600080fd5b81019080805160405193929190846401000000008211156101e457600080fd5b9083019060208201858111156101f957600080fd5b825186602082028301116401000000008211171561021657600080fd5b82525081516020918201928201910280838360005b8381101561024357818101518382015260200161022b565b505050509050016040525050505050505050610255806102646000396000f3fe6080604052600436106100555760003560e01c80630910a510146100575780631bd85bdb1461007e5780635fe3b567146100935780636f307dc3146100c4578063a1764595146100d9578063ccf3eb9f146100ee575b005b34801561006357600080fd5b5061006c610103565b60408051918252519081900360200190f35b34801561008a57600080fd5b50610055610179565b34801561009f57600080fd5b506100a86101df565b604080516001600160a01b039092168252519081900360200190f35b3480156100d057600080fd5b506100a86101ee565b3480156100e557600080fd5b506100a8610202565b3480156100fa57600080fd5b506100a8610211565b60025460408051631d8e90d160e11b815290516000926001600160a01b031691633b1d21a2916004808301926020929190829003018186803b15801561014857600080fd5b505afa15801561015c573d6000803e3d6000fd5b505050506040513d602081101561017257600080fd5b5051905090565b600354604080516374d7814960e11b815230600482015290516001600160a01b039092169163e9af02929160248082019260009290919082900301818387803b1580156101c557600080fd5b505af11580156101d9573d6000803e3d6000fd5b50505050565b6003546001600160a01b031681565b60005461010090046001600160a01b031681565b6001546001600160a01b031681565b6002546001600160a01b03168156fea265627a7a72315820f832c2b90b4f54d503cdc373f039dc95ab763a9957e23e99d851ac12bbc78c8964736f6c63430005100032";