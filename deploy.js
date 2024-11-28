const HDWalletProvider = require("@truffle/hdwallet-provider");
const { Web3 } = require("web3");
//updated web3 and hdwallet-provider imports added for convenience

// deploy code will go here
const { interface, bytecode } = require("./compile");
const { MNEMONIC, NETWORK_LINK } = require("./environments");

const provider = new HDWalletProvider(MNEMONIC, NETWORK_LINK);

const web3 = new Web3(provider);
