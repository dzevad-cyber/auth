import { type RequestHandler } from 'express';
import { eq } from 'drizzle-orm';
import { db } from '../../../db/db';
import { userTable } from '../../../db/schema/userSchema';
import { AppError } from '../../../lib/errors/appError';

export const getAuthenticatedUser: RequestHandler = async (req, res) => {
  const { id } = req.jwtPayload;

  const [user] = await db
    .select({
      firstName: userTable.firstName,
      lastName: userTable.lastName,
    })
    .from(userTable)
    .where(eq(userTable.id, parseInt(id)));

  if (!user) throw new AppError('Please login or register.', 401);

  return res.status(200).json({
    user,
  });
};
