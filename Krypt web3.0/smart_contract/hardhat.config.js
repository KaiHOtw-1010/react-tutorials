// https://eth-ropsten.alchemyapi.io/v2/qL6FcILPTY0CH-K7weMTlH4su9kD4NLC

// 4c926f52c26fa45bbe1a7d7ce7493be9716a82613c0f0b43ae8b90791ad15a6d

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/qL6FcILPTY0CH-K7weMTlH4su9kD4NLC",
      accounts: [ "4c926f52c26fa45bbe1a7d7ce7493be9716a82613c0f0b43ae8b90791ad15a6d" ]
    }
  }
};
