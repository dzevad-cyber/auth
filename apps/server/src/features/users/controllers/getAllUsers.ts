import type { RequestHandler } from 'express';
import { db } from '../../../db/db.ts';
import { userTable } from '../../../db/schema/userSchema.ts';

export const getAllUsers: RequestHandler = async (req, res) => {
  const users = await db
    .select({
      firstName: userTable.firstName,
      lastName: userTable.lastName,
      email: userTable.email,
    })
    .from(userTable);

  return res.status(200).json({
    users,
  });
};
