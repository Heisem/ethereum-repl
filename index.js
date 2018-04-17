const repl = require('repl');
const ethUtil = require('ethjs-util');
const ethereumTx = require('ethereumjs-tx');

const { web3 } = require('./config');
const contracts = require('./contracts');
const ContractUtils = require('./ContractUtils');
const contractUtils = new ContractUtils(web3, contracts);

/*contractUtils.transfer(
  'e6181caaffff94a09d7e332fc8da9884d99902c7874eb74354bdcadf411929f1',
  '0xbEF31a35048dec439dF293bB5Bd9f6c35BcF32a3',
  1
).then(console.log);*/

/*contractUtils.sendTransaction(
  'erc20',
  'e6181caaffff94a09d7e332fc8da9884d99902c7874eb74354bdcadf411929f1',
  'transfer',
  '0xbEF31a35048dec439dF293bB5Bd9f6c35BcF32a3', // address
  web3.utils.toWei(String(1), 'ether'), // amount
).then(console.log);*/

global.web3 = web3;
global.ethUtil = ethUtil;
global.ethereumTx = ethereumTx;
global.contractUtils = contractUtils;

repl.start({});
