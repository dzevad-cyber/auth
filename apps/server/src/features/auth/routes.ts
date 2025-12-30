import express, { type Router } from 'express';
import { register } from './controllers/register.ts';
import { login } from './controllers/login.ts';
import { getAuthenticatedUser } from './controllers/getAuthUser.ts';
import { validateRegisterReqBody } from './middlewares/validateRegisterReqBody.ts';
import { validateLoginReqBody } from './middlewares/validateLoginReqBody.ts';
import { authenticateToken } from './middlewares/authenticateToken.ts';

export const authRouter: Router = express.Router();

authRouter.post('/register', [validateRegisterReqBody], register);
authRouter.post('/login', [validateLoginReqBody], login);
authRouter.get('/user', [authenticateToken], getAuthenticatedUser);
