import express from 'express'
import { NextFunction, Request, Response } from 'express';
import Container from 'typedi';
import { UserRepository } from '../../../2-application/users';
import { CreateUserDto } from '../../../2-application/users/dtos/createUserDto';
import router from './user';

const userRepository = Container.get(UserRepository);

const userRouter  = express.Router()
  .post('/signup', router.signIn);

export default userRouter;
