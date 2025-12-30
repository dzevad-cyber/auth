import type { RequestHandler } from 'express';
import { hash } from '../../../services/bcrypt.ts';
import { usersTable } from '../../../db/schema/userSchema.ts';
import { db } from '../../../db/db.ts';

export const register: RequestHandler = async (req, res, _next) => {
  const hashedPassword = await hash(req.body.password);

  const [user] = await db
    .insert(usersTable)
    .values({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
    })
    .returning({
      firstName: usersTable.firstName,
      lastName: usersTable.lastName,
      email: usersTable.email,
    });

  return res.status(201).json({
    user,
  });
};
