import express, { type Router } from 'express';
import { signUp } from './signup/signup.js';
import { login } from './login/login';
import { getAuthenticatedUser } from './auth-user/getAuthUser';
import { authenticateToken } from './middlewares/authenticateToken';
import { getRefreshToken } from './refresh-token/getRefreshToken';
import { logout } from './logout/logout';
import { validateLoginReqBody } from './login/login.middlewares';
import { forgotPassword } from './forget-password/forgotPassword';
import { validateForgotPasswordReqBody } from './forget-password/forgotPassword.middlewares';
import { resetPassword } from './reset-password/resetPassword';
import { validateResetPasswordReqBody } from './reset-password/resetPassword.middleware';
import { validateSignUpReqBody } from './signup/signup.middlewares';
import { apiV1Paths } from '@auth/shared';

const { auth } = apiV1Paths;

export const authRouter: Router = express.Router();

authRouter.post(`/${auth.signUp}`, [validateSignUpReqBody], signUp);
authRouter.post(`/${auth.login}`, [validateLoginReqBody], login);
authRouter.get(`/${auth.user}`, [authenticateToken], getAuthenticatedUser);
authRouter.get(`/${auth.refresh}`, getRefreshToken);
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
