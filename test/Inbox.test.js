const ganache = require("ganache");
const { Web3 } = require("web3");
const assert = require("assert");
// updated ganache and web3 imports added for convenience
const { compile } = require("../compile");

const interface = compile.interface,
  bytecode = compile.bytecode;

// contract test code will go here
const web3 = new Web3(ganache.provider());

let accounts;
let inbox;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // Use one of those accounts to deploy
  // the contract
  console.log({ compile });
  inbox = await new web3.eth.Contract(JSON.parse(interface || {}))
    .deploy({
      data: compile.bytecode,
      arguments: ["Hi there!"],
    })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    assert(Array.isArray(accounts), "Accounts is an array");

    assert(accounts.length > 2, "There are more than 2 accounts!");
  });
});
