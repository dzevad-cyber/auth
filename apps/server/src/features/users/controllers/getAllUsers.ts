import type { RequestHandler } from 'express';
import { db } from '../../../db/db.ts';
import { UserTable } from '../../../db/schema/userSchema.ts';

export const getAllUsers: RequestHandler = async (req, res) => {
  const users = await db
    .select({
      firstName: UserTable.firstName,
      lastName: UserTable.lastName,
      email: UserTable.email,
    })
    .from(UserTable);

  return res.status(200).json({
    users,
  });
};
