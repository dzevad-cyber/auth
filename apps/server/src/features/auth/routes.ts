import express, { type Router } from 'express';
import { register } from './register/register.ts';
import { login } from './login/login.ts';
import { getAuthenticatedUser } from './auth-user/getAuthUser.ts';
import { authenticateToken } from './middlewares/authenticateToken.ts';
import { getRefreshToken } from './refresh-token/getRefreshToken.ts';
import { logout } from './logout/logout.ts';
import { validateLoginReqBody } from './login/login.middlewares.ts';
import { validateReqisterReqBody } from './register/register.middlewares.ts';
import { forgotPassword } from './forget-password/forgotPassword.ts';

export const authRouter: Router = express.Router();

authRouter.post('/register', [validateReqisterReqBody], register);
authRouter.post('/login', [validateLoginReqBody], login);
authRouter.get('/user', [authenticateToken], getAuthenticatedUser);
authRouter.post('/refresh', getRefreshToken);
authRouter.post('/logout', logout);
authRouter.post('/forgot-password', forgotPassword);
