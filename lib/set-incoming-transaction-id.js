'use strict';

const crypto = require('node:crypto');

const headerName = require('./header-name');

/**
 * Set req.transactionId from request header or newly generated
 *
 * This function mutates req object
 *
 * @param {Request} req
 *
 * @return {Void}
 */
module.exports = function setIncomingTransactionId(req) {
  const headerVal = req.get(headerName);
  req.transactionId = headerVal || crypto.randomUUID();
};
