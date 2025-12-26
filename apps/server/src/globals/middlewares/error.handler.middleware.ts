import type { NextFunction, Response, Request } from 'express';
import { AppError } from '../../lib/errors/appError.ts';
import * as z from 'zod';
import { logger } from '../../services/pino.logger.ts';

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
    logger.error(err, '[ error.handler.middleware.ts - 26 ] - ERROR:');
  }

  if (!err.isOperational) {
    return res.status(500).json({
      status: 'fail',
      message: 'Ups. Something went wrong ...',
    });
  } else {
    console.log(
      '[ error.handler.middleware.ts - 30 ] - statusCode:',
      statusCode,
    );

    return res.status(statusCode).json({
      status,
      errors: err.errors?.error
        ? z.flattenError(err.errors.error).fieldErrors
        : undefined,
    });
  }
};
