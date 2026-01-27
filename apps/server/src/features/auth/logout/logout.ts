import type { RequestHandler } from 'express';
import { eq } from 'drizzle-orm';
import { AppError } from '../../../lib/errors/appError';
import { db } from '../../../db/db';
import { userTable } from '../../../db/schema/userSchema';

export const logout: RequestHandler = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) throw new AppError('Invalid credentials', 401);

  await db
    .update(userTable)
    .set({
      refreshToken: null,
    })
    .where(eq(userTable.refreshToken, refreshToken));

  res.clearCookie('refreshToken', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
  });

  res.clearCookie('accessToken', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
  });

  return res.status(200).json({
    messagae: 'You successfully loged out.',
  });
};
