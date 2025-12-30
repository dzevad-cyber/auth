import type { RequestHandler } from 'express';
import { AppError } from '../../../lib/errors/appError.ts';
import jwt, { type JwtPayload } from 'jsonwebtoken';
import { db } from '../../../db/db.ts';
import { UserTable } from '../../../db/schema/userSchema.ts';
import { eq } from 'drizzle-orm';

export const getRefreshToken: RequestHandler = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) throw new AppError('Please login or register.', 401);

  const jwtPayload = jwt.verify(
    refreshToken,
    process.env.JWT_REFRESH_TOKEN,
  ) as JwtPayload & { id: string };

  if (!jwtPayload) throw new AppError('Please login or register.', 401);

  const [user] = await db
    .select()
    .from(UserTable)
    .where(eq(UserTable.id, parseInt(jwtPayload.id)));

  if (!user || user.refreshToken !== refreshToken) {
    throw new AppError('Please register or login.', 403);
  }

  const newAccessToken = jwt.sign(
    { id: user.id },
    process.env.JWT_ACCESS_TOKEN,
    {
      expiresIn: '15m',
    },
  );

  res.cookie('accessToken', newAccessToken, {
    secure: true,
    httpOnly: true,
    maxAge: 15 * 60 * 1000, // 15 mins
  });

  return res.status(200).json({
    accessToken: newAccessToken,
  });
};
