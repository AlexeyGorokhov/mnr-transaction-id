import type { Request, Response, NextFunction } from 'express';

export interface RequestWithTransactionId extends Request {
  transactionId: string;
}

export default function mnrTransactionId(
  req: Request,
  res: Response,
  next: NextFunction,
): void;