import { db } from '../../db/db.ts';
import type { Request, Response } from 'express';
import { usersTable } from '../../db/schema/userSchema.ts';
import { eq } from 'drizzle-orm';

export const getAllUsers = async (_req: Request, res: Response) => {
  const users = await db.select().from(usersTable);

  return res.status(200).json({
    users,
  });
};

export const getOneUser = async (req: Request, res: Response) => {
  const user = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, parseInt(req.params['id']!)));

  return res.status(200).json({
    user,
  });
};
