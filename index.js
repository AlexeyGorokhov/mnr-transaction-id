'use strict';

const setIncomingTransactionId = require('./lib/set-incoming-transaction-id');
const headerName = require('./lib/header-name');

module.exports = function mnrTransactionId(req, res, next) {
  setIncomingTransactionId(req);
  res.set(headerName, req.transactionId);
  next();
};
