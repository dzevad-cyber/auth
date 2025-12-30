import type { RequestHandler } from 'express';
import { hash } from '../../../services/bcrypt.ts';
import { db } from '../../../db/db.ts';
import { UserTable } from '../../../db/schema/userSchema.ts';

export const register: RequestHandler = async (req, res, _next) => {
  const hashedPassword = await hash(req.body.password);

  const [user] = await db
    .insert(UserTable)
    .values({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
    })
    .returning({
      firstName: UserTable.firstName,
      lastName: UserTable.lastName,
      email: UserTable.email,
    });

  return res.status(201).json({
    user,
  });
};
