import type { RequestHandler } from 'express';
import * as z from 'zod';
import { registerReqBody } from './register.validator.ts';
import { AppError } from '../../../lib/errors/appError.ts';

export const validateReqisterReqBody: RequestHandler = (req, res, next) => {
  const parsedReqBody = registerReqBody.safeParse(req.body);

  if (!parsedReqBody.success) {
    throw new AppError(z.prettifyError(parsedReqBody.error), 400, {
      type: 'VALIDATION_ERROR',
      error: parsedReqBody.error,
    });
  }

  next();
};
