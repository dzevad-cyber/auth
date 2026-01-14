import { signUpSchema } from '../sign-up/signUp.schema.ts';

export const loginSchema = signUpSchema.pick({
  email: true,
  password: true,
});
