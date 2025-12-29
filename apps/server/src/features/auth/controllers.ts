import { type RequestHandler } from 'express';
import { usersTable } from '../../db/schema/userSchema.ts';
import { db } from '../../db/db.ts';
import { hash } from '../../services/bcrypt.ts';
import { eq } from 'drizzle-orm';
import { AppError } from '../../lib/errors/appError.ts';
import bcrypt from 'bcryptjs';

export const register: RequestHandler = async (req, res, _next) => {
  const hashedPassword = await hash(req.body.password);

  const newUser = await db
    .insert(usersTable)
    .values({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
    })
    .returning();

  return res.status(201).json({
    newUser,
  });
};

export const login: RequestHandler = async (req, res) => {
  const [registeredUser] = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, req.body.email));

  if (!registeredUser) throw new AppError('User not found.', 404);

  const passwordMatch = await bcrypt.compare(
    req.body.password,
    registeredUser.password,
  );

  if (!passwordMatch) throw new AppError('Invalid password', 400);

  return res.status(200).json({
    registeredUser: {
      firstName: registeredUser.firstName,
      lastName: registeredUser.lastName,
    },
  });
};
