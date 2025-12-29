import * as z from 'zod';

export const registerValidatorReqBody = z
  .object({
    firstName: z.string().min(3).max(30),
    lastName: z.string().min(3).max(30),
    password: z.string().min(8).max(50),
    passwordConfirm: z.string().min(8).max(50),
    email: z.email(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords don't match",
    path: ['passwordConfirm'],
  });

export const loginValidatorReqBody = z.object({
  email: z.email(),
  password: z.string(),
});
