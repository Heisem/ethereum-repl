const repl = require('repl');
const web3 = require('web3');
const ethUtil = require('ethjs-util');
const ethereumTx = require('ethereumjs-tx');

const config = require('./config');
const web3Client = new web3();
const { NODE_ENV } = process.env;

if (typeof NODE_ENV !== 'undefined') {
  const provider = new web3.providers.HttpProvider(NODE_ENV.url);
  web3Client.setProvider(provider);
}

global.web3 = web3Client;
global.ethUtil = ethUtil;
global.ethereumTx = ethereumTx;

repl.start({});
