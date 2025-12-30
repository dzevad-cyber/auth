import type { RequestHandler } from 'express';
import { forgotPasswordReqBody } from './forgetPassword.validators.ts';
import { AppError } from '../../../lib/errors/appError.ts';
import * as z from 'zod';

export const validateForgotPasswordReqBody: RequestHandler = (
  req,
  _res,
  next,
) => {
  const parsedReqBody = forgotPasswordReqBody.safeParse(req.body);

  if (!parsedReqBody.success) {
    throw new AppError(z.prettifyError(parsedReqBody.error), 400, {
      type: 'VALIDATION_ERROR',
      error: parsedReqBody.error,
    });
  }

  next();
};
