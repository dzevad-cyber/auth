import type { RequestHandler } from 'express';
import * as z from 'zod';
import { loginReqBody } from './login.validators.ts';
import { AppError } from '../../../lib/errors/appError.ts';

export const validateLoginReqBody: RequestHandler = (req, _res, next) => {
  const parsedReqBody = loginReqBody.safeParse(req.body);

  if (!parsedReqBody.success) {
    throw new AppError(z.prettifyError(parsedReqBody.error), 400, {
      type: 'VALIDATION_ERROR',
      error: parsedReqBody.error,
    });
  }

  next();
};
