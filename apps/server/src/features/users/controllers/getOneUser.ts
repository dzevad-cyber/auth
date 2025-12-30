import { eq } from 'drizzle-orm';
import type { RequestHandler } from 'express';
import { AppError } from '../../../lib/errors/appError.ts';
import { db } from '../../../db/db.ts';
import { userTable } from '../../../db/schema/userSchema.ts';

export const getOneUser: RequestHandler = async (req, res) => {
  const id = req.params['id'];

  if (!id) throw new AppError('Invalid request.', 400);

  if (typeof id === 'string' && isNaN(parseInt(id))) {
    throw new AppError('Invalid id in params', 400);
  }

  const [user] = await db
    .select({
      firstName: userTable.firstName,
      lastName: userTable.lastName,
      email: userTable.email,
    })
    .from(userTable)
    .where(eq(userTable.id, parseInt(id)));

  return res.status(200).json({
    user,
  });
};
