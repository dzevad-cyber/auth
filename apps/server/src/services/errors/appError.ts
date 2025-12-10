import { type ZodError } from 'zod';

export class AppError extends Error {
  statusCode: number;
  status: string;
  isOperational: boolean;
  errors: Errors;

  constructor(message: string, statusCode: number, error: Errors) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;
    this.errors = error;

    Error.captureStackTrace(this, this.constructor);
  }
}

type ErrorTypes = 'INVALIDATION_ERROR' | 'UNKNOWN';
type Errors =
  | {
      type: ErrorTypes;
      error: ZodError;
    }
  | undefined;
