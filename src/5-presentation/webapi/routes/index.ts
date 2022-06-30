import userRouter from './user';

const express =  require('express');

const router = express.Router()

router
  .post('/signup', userRouter.signIn);

export default router;
