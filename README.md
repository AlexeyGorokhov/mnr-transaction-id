# mnr-transaction-id

Express middleware for tracking transactions in microservices architecture.

## You may not need it!

This is a custom, highly opinionated solution aimed at code reuse for a few private projects.

## Installation

```bash
$ npm install --save mnr-transaction-id
```

## Usage Example

JavaScript:
```javascript
const mnrTransactionId = require('mnr-transaction-id');

const app = express();
app.use(mnrTransactionId);

app.get('/my-endpoint', (req, res) => {
  console.log(req.transactionId);
});
```

TypeScript:
```typescript
import mnrTransactionId, { RequestWithTransactionId } from 'mnr-transaction-id';

const app = express();
app.use(mnrTransactionId);

app.get('/my-endpoint', (req, res) => {
  console.log((req as RequestWithTransactionId).transactionId);
});
```

## What It Does

1. Add `req.transactionId` either from request's `x-transaction-id` HTTP header, or newly generated UUID if there is no such a header. The most obvious use case for `req.transactionId` is using it in logs.

2. Add `x-transaction-id` HTTP header to response. The value is taken from `req.transactionId`.
