import type { NextFunction, Response, Request } from 'express';
import * as z from 'zod';
import { logger } from '../../services/pino.logger.ts';
import type { AppError } from '../../lib/errors/appError.ts';

export const globalErrorHandler = (
  appError: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = appError.statusCode || 500;
  const status = appError.status || 'appErroror';

  if (process.env.NODE_ENV === 'production') {
    console.log(
      '[ appErroror.handler.middleware.ts - 16 ] - :',
      'sending appErroror to analytics',
    );
  } else if (process.env.NODE_ENV === 'development') {
    logger.error(
      appError,
      '[ appErroror.handler.middleware.ts - 26 ] - appError:',
    );
  }

  if (!appError.isOperational) {
    return res.status(500).json({
      status: 'error',
      message: 'Ups. Something went wrong ...',
    });
  } else {
    console.log(
      '[ appErroror.handler.middleware.ts - 30 ] - statusCode:',
      statusCode,
    );

    console.log('[ error.handler.middleware.ts - 38 ] - appError:', appError);

    const _err = appError.error;
    if (_err.type === 'APP_ERROR') {
      return res.status(statusCode).json({
        status,
        message: appError.message,
      });
    }

    if (_err.type === 'VALIDATION_ERROR') {
      return res.status(statusCode).json({
        status,
        error: _err.error ? z.flattenError(_err.error).fieldErrors : undefined,
      });
    }

    return res.status(500).json({
      status: 'error',
      message: 'Not handled error',
    });
  }
};
