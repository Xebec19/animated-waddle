const path = require("path");
const fs = require("fs");
const solc = require("solc");

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, "utf8"); // Ensure encoding is correct

// Compile contract
const input = {
  language: "Solidity",
  sources: {
    "Inbox.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["abi", "evm.bytecode.object"],
      },
    },
  },
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));

// Handle compilation errors
if (output.errors) {
  output.errors.forEach((err) => {
    console.error(err.formattedMessage);
  });
  throw new Error("Compilation failed");
}

// Export ABI and Bytecode
const abi = output.contracts["Inbox.sol"].Inbox.abi;
const bytecode = output.contracts["Inbox.sol"].Inbox.evm.bytecode.object;

console.log({ abi, bytecode });

module.exports = { abi, bytecode };
