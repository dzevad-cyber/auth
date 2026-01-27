import type { RequestHandler } from 'express';
import { db } from '../../../db/db';
import { userTable } from '../../../db/schema/userSchema';

export const getAllUsers: RequestHandler = async (_req, res) => {
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
