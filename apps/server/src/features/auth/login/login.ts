import type { RequestHandler } from 'express';
import { db } from '../../../db/db.ts';
import { UserTable } from '../../../db/schema/userSchema.ts';
import { AppError } from '../../../lib/errors/appError.ts';
import bcrypt from 'bcryptjs';
import { getTokens } from './login.helpers.ts';
import { eq } from 'drizzle-orm';

export const login: RequestHandler = async (req, res) => {
  const [registeredUser] = await db
    .select()
    .from(UserTable)
    .where(eq(UserTable.email, req.body.email));

  if (!registeredUser) throw new AppError('User not found.', 404);

  const passwordMatch = await bcrypt.compare(
    req.body.password,
    registeredUser.password,
  );

  if (!passwordMatch) throw new AppError('Invalid password', 400);

  const { accessToken, refreshToken } = getTokens(registeredUser);

  await db
    .update(UserTable)
    .set({
      refreshToken,
    })
    .returning();

  res.cookie('accessToken', accessToken, {
    httpOnly: true,
    maxAge: 15 * 60 * 1000,
    sameSite: 'lax',
    secure: true,
  });

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    sameSite: 'lax',
    secure: true,
  });

  return res.status(200).json({
    message: 'You successfully logged in.',
  });
};
