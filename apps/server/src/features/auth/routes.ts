import express, { type Router } from 'express';
import { signUp } from './signup/signup.js';
import { login } from './login/login.ts';
import { getAuthenticatedUser } from './auth-user/getAuthUser.ts';
import { authenticateToken } from './middlewares/authenticateToken.ts';
import { getRefreshToken } from './refresh-token/getRefreshToken.ts';
import { logout } from './logout/logout.ts';
import { validateLoginReqBody } from './login/login.middlewares.ts';
import { forgotPassword } from './forget-password/forgotPassword.ts';
import { validateForgotPasswordReqBody } from './forget-password/forgotPassword.middlewares.ts';
import { resetPassword } from './reset-password/resetPassword.ts';
import { validateResetPasswordReqBody } from './reset-password/resetPassword.middleware.ts';
import { validateSignUpReqBody } from './signup/signup.middlewares.ts';
import { apiV1Paths } from '@auth/shared';

const { auth } = apiV1Paths;

export const authRouter: Router = express.Router();

authRouter.post(`/${auth.signUp}`, [validateSignUpReqBody], signUp);
authRouter.post(`/${auth.login}`, [validateLoginReqBody], login);
authRouter.get(`/${auth.user}`, [authenticateToken], getAuthenticatedUser);
authRouter.post(`/${auth.refresh}`, getRefreshToken);
authRouter.post(`/${auth.logout}`, logout);
authRouter.post(
  `/${auth.forgotPassword}`,
  [validateForgotPasswordReqBody],
  forgotPassword,
);

authRouter.post(
  `/${auth.resetPassword}`,
  [validateResetPasswordReqBody],
  resetPassword,
);
