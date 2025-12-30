import type { RequestHandler } from 'express';
import jwt, { type JwtPayload } from 'jsonwebtoken';
import { AppError } from '../../../lib/errors/appError.ts';

export const authenticateToken: RequestHandler = (req, _res, next) => {
  const token = req.cookies.accessToken;
  if (!token) throw new AppError('Please login or register.', 401);

  const payload = jwt.verify(token, process.env.JWT_ACCESS_TOKEN);
  if (!payload) throw new AppError('Please login or register.', 401);

  req.jwtPayload = payload as JwtPayload & { id: string };

  next();
};
