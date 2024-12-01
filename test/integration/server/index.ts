import http from 'node:http';
import express from 'express';

import mnrTransactionId from '../../../src/index.js';

const app = express();

app.use(mnrTransactionId);

app.get('/', (_req, res) => {
  res.status(200).end();
});

const server = http.createServer(app);

process.on('SIGINT', closeServer);
process.on('SIGTERM', closeServer);

try {
  server.listen(5500);
} catch (err) {
  console.error(err);
}

function closeServer() {
  server.close();
}
