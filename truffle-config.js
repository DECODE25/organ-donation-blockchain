module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  mocha: {
    useColors: true
  },
  
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}