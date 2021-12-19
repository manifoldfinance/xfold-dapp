/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { DOMODAO as DictatorDAO } from "./DictatorDAO";

export class DictatorDAOFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    sharesSymbol: string,
    sharesName: string,
    token_: string,
    initialOperator: string,
    overrides?: Overrides
  ): Promise<DictatorDAO> {
    return super.deploy(
      sharesSymbol,
      sharesName,
      token_,
      initialOperator,
      overrides || {}
    ) as Promise<DictatorDAO>;
  }
  getDeployTransaction(
    sharesSymbol: string,
    sharesName: string,
    token_: string,
    initialOperator: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      sharesSymbol,
      sharesName,
      token_,
      initialOperator,
      overrides || {}
    );
  }
  attach(address: string): DictatorDAO {
    return super.attach(address) as DictatorDAO;
  }
  connect(signer: Signer): DictatorDAOFactory {
    return super.connect(signer) as DictatorDAOFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DictatorDAO {
    return new Contract(address, _abi, signerOrProvider) as DictatorDAO;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "sharesSymbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "sharesName",
        type: "string",
      },
      {
        internalType: "contract IERC20",
        name: "token_",
        type: "address",
      },
      {
        internalType: "address",
        name: "initialOperator",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "CancelTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "ExecuteTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "QueueTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DELAY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GRACE_PERIOD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "cancelTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "executeTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "operatorVote",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "operator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOperator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOperatorTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "queueTransaction",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "queuedTransactions",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOperator",
        type: "address",
      },
    ],
    name: "setOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userVote",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "uint128",
        name: "balance",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "lockedUntil",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operatorVote",
        type: "address",
      },
    ],
    name: "vote",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "votes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b506040516200246238038062002462833981016040819052620000349162000249565b4660a08190526200004581620000b0565b6080525083516200005e90600090602087019062000106565b5082516200007490600190602086019062000106565b5060609190911b6001600160601b03191660c052600380546001600160a01b0319166001600160a01b0390921691909117905550620003129050565b60007f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a794692188230604051602001620000e993929190620002da565b604051602081830303815290604052805190602001209050919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200014957805160ff191683800117855562000179565b8280016001018555821562000179579182015b82811115620001795782518255916020019190600101906200015c565b50620001879291506200018b565b5090565b5b808211156200018757600081556001016200018c565b600082601f830112620001b3578081fd5b81516001600160401b0380821115620001ca578283fd5b6040516020601f8401601f1916820181018381118382101715620001ec578586fd5b806040525081945083825286818588010111156200020957600080fd5b600092505b838310156200022d57858301810151828401820152918201916200020e565b838311156200023f5760008185840101525b5050505092915050565b600080600080608085870312156200025f578384fd5b84516001600160401b038082111562000276578586fd5b6200028488838901620001a2565b955060208701519150808211156200029a578485fd5b50620002a987828801620001a2565b9350506040850151620002bc81620002f9565b6060860151909250620002cf81620002f9565b939692955090935050565b92835260208301919091526001600160a01b0316604082015260600190565b6001600160a01b03811681146200030f57600080fd5b50565b60805160a05160c05160601c61210c6200035660003980610b195280610d0352806112ad52806116ad52806117df52508061158f5250806115c4525061210c6000f3fe6080604052600436106101cd5760003560e01c806395d89b41116100f7578063d505accf11610095578063ec60bcf311610064578063ec60bcf3146104f1578063f2b0653714610511578063f5ba1c8714610531578063fc0c546a14610551576101cd565b8063d505accf14610471578063d8bff5a514610491578063dd62ed3e146104b1578063e37c9fd5146104d1576101cd565b8063a9059cbb116100d1578063a9059cbb14610405578063ac7e534e14610425578063b3ab15fb1461043a578063c1a287e21461045c576101cd565b806395d89b41146103a25780639dc29fac146103b7578063a87430ba146103d7576101cd565b80634881636d1161016f57806370a082311161013e57806370a08231146103225780637ecebe001461034257806380b3b0991461036257806394bf804d14610382576101cd565b80634881636d146102b6578063570ca735146102cb57806369b41170146102ed5780636dd7d8ea14610302576101cd565b806323b872dd116101ab57806323b872dd1461024c578063313ce5671461026c5780633644e5151461028e5780633f579f42146102a3576101cd565b806306fdde03146101d2578063095ea7b3146101fd57806318160ddd1461022a575b600080fd5b3480156101de57600080fd5b506101e7610566565b6040516101f49190611d6a565b60405180910390f35b34801561020957600080fd5b5061021d610218366004611aae565b6105f3565b6040516101f49190611ce5565b34801561023657600080fd5b5061023f61065e565b6040516101f49190611cf0565b34801561025857600080fd5b5061021d6102673660046119fb565b610664565b34801561027857600080fd5b50610281610685565b6040516101f4919061204d565b34801561029a57600080fd5b5061023f61068a565b6101e76102b1366004611ad8565b610699565b3480156102c257600080fd5b5061023f610873565b3480156102d757600080fd5b506102e0610879565b6040516101f49190611c64565b3480156102f957600080fd5b5061023f610888565b34801561030e57600080fd5b5061021d61031d3660046119a5565b61088f565b34801561032e57600080fd5b5061023f61033d3660046119a5565b61096e565b34801561034e57600080fd5b5061023f61035d3660046119a5565b610992565b34801561036e57600080fd5b5061023f61037d366004611ad8565b6109a4565b34801561038e57600080fd5b5061021d61039d366004611bd2565b610aa9565b3480156103ae57600080fd5b506101e7610de1565b3480156103c357600080fd5b5061021d6103d2366004611aae565b610e3c565b3480156103e357600080fd5b506103f76103f23660046119a5565b610e49565b6040516101f4929190611fe9565b34801561041157600080fd5b5061021d610420366004611aae565b610e6f565b34801561043157600080fd5b506102e0610e7c565b34801561044657600080fd5b5061045a6104553660046119a5565b610e8b565b005b34801561046857600080fd5b5061023f610fdd565b34801561047d57600080fd5b5061045a61048c366004611a3b565b610fe4565b34801561049d57600080fd5b5061023f6104ac3660046119a5565b611185565b3480156104bd57600080fd5b5061023f6104cc3660046119c7565b611197565b3480156104dd57600080fd5b5061045a6104ec366004611ad8565b6111b4565b3480156104fd57600080fd5b5061021d61050c3660046119fb565b611267565b34801561051d57600080fd5b5061023f61052c366004611ba2565b61127e565b34801561053d57600080fd5b506102e061054c3660046119a5565b611290565b34801561055d57600080fd5b506102e06112ab565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156105eb5780601f106105c0576101008083540402835291602001916105eb565b820191906000526020600020905b8154815290600101906020018083116105ce57829003601f168201915b505050505081565b3360008181526007602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061064c908690611cf0565b60405180910390a35060015b92915050565b60025481565b600061067084836112cf565b61067b848484611360565b5060019392505050565b601281565b600061069461158a565b905090565b6003546060906001600160a01b031633146106cf5760405162461bcd60e51b81526004016106c690611f33565b60405180910390fd5b600280546003546001600160a01b03166000908152600560205260409020549091021161070e5760405162461bcd60e51b81526004016106c690611dac565b600084848460405160200161072593929190611cb5565b60408051601f1981840301815291815281516020928301206000818152600b9093529120549091504281111561076d5760405162461bcd60e51b81526004016106c690611ee8565b6212750081014211156107925760405162461bcd60e51b81526004016106c690611e8f565b6000828152600b6020526040808220829055516060906001600160a01b0389169088906107c0908990611c21565b60006040518083038185875af1925050503d80600081146107fd576040519150601f19603f3d011682016040523d82523d6000602084013e610802565b606091505b5091509150816108245760405162461bcd60e51b81526004016106c690611f0b565b876001600160a01b0316847f71f2f703ef5605f99bb79556066217af28b9d991b829c9f4255e1abdf873fb4a8989604051610860929190612003565b60405180910390a3979650505050505050565b600a5481565b6003546001600160a01b031681565b6202a30081565b336000908152600460205260408120546001600160a01b039081169083168114610965576108bb611977565b50336000908152600660209081526040918290208251808401909352546001600160801b03808216808552600160801b90920416918301919091521561093b5780516001600160a01b0380841660009081526005602052604080822080546001600160801b03958616900390558451928816825290208054919092160190555b5033600090815260046020526040902080546001600160a01b0319166001600160a01b0385161790555b50600192915050565b6001600160a01b03166000908152600660205260409020546001600160801b031690565b60086020526000908152604090205481565b6003546000906001600160a01b031633146109d15760405162461bcd60e51b81526004016106c690611f33565b600280546003546001600160a01b031660009081526005602052604090205490910211610a105760405162461bcd60e51b81526004016106c690611dac565b6000848484604051602001610a2793929190611cb5565b60408051601f1981840301815282825280516020918201206000818152600b909252919020426202a3000190819055909250906001600160a01b0387169083907f9ffdf0c63c8eec344b500e806ac1d1d37308fdf141a29d10cdd82c069aec6e4890610a9890899089908790612024565b60405180910390a350949350505050565b600033610ac85760405162461bcd60e51b81526004016106c690611e69565b610ad0611977565b503360009081526006602090815260408083208151808301835290546001600160801b038082168352600160801b9091041692810192909252516370a0823160e01b81529091907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190610b56903090600401611c64565b60206040518083038186803b158015610b6e57600080fd5b505afa158015610b82573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba69190611bba565b90506000600254600014610bc75781600254870281610bc157fe5b04610bc9565b855b336000908152600460205260409020549091506001600160a01b0390811690829087168214610c5b5784516001600160801b031615610c325784516001600160a01b038316600090815260056020526040902080546001600160801b0392831690039055855116015b33600090815260046020526040902080546001600160a01b0319166001600160a01b0389161790555b6001600160a01b0387166000908152600560205260409020805482019055610c82836115ea565b8551016001600160801b03168552610c9e4262015180016115ea565b6001600160801b03908116602080880191825233600081815260069092526040918290208951815494518616600160801b029086166001600160801b03199095169490941790941692909217909255600280548601905590516323b872dd60e01b81527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316916323b872dd91610d43919030908d90600401611c78565b602060405180830381600087803b158015610d5d57600080fd5b505af1158015610d71573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d959190611b82565b5060405133906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610dcb908790611cf0565b60405180910390a3506001979650505050505050565b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156105eb5780601f106105c0576101008083540402835291602001916105eb565b6000610965338484611617565b6006602052600090815260409020546001600160801b0380821691600160801b90041682565b6000610965338484611360565b6009546001600160a01b031681565b6001600160a01b038116610eb15760405162461bcd60e51b81526004016106c690611e1d565b6000805260056020527f05b8ccbb9d4d8fb16ea74ce3c29a41f1b461fbdaff4714a0d9a8eb05499746bc54600254600954919003906001600160a01b03838116911614610f5b576001600160a01b0382166000908152600560205260409020546002028110610f325760405162461bcd60e51b81526004016106c690611dac565b600980546001600160a01b0319166001600160a01b0384161790554262093a8001600a55610fd9565b6001600160a01b038216600090815260056020526040902054600202811015610fc357600a54421015610fa05760405162461bcd60e51b81526004016106c690611fc4565b600954600380546001600160a01b0319166001600160a01b039092169190911790555b600980546001600160a01b03191690556000600a555b5050565b6212750081565b6001600160a01b03871661100a5760405162461bcd60e51b81526004016106c690611f7f565b8342106110295760405162461bcd60e51b81526004016106c690611fa3565b6001600160a01b03871660008181526008602090815260409182902080546001818101909255925190926110a79261108c927f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9928e928e928e92918e9101611cf9565b604051602081830303815290604052805190602001206118bc565b858585604051600081526020016040526040516110c79493929190611d4c565b6020604051602081039080840390855afa1580156110e9573d6000803e3d6000fd5b505050602060405103516001600160a01b0316146111195760405162461bcd60e51b81526004016106c690611f5a565b6001600160a01b038088166000818152600760209081526040808320948b168084529490915290819020889055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590611174908990611cf0565b60405180910390a350505050505050565b60056020526000908152604090205481565b600760209081526000928352604080842090915290825290205481565b6003546001600160a01b031633146111de5760405162461bcd60e51b81526004016106c690611f33565b60008383836040516020016111f593929190611cb5565b60408051601f1981840301815282825280516020918201206000818152600b9092529181205591506001600160a01b0385169082907f7666fc3824e27fff7f62adc190adf39d59915b1634803f46f6002f5a071de7f7906112599087908790612003565b60405180910390a350505050565b600061127384836112cf565b61067b848484611617565b600b6020526000908152604090205481565b6004602052600090815260409020546001600160a01b031681565b7f000000000000000000000000000000000000000000000000000000000000000081565b336001600160a01b03831614156112e557610fd9565b6001600160a01b0382166000908152600760209081526040808320338452909152902054600019811461135b57818110156113325760405162461bcd60e51b81526004016106c690611df6565b6001600160a01b0383166000908152600760209081526040808320338452909152902082820390555b505050565b611368611977565b506001600160a01b0383166000908152600660209081526040918290208251808401909352546001600160801b038082168452600160801b909104169082018190524210156113c95760405162461bcd60e51b81526004016106c690611dd6565b81156115475780516001600160801b03168211156113f95760405162461bcd60e51b81526004016106c690611e44565b826001600160a01b0316846001600160a01b031614611547576001600160a01b0383166114385760405162461bcd60e51b81526004016106c690611e69565b611440611977565b506001600160a01b0380841660008181526006602090815260408083208151808301835290546001600160801b038082168352600160801b90910416818401529383526004909152808220548885168352912054919290811691166114a4856115ea565b84516001600160a01b038916600090815260066020526040902080546001600160801b031916929091036001600160801b03169190911790556114e6856115ea565b92516001600160a01b03878116600090815260066020908152604080832080546001600160801b031916959098016001600160801b031694909417909655928116835260059094528082208054879003905591909216825290208054830190555b826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516112599190611cf0565b6000467f000000000000000000000000000000000000000000000000000000000000000081146115c2576115bd81611911565b6115e4565b7f00000000000000000000000000000000000000000000000000000000000000005b91505090565b60006001600160801b038211156116135760405162461bcd60e51b81526004016106c690611eb1565b5090565b6001600160a01b03821661163d5760405162461bcd60e51b81526004016106c690611e69565b611645611977565b506001600160a01b0383166000908152600660209081526040918290208251808401909352546001600160801b038082168452600160801b909104169082018190524210156116a65760405162461bcd60e51b81526004016106c690611dd6565b60006002547f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166370a08231306040518263ffffffff1660e01b81526004016116f79190611c64565b60206040518083038186803b15801561170f57600080fd5b505afa158015611723573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117479190611bba565b84028161175057fe5b04905061177061175f846115ea565b83516001600160801b031690611948565b6001600160a01b03868116600090815260066020908152604080832080546001600160801b0319166001600160801b0396909616959095179094556002805488900390556004808252848320548416835260059091529083902080548790039055915163a9059cbb60e01b81527f00000000000000000000000000000000000000000000000000000000000000009091169163a9059cbb91611816918891869101611c9c565b602060405180830381600087803b15801561183057600080fd5b505af1158015611844573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118689190611b82565b5060006001600160a01b0316856001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040516118ad9190611cf0565b60405180910390a35050505050565b600060405180604001604052806002815260200161190160f01b8152506118e161158a565b836040516020016118f493929190611c3d565b604051602081830303815290604052805190602001209050919050565b60007f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a7946921882306040516020016118f493929190611d2d565b8082036001600160801b0380841690821611156106585760405162461bcd60e51b81526004016106c690611d7d565b604080518082019091526000808252602082015290565b80356001600160a01b038116811461065857600080fd5b6000602082840312156119b6578081fd5b6119c0838361198e565b9392505050565b600080604083850312156119d9578081fd5b6119e3848461198e565b91506119f2846020850161198e565b90509250929050565b600080600060608486031215611a0f578081fd5b8335611a1a816120be565b92506020840135611a2a816120be565b929592945050506040919091013590565b600080600080600080600060e0888a031215611a55578283fd5b611a5f898961198e565b9650611a6e8960208a0161198e565b95506040880135945060608801359350608088013560ff81168114611a91578384fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215611ac0578182fd5b611aca848461198e565b946020939093013593505050565b600080600060608486031215611aec578283fd5b8335611af7816120be565b925060208401359150604084013567ffffffffffffffff80821115611b1a578283fd5b818601915086601f830112611b2d578283fd5b813581811115611b3b578384fd5b611b4e601f8201601f191660200161205b565b9150808252876020828501011115611b64578384fd5b611b75816020840160208601612082565b5080925050509250925092565b600060208284031215611b93578081fd5b815180151581146119c0578182fd5b600060208284031215611bb3578081fd5b5035919050565b600060208284031215611bcb578081fd5b5051919050565b60008060408385031215611be4578182fd5b823591506119f2846020850161198e565b60008151808452611c0d81602086016020860161208e565b601f01601f19169290920160200192915050565b60008251611c3381846020870161208e565b9190910192915050565b60008451611c4f81846020890161208e565b91909101928352506020820152604001919050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b600060018060a01b038516825283602083015260606040830152611cdc6060830184611bf5565b95945050505050565b901515815260200190565b90815260200190565b9586526001600160a01b0394851660208701529290931660408501526060840152608083019190915260a082015260c00190565b92835260208301919091526001600160a01b0316604082015260600190565b93845260ff9290921660208401526040830152606082015260800190565b6000602082526119c06020830184611bf5565b602080825260159082015274426f72696e674d6174683a20556e646572666c6f7760581b604082015260600190565b60208082526010908201526f4e6f7420656e6f75676820766f74657360801b604082015260600190565b602080825260069082015265131bd8dad95960d21b604082015260600190565b6020808252600d908201526c4c6f7720616c6c6f77616e636560981b604082015260600190565b6020808252600d908201526c2d32b9379037b832b930ba37b960991b604082015260600190565b6020808252600b908201526a4c6f772062616c616e636560a81b604082015260600190565b6020808252600c908201526b5a65726f206164647265737360a01b604082015260600190565b6020808252600890820152675478207374616c6560c01b604082015260600190565b6020808252601c908201527f426f72696e674d6174683a2075696e74313238204f766572666c6f7700000000604082015260600190565b602080825260099082015268546f6f206561726c7960b81b604082015260600190565b6020808252600e908201526d0a8f040e4caeccae4e8cac84074560931b604082015260600190565b6020808252600d908201526c4f70657261746f72206f6e6c7960981b604082015260600190565b6020808252600b908201526a496e76616c69642053696760a81b604082015260600190565b6020808252600a90820152692d32b9379037bbb732b960b11b604082015260600190565b602080825260079082015266115e1c1a5c995960ca1b604082015260600190565b6020808252600b908201526a2bb0b4ba103637b733b2b960a91b604082015260600190565b6001600160801b0392831681529116602082015260400190565b60008382526040602083015261201c6040830184611bf5565b949350505050565b60008482526060602083015261203d6060830185611bf5565b9050826040830152949350505050565b60ff91909116815260200190565b60405181810167ffffffffffffffff8111828210171561207a57600080fd5b604052919050565b82818337506000910152565b60005b838110156120a9578181015183820152602001612091565b838111156120b8576000848401525b50505050565b6001600160a01b03811681146120d357600080fd5b5056fea2646970667358221220ddb7cb8be63ca28d7f3122fe649e07f93ef4b2cfe328c2383bdd4ddd114a5c5c64736f6c634300060c0033";