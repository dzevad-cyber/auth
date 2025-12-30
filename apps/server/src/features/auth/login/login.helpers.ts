import type { User } from '../../../db/schema/userSchema.js';
import jwt from 'jsonwebtoken';

export const getTokens = (user: User) => {
  const accessToken = jwt.sign(
    {
      id: user.id,
    },
    process.env.JWT_ACCESS_TOKEN,
    {
      expiresIn: '15m',
    },
  );

  const refreshToken = jwt.sign(
    {
      id: user.id,
    },
    process.env.JWT_REFRESH_TOKEN,
    {
      expiresIn: '1w',
    },
  );

  return { accessToken, refreshToken };
};
