import express, { type Router } from 'express';
import { register } from './controllers.ts';
import { validateRegisterReqBody } from './middlewares.ts';

export const authRouter: Router = express.Router();

authRouter.post('/register', [validateRegisterReqBody], register);
