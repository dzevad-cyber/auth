import * as z from 'zod';

export const signUpSchema = z
  .object({
    firstName: z
      .string()
      .max(30, 'Must be at most 30 characthers long.')
      .min(3, 'Must be at least 3 characthers long.'),
    lastName: z
      .string()
      .max(30, 'Must be at most 30 characthers long.')
      .min(3, 'Must be at least 3 characthers long.'),
    password: z
      .string()
      .max(50, 'Must be at most 50 characthers long.')
      .min(8, 'Must be at least 8 characters long.'),
    passwordConfirm: z
      .string()
      .max(50, 'Must be at most 50 characthers long.')
      .min(8, 'Must be at least 8 characters long.'),
    email: z.email(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords don't match",
    path: ['passwordConfirm'],
  });
