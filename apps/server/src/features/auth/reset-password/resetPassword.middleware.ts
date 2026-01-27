import type { RequestHandler } from 'express';
import { resetPasswordReqBody } from './resetPassword.validators';
import { AppError } from '../../../lib/errors/appError';

export const validateResetPasswordReqBody: RequestHandler = (
  req,
  _res,
  next,
) => {
  const parsedReqBody = resetPasswordReqBody.safeParse(req.body);

  if (!parsedReqBody.success) {
    throw (
      new AppError('Invalid request.', 400),
      {
        type: 'VALIDATION_ERROR',
        error: parsedReqBody.error,
      }
    );
  }

  next();
};
