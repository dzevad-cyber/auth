import { db } from '../../db/db.ts';
import type { Request, Response } from 'express';
import { usersTable } from '../../db/schema/user.ts';
import { eq } from 'drizzle-orm';

export const getAllUsers = async (_req: Request, res: Response) => {
  const users = await db.select().from(usersTable);

  if (users.length === 0) {
    return res.status(404).json({
      status: 'fail',
      message: 'Users not found...',
    });
  }

  return res.status(200).json({
    status: 'success',
    data: {
      users,
    },
  });
};

export const getOneUser = async (req: Request, res: Response) => {
  if (!req.params['id']) {
    return res.status(400).json({
      status: 'fail',
      message: 'Param id is missing',
    });
  }

  const user = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, parseInt(req.params['id'])));

  return res.status(200).json({
    status: 'success',
    data: { user },
  });
};
