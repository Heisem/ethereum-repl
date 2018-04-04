const { NODE_ENV } = process.env;

module.exports = {
  local: {
    url: 'http:localhost:7545',
  },
  mainnet: {
    url: '',
  },
  ropsten: {
    url: ''
  },
  rinkeby: {
    url: ''
  },
  kovan: {
    url: ''
  },
}[NODE_ENV];
