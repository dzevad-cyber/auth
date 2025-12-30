import * as z from 'zod';

export const resetPasswordReqBody = z.object({
  token: z.string(),
  newPassword: z.string(),
});
