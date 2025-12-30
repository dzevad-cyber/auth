import * as z from 'zod';

export const forgotPasswordReqBody = z.object({
  email: z.email(),
});
