import { type RequestHandler } from 'express';
import { usersTable } from '../../db/schema/userSchema.ts';
import { db } from '../../db/db.ts';
import { hash } from '../../services/bcrypt.ts';
import { eq } from 'drizzle-orm';
import { AppError } from '../../lib/errors/appError.ts';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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

  const accessToken = jwt.sign(
    {
      id: registeredUser.id,
    },
    process.env.JWT_ACCESS_TOKEN,
    {
      expiresIn: '30s',
    },
  );

  const refreshToken = jwt.sign(
    {
      id: registeredUser.id,
    },
    process.env.JWT_REFRESH_TOKEN,
    {
      expiresIn: '1w',
    },
  );

  res.cookie('accessToken', accessToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: 'lax',
    secure: true,
  });

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    sameSite: 'lax',
    secure: true,
  });

  return res.status(200).json({
    message: 'You successfully logged in.',
  });
};
