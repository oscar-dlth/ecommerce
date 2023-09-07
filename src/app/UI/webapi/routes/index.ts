import express, { Router } from 'express';
import { categoriesOperations } from './categories';
import { productsOperations } from './products';
import { userOperations } from './user';
import apicache  from 'apicache'

let cache = apicache.middleware;
const router: Router = express.Router();
const usersRouter: Router = express.Router();
const productsRouter: Router = express.Router();
const categoriesRouter: Router = express.Router();

usersRouter
  .post('/signup', userOperations.signIn)
  .post('/', userOperations.createUser)
  .post('/login', userOperations.login)
  .get('', cache('1 hour'), userOperations.getUsers)
  .get('/:id', cache('1 hour'), userOperations.getUserById)
  .delete('/:id', userOperations.deleteUser)
  .put('', userOperations.updateUser);

productsRouter
  .get('/', cache('1 hour'), productsOperations.getProducts);

categoriesRouter
  .get('/', cache('1 hour'), categoriesOperations.getCategories);

router.use('/api/users', usersRouter);
router.use('/api/products', productsRouter);
router.use('/api/categories', categoriesRouter);

export default router;
