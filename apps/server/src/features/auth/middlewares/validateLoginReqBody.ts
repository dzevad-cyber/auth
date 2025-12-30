import type { RequestHandler } from 'express';
import { loginValidatorReqBody } from '../validators.ts';
import * as z from 'zod';
import { AppError } from '../../../lib/errors/appError.ts';

export const validateLoginReqBody: RequestHandler = (req, _res, next) => {
  const parsedReqBody = loginValidatorReqBody.safeParse(req.body);

  if (!parsedReqBody.success) {
    throw new AppError(z.prettifyError(parsedReqBody.error), 400, {
      type: 'VALIDATION_ERROR',
      error: parsedReqBody.error,
    });
  }

  next();
};
