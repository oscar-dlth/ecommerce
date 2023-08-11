import { Router } from 'express';
import userRouter from './user';
import produtsRouter from './products';
import categoriesRouter from './categories';
const express = require('express');

const router: Router = express.Router()

router
  .post('/users/signup', userRouter.signIn)
  .post('/users/', userRouter.createUser)
  .post('/users/login', userRouter.login)
  .get('/users', userRouter.getUsers)
  .get('/users/:id', userRouter.getUserById)
  .delete('/users/:id', userRouter.deleteUser)
  .put('/users', userRouter.updateUser);

router.get('/products', produtsRouter.getProducts);

router.get('/categories', categoriesRouter.getCategories);

export default router;
