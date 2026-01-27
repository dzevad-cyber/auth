import type { RequestHandler } from 'express';
import { hash } from '../../../services/bcrypt';
import { db } from '../../../db/db';
import { userTable } from '../../../db/schema/userSchema';

export const signUp: RequestHandler = async (req, res, _next) => {
  const hashedPassword = await hash(req.body.password);

  const [user] = await db
    .insert(userTable)
    .values({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
    })
    .returning({
      firstName: userTable.firstName,
      lastName: userTable.lastName,
      email: userTable.email,
    });

  return res.status(201).json({
    user,
  });
};
