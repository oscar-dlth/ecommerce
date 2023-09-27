import express, { Router } from 'express';
import apicache from 'apicache'
import { productsOperations } from './products';
import { userOperations } from './users';
import { categoriesOperations } from './categories';
import { brandsOperations } from './Brands';

const cache = apicache.middleware;
const router: Router = express.Router();
const usersRouter: Router = express.Router();
const productsRouter: Router = express.Router();
const categoriesRouter: Router = express.Router();
const brandsRouter: Router = express.Router();

usersRouter
  .post('/signup', userOperations.signIn)
  .post('/', userOperations.createUser)
  .post('/login', userOperations.login)
  .get('', cache('1 hour'), userOperations.getUsers)
  .get('/:id', cache('1 hour'), userOperations.getUserById)
  .delete('/:id', userOperations.deleteUser)
  .put('/', userOperations.updateUser);
productsRouter
  .get('/', cache('1 hour'), productsOperations.getProducts)
  .post('/', productsOperations.createProduct)
  .get('/:id', cache('1 hour'), productsOperations.getProductById)
  .delete('/:id', productsOperations.deleteProduct)
  .put('/', productsOperations.updateProduct);

categoriesRouter
  .get('/', cache('1 hour'), categoriesOperations.getCategories)
  .get('/:id', cache('1 hour'), categoriesOperations.getCategoryById)
  .post('/', categoriesOperations.createCategory)
  .delete('/:id', categoriesOperations.deleteCategory)
  .put('/', categoriesOperations.updateCategory);

brandsRouter
  .get('/', cache('1 hour'), brandsOperations.getBrands)

router.use('/api/users', usersRouter);
router.use('/api/products', productsRouter);
router.use('/api/categories', categoriesRouter);
router.use('/api/brands', brandsRouter )

export default router;
