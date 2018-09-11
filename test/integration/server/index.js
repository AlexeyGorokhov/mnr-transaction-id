'use strict';

const http = require('http');
const express = require('express');

const mnrTransactionId = require('../../../index');

const app = express();

app.use(mnrTransactionId);

app.get('/', (req, res) => {
  res.status(200).end();
});

const server = http.createServer(app);
server.listen(5500);
