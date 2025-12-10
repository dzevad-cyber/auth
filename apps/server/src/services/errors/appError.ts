import { unknown, type ZodError } from 'zod';

export class AppError extends Error {
  statusCode: number;
  status: string;
  isOperational: boolean;
  error: Errors;

  constructor(message: string, statusCode: number, error: Errors = {}) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;
    this.error = error;

    Error.captureStackTrace(this, this.constructor);
  }
}

type ErrorTypes = 'INVALIDATION_ERROR';
type Errors =
  | {
      type: ErrorTypes;
      error: ZodError;
    }
  | {};
