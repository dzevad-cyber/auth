import type { RequestHandler } from 'express';
import { db } from '../../../db/db.ts';
import { userTable } from '../../../db/schema/userSchema.ts';
import { AppError } from '../../../lib/errors/appError.ts';
import bcrypt from 'bcryptjs';
import { getTokens } from './login.helpers.ts';
import { eq } from 'drizzle-orm';

export const login: RequestHandler = async (req, res) => {
  const [registeredUser] = await db
    .select()
    .from(userTable)
    .where(eq(userTable.email, req.body.email));

  if (!registeredUser) throw new AppError(USER_BAD_REQUEST_ERR_MESSAGE, 404);

  const passwordMatch = await bcrypt.compare(
    req.body.password,
    registeredUser.password,
  );

  if (!passwordMatch) throw new AppError(USER_BAD_REQUEST_ERR_MESSAGE, 400);

  const { accessToken, refreshToken } = getTokens(registeredUser);

  await db
    .update(userTable)
    .set({
      refreshToken,
    })
    .returning();

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    sameSite: 'strict',
    secure: true,
  });

  return res.status(200).json({
    message: 'You successfully logged in.',
    accessToken,
  });
};

const USER_BAD_REQUEST_ERR_MESSAGE =
  'Your email or password is incorrect. Please try again.';
