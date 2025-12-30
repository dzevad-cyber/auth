import type { RequestHandler } from 'express';
import { registerValidatorReqBody } from '../validators.ts';
import * as z from 'zod';
import { AppError } from '../../../lib/errors/appError.ts';

export const validateReqisterReqBody: RequestHandler = (req, res, next) => {
  const parsedReqBody = registerValidatorReqBody.safeParse(req.body);

  if (!parsedReqBody.success) {
    throw new AppError(z.prettifyError(parsedReqBody.error), 400, {
      type: 'VALIDATION_ERROR',
      error: parsedReqBody.error,
    });
  }

  next();
};
