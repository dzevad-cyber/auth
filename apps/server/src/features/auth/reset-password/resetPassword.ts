import type { RequestHandler } from 'express';
import { db } from '../../../db/db';
import { userTable } from '../../../db/schema/userSchema';
import { and, eq, gt } from 'drizzle-orm';
import { AppError } from '../../../lib/errors/appError';
import { hash } from '../../../services/bcrypt';

export const resetPassword: RequestHandler = async (req, res) => {
  const [user] = await db
    .select()
    .from(userTable)
    .where(
      and(
        eq(userTable.resetPasswordToken, req.body.token),
        gt(userTable.resetPasswordExpires, new Date()),
      ),
    );

  if (!user) {
    throw new AppError('Invalid token. Please try again', 400);
  }

  const hashedNewPassword = await hash(req.body.newPassword);

  await db
    .update(userTable)
    .set({
      password: hashedNewPassword,
      resetPasswordExpires: null,
      resetPasswordToken: null,
    })
    .where(eq(userTable.id, user.id));

  return res.status(200).json({
    message: 'Password updated successfully.',
  });
};
