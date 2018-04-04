const web3 = require('web3');

const web3Client = new web3();
const { NODE_ENV } = process.env;

if (typeof NODE_ENV !== 'undefined') {
  const config = require('./config');
  const provider = new web3.providers.HttpProvider(config['url']);
  web3Client.setProvider(provider);
}

module.exports = web3Client;
