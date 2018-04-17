const repl = require('repl');
const ethUtil = require('ethjs-util');
const ethereumTx = require('ethereumjs-tx');

const web3 = require('./web3Client');
const contracts = require('./contracts');
const TokenUtils = require('./tokenUtils');
const tokenUtils = new TokenUtils(web3, contracts);

/*tokenUtils.transfer(
  'e6181caaffff94a09d7e332fc8da9884d99902c7874eb74354bdcadf411929f1',
  '0xbEF31a35048dec439dF293bB5Bd9f6c35BcF32a3',
  1
).then(console.log);*/

/*tokenUtils.sendTransaction(
  'erc20',
  'e6181caaffff94a09d7e332fc8da9884d99902c7874eb74354bdcadf411929f1',
  'transfer',
  '0xbEF31a35048dec439dF293bB5Bd9f6c35BcF32a3', // address
  web3.utils.toWei(String(1), 'ether'), // amount
).then(console.log);*/

global.web3 = web3;
global.ethUtil = ethUtil;
global.ethereumTx = ethereumTx;
global.tokenUtils = tokenUtils;

repl.start({});
