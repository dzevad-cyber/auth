import { type RequestHandler } from 'express';
import { eq } from 'drizzle-orm';
import { db } from '../../../db/db.ts';
import { usersTable } from '../../../db/schema/userSchema.ts';
import { AppError } from '../../../lib/errors/appError.ts';

export const getAuthenticatedUser: RequestHandler = async (req, res) => {
  const { id } = req.jwtPayload;

  const [user] = await db
    .select({
      firstName: usersTable.firstName,
      lastName: usersTable.lastName,
    })
    .from(usersTable)
    .where(eq(usersTable.id, parseInt(id)));

  if (!user) throw new AppError('Please login or register.', 401);

  return res.status(200).json({
    user,
  });
};
