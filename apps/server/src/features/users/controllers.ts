import { db } from '../../db/db.ts';
import type { RequestHandler } from 'express';
import { usersTable } from '../../db/schema/userSchema.ts';
import { eq } from 'drizzle-orm';
import { AppError } from '../../lib/errors/appError.ts';

export const getAllUsers: RequestHandler = async (_req, res) => {
  const users = await db.select().from(usersTable);

  return res.status(200).json({
    users,
  });
};

export const getOneUser: RequestHandler = async (req, res) => {
  const user = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, parseInt(req.params['id']!)));

  return res.status(200).json({
    user,
  });
};
