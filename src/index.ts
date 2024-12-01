/**
 * Express middleware for tracking transactions in microservices architecture.
 *
 * @packageDocumentation
 */

import type { Request, Response, NextFunction } from 'express';
import crypto from 'node:crypto';

/**
 * Name of HTTP header containing transaction ID value
 *
 * @public
 */
export const HEADER_NAME = 'x-transaction-id';

/**
 * Request object extended with "transactionId" property
 *
 * @public
 */
export interface RequestWithTransactionId extends Request {
  transactionId?: string;
}

/**
 * Middleware function setting transaction ID
 *
 * @public
 */
export default function mnrTransactionId<
  R extends RequestWithTransactionId = RequestWithTransactionId,
>(
  req: R,
  res: Response,
  next: NextFunction,
): void {
  setIncomingTransactionId(req);

  if (req.transactionId != null) {
    res.set(HEADER_NAME, req.transactionId);
  }

  next();
};

/**
 * Set req.transactionId from request header or newly generated
 *
 * This function mutates req object
 *
 * @param req - Request object
 *
 * @private
 */
function setIncomingTransactionId<
  R extends RequestWithTransactionId = RequestWithTransactionId,
>(req: R): void {
  const headerVal = req.get(HEADER_NAME);
  req.transactionId = headerVal || crypto.randomUUID();
};
