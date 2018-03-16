const repl = require('repl');
const web3 = require('web3');
const ethUtil = require('ethjs-util');
const ethereumTx = require('ethereumjs-tx');

global.web3 = new web3();
global.ethUtil = ethUtil;
global.ethereumTx = ethereumTx;

repl.start({});
