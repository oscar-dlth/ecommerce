import express from 'express'
import router from './user';

const userRouter  = express.Router()
  .post('/signup', router.signIn);

export default userRouter;
