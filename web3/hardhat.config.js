require("@matterlabs/hardhat-zksync-solc");

const { API_URL, PRIVATE_KEY } = process.env

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // zksolc: {
  //   version: "1.3.9",
  //   compilerSource: "binary",
  //   settings: {
  //     optimizer: {
  //       enabled: true,
  //     },
  //   },
  // },
  // networks: {
  //   zksync_testnet: {
  //     url: "https://zksync2-testnet.zksync.dev",
  //     ethNetwork: "goerli",
  //     chainId: 280,
  //     zksync: true,
  //   },
  //   zksync_mainnet: {
  //     url: "https://zksync2-mainnet.zksync.io/",
  //     ethNetwork: "mainnet",
  //     chainId: 324,
  //     zksync: true,
  //   },
  // },
  // paths: {
  //   artifacts: "./artifacts-zk",
  //   cache: "./cache-zk",
  //   sources: "./contracts",
  //   tests: "./test",
  // },
  solidity: {
    version: "0.8.17",
    defaultNetwork: 'sepolia',
    networks: {
      hardhat: {},
      sepolia: {
        //url: 'https://rpc.ankr.com/eth_sepolia/2cfb65ced4cb2a2989842e77ca3f009cbedae710a0f1388e92926c2a2e9fa411',
        // url: 'https://rpc.ankr.com/eth_sepolia',
        url: API_URL,
        accounts: [`0x${PRIVATE_KEY}`]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
