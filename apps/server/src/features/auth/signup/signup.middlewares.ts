import type { RequestHandler } from 'express';
import * as z from 'zod';
import { signUpReqBody } from './signup.validator.js';
import { AppError } from '../../../lib/errors/appError.ts';

export const validateSignUpReqBody: RequestHandler = (req, res, next) => {
  const parsedReqBody = signUpReqBody.safeParse(req.body);

  if (!parsedReqBody.success) {
    throw new AppError(z.prettifyError(parsedReqBody.error), 400, {
      type: 'VALIDATION_ERROR',
      error: parsedReqBody.error,
    });
  }

  next();
};
