import * as z from 'zod';

export const loginReqBody = z.object({
  email: z.email(),
  password: z.string(),
});
