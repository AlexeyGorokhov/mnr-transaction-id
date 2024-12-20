# mnr-transaction-id

Express middleware for tracking transactions in microservices architecture.

## You may not need it!

This is a custom, highly opinionated solution aimed at code reuse for a few private projects.

## v3 Breaking Changes

* From v3, `mnr-transaction-id` is an ESM-only module - you are not able to import it with `require()`.

* Bump minimum supported version of Node.js to v20.

Archive documentation:
* [v2](https://github.com/AlexeyGorokhov/mnr-transaction-id/blob/master/docs-archives/v2.md);

## Installation

```bash
$ npm install --save mnr-transaction-id
```

## Usage Example

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
