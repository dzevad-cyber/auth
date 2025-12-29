import type { RequestHandler } from 'express';
import { AppError } from '../../lib/errors/appError.ts';
import * as z from 'zod';
import {
  loginValidatorReqBody,
  registerValidatorReqBody,
} from './validators.ts';

export const validateRegisterReqBody: RequestHandler = (req, _res, next) => {
  const parsedReqBody = registerValidatorReqBody.safeParse(req.body);

  if (!parsedReqBody.success) {
    throw new AppError(z.prettifyError(parsedReqBody.error), 400, {
      type: 'VALIDATION_ERROR',
      error: parsedReqBody.error,
    });
  }

  next();
};

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
