import express, { type Router } from 'express';
import { register } from './controllers/register.ts';
import { login } from './controllers/login.ts';
import { getAuthenticatedUser } from './controllers/getAuthUser.ts';
import { authenticateToken } from './middlewares/authenticateToken.ts';
import { validateLoginReqBody } from './middlewares/validateLoginReqBody.ts';
import { validateReqisterReqBody } from './middlewares/validateRegisterReqBody.ts';
import { getRefreshToken } from './controllers/getRefreshToken.ts';
import { logout } from './controllers/logout.ts';

export const authRouter: Router = express.Router();

authRouter.post('/register', [validateReqisterReqBody], register);
authRouter.post('/login', [validateLoginReqBody], login);
authRouter.get('/user', [authenticateToken], getAuthenticatedUser);
authRouter.post('/refresh', getRefreshToken);
authRouter.post('/logout', logout);
