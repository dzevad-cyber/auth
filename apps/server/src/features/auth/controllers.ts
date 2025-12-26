import { type RequestHandler } from 'express';
import { usersTable } from '../../db/schema/userSchema.ts';
import { db } from '../../db/db.ts';

export const register: RequestHandler = async (req, res, _next) => {
  const newUser = await db.insert(usersTable).values(req.body).returning();

  return res.status(201).json({
    newUser,
  });
};
