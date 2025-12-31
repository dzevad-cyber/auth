import type { RequestHandler } from 'express';
import { db } from '../../../db/db.ts';
import { userTable } from '../../../db/schema/userSchema.ts';
import { eq } from 'drizzle-orm';
import crypto from 'node:crypto';
import { sendEmail } from '../../../services/nodemailer.ts';

export const forgotPassword: RequestHandler = async (req, res) => {
  const [user] = await db
    .select()
    .from(userTable)
    .where(eq(userTable.email, req.body.email));

  if (!user) {
    return res.json({
      message: 'Please check your email for reset link.',
    });
  }

  const resetToken = crypto.randomBytes(32).toString('hex');
  const resetTokenExpireTime = new Date(Date.now() + 3600000);

  await db
    .update(userTable)
    .set({
      resetPasswordToken: resetToken,
      resetPasswordExpires: resetTokenExpireTime,
    })
    .where(eq(userTable.id, user.id));

  // send email
  await sendEmail();

  return res.status(200).json({
    message: 'Please check your email for reset password link.',
  });
};
