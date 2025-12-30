import { type RequestHandler } from 'express';
import { eq } from 'drizzle-orm';
import { db } from '../../../db/db.ts';
import { userTable } from '../../../db/schema/userSchema.ts';
import { AppError } from '../../../lib/errors/appError.ts';

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
