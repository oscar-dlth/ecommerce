import { Router } from 'express';
import userRouter from './user';
const express =  require('express');

const router: Router = express.Router()

router
  .post('/signup', userRouter.signIn);

export default router;
