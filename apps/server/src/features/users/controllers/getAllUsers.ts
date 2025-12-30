import type { RequestHandler } from 'express';
import { db } from '../../../db/db.ts';
import { usersTable } from '../../../db/schema/userSchema.ts';

export const getAllUsers: RequestHandler = async (req, res) => {
  const users = await db
    .select({
      firstName: usersTable.firstName,
      lastName: usersTable.lastName,
      email: usersTable.email,
    })
    .from(usersTable);

  return res.status(200).json({
    users,
  });
};
