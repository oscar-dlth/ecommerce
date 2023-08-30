import express, { Router } from 'express';
import { categoriesOperations } from './categories';
import { productsOperations } from './products';
import { userOperations } from './user';

const router: Router = express.Router();
const usersRouter: Router = express.Router();
const productsRouter: Router = express.Router();
const categoriesRouter: Router = express.Router();

usersRouter
  //.post('/signup', userOperations.signIn)
  //.post('/', userOperations.createUser)
  //.post('/login', userOperations.login)
  .get('', userOperations.getUsers)
  .get('/:id', userOperations.getUserById)
  //.delete('/:id', userOperations.deleteUser)
  //.put('', userOperations.updateUser);

productsRouter
  .get('/', productsOperations.getProducts);

categoriesRouter
  .get('/', categoriesOperations.getCategories);

router.use('/users', usersRouter);
router.use('/products', productsRouter);
router.use('/categories', categoriesRouter);

export default router;
