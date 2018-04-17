const web3Client = require('web3');
const { NODE_ENV } = process.env;

const config = {
  development: {
    url: 'http://127.0.0.1:22000',
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
}[NODE_ENV || 'development'];

const web3Instance = new web3Client();
const provider = new web3Instance.providers.HttpProvider(config['url']);
web3Instance.setProvider(provider);
const web3 = web3Instance;

module.exports = {
  config,
  web3,
};
