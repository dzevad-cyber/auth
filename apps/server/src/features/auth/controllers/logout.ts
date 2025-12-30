import type { RequestHandler } from 'express';
import { AppError } from '../../../lib/errors/appError.ts';
import { db } from '../../../db/db.ts';
import { UserTable } from '../../../db/schema/userSchema.ts';
import { eq } from 'drizzle-orm';

export const logout: RequestHandler = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) throw new AppError('Invalid credentials', 401);

  await db
    .update(UserTable)
    .set({
      refreshToken: null,
    })
    .where(eq(UserTable.refreshToken, refreshToken));

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
