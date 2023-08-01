import { Router } from 'express';
import userRouter from './user';
const express = require('express');

const router: Router = express.Router()

router
  .post('/users/signup', userRouter.signIn)
  .post('/users/login', userRouter.login)
  .get('/users', userRouter.getUsers)
  .get('/users/:id', userRouter.getUserById)
  .delete('/users/:id', userRouter.deleteUser)
  .put('/users', userRouter.updateUser)

export default router;
