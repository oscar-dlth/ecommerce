import { Router } from 'express';
import tokenAuthMiddleware  from './../../../4-infrastructure/identity/JWT/middleware/check-auth'
import userRouter from './user';
const express =  require('express');

const router: Router = express.Router()

router
  .post('/signup', userRouter.signIn);

export default router;
