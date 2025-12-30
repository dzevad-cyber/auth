import { type RequestHandler } from 'express';
import { eq } from 'drizzle-orm';
import { db } from '../../../db/db.ts';
import { AppError } from '../../../lib/errors/appError.ts';
import { UserTable } from '../../../db/schema/userSchema.ts';

export const getAuthenticatedUser: RequestHandler = async (req, res) => {
  const { id } = req.jwtPayload;

  const [user] = await db
    .select({
      firstName: UserTable.firstName,
      lastName: UserTable.lastName,
    })
    .from(UserTable)
    .where(eq(UserTable.id, parseInt(id)));

  if (!user) throw new AppError('Please login or register.', 401);

  return res.status(200).json({
    user,
  });
};
