const repl = require('repl');
const ethUtil = require('ethjs-util');
const ethereumTx = require('ethereumjs-tx');

const web3 = require('./web3Client');
const contracts = require('./contracts');
const TokenUtils = require('./tokenUtils');
const tokenUtils = new TokenUtils(web3, contracts);

/*tokenUtils.transfer(
  'privateKey',
  'toAddress',
  1
).then(console.log);*/

/*tokenUtils.sendTransaction(
  'erc20',
  'privateKey',
  'transfer',
  'toAddress', // address
  web3.utils.toWei(String(1), 'ether'), // amount
).then(console.log);*/

global.web3 = web3;
global.ethUtil = ethUtil;
global.ethereumTx = ethereumTx;
global.tokenUtils = tokenUtils;

repl.start({});
