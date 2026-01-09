import type { RequestHandler } from 'express';
import * as z from 'zod';
import { AppError } from '../../../lib/errors/appError.ts';
import { signUpSchema } from '@auth/shared';

export const validateSignUpReqBody: RequestHandler = (req, res, next) => {
  const parsedReqBody = signUpSchema.safeParse(req.body);

  if (!parsedReqBody.success) {
    throw new AppError(z.prettifyError(parsedReqBody.error), 400, {
      type: 'VALIDATION_ERROR',
      error: parsedReqBody.error,
    });
  }

  next();
};
