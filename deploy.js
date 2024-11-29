const HDWalletProvider = require("@truffle/hdwallet-provider");
const { Web3 } = require("web3");
//updated web3 and hdwallet-provider imports added for convenience

// deploy code will go here
const { interface, bytecode } = require("./compile");
const { MNEMONIC, NETWORK_LINK } = require("./environments");

const provider = new HDWalletProvider(MNEMONIC, NETWORK_LINK);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", account[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ["Hi there!"],
    })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to ", result.options.address);
  provider.engine.stop();
};
deploy();
