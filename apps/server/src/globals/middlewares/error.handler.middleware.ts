import type { NextFunction, Response, Request } from 'express';
import { AppError } from '../../services/errors/appError.ts';
import * as z from 'zod';

export const globalErrorHandler = (
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = err.statusCode || 500;
  const status = err.status || 'error';

  if (process.env.NODE_ENV === 'production') {
    console.log(
      '[ error.handler.middleware.ts - 16 ] - :',
      'sending error to analytics',
    );
  } else if (process.env.NODE_ENV === 'development') {
    console.log('[ error.handler.middleware.ts - 26 ] - ERROR:', err);
  }

  if (!err.isOperational) {
    return res.status(500).json({
      status: 'fail',
      message: 'Ups. Something went wrong ...',
    });
  } else {
    return res.status(statusCode).json({
      status,
      errors: err.error?.error
        ? z.flattenError(err.error.error).fieldErrors
        : undefined,
    });
  }
};
