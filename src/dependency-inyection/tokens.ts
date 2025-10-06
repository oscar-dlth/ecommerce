import { token } from 'brandi';
import { IUserRepository } from '@gateways/repositories/IUserRepository';
import { IUserService } from '@domain/services/IUserService';
import { GetUsersQuery } from '@application/users/queries/getUsers/GetUsersQuery';
import { GetUserByIdQuery } from '@application/users/queries/getUserById/GetUserByIdQuery';
import { IAuthService } from '@domain/services/IAuthService';
import { LoginCommand } from "@application/users/commands/login/LoginCommand";
import { UpdateUserCommand } from '@application/users/commands/updateUser/UpdateUserCommand';
import { CreateUserCommand } from '@application/users/commands/createUser/CreateUserCommand';
import { IProductRepository } from '@gateways/repositories/IProductRepository';
import { CreateProductCommand } from '@application/products/commands/createProduct/createProductCommand';
import { GetProductsQuery } from '@application/products/queries/getProducts/getProductsQuery';
import { GetProductByIdQuery } from '@application/products/queries/getProductById/getProductByIdQuery';
import { UpdateProductCommand } from '@application/products/commands/updateProduct/updateProductCommand';
import { ICategoryService } from '@domain/services/ICategoryService';
import { GetCategoriesQuery } from '@application/categories/queries/getCategories/getCategoriesQuery';
import { ICategoryRepository } from '@gateways/repositories/ICategoryRepository';
import { IProductService } from '@domain/services/IProductService';
import { DeleteProductCommand } from '@application/products/commands/deleteProduct/deleteProductCommand';
import { GetCategoryByIdQuery } from '@application/categories/queries/getCategoryById/GetCategoryByIdQuery';
import { CreateCategoryCommand } from '@application/categories/commands/CreateCategory/CreateCategoryCommand';
import { DeleteCategoryCommand } from '@application/categories/commands/DeleteCategory/DeleteCategoryCommand';
import { IBrandService } from '@domain/services/IBrandService';
import { IBrandRepository } from '@gateways/repositories/IBrandRepository';
import { GetBrandsQuery } from '@application/Brands/Queries/GetBrands/GetBrandsQuery';

export const TOKENS = {
  userRepository: token<IUserRepository>('userRepository'),
  BrandRepository: token<IBrandRepository>('brandRepository'),
  ProductRepository: token<IProductRepository>('ProductRepository'),
  CategoryRepository: token<ICategoryRepository>('CategoryRepository'),
  usersService: token<IUserService>('userService'),
  productsService: token<IProductService>('productsService'),
  categoryService: token<ICategoryService>('categoryService'),
  BrandService: token<IBrandService>('BrandService'),
  AuthService: token<IAuthService>('IAuthService')
};

export const UserCommandTokens = {
  LoginCommand: token<LoginCommand>('LoginCommand'),
  UpdateUserCommand: token<UpdateUserCommand>('UpdateUserCommand'),
  CreateUserCommand: token<CreateUserCommand>('CreateUserCommand'),
  GetUsersQuery: token<GetUsersQuery>('GetUsersQuery'),
  GetUserByIdQuery: token<GetUserByIdQuery>('GetUserByIdQuery'),
}

export const ProductCommandTokens = {
  UpdateProductCommand: token<UpdateProductCommand>('UpdateProductCommand'),
  CreateProductCommand: token<CreateProductCommand>('CreateProductCommand'),
  DeleteProductCommand: token<DeleteProductCommand>('DeleteProductCommand'),
  GetProductsQuery: token<GetProductsQuery>('GetProductsQuery'),
  GetProductByIdQuery: token<GetProductByIdQuery>('GetProductByIdQuery'),
}

export const CategoryCommandTokens = {
  GetCategoriesQuery: token<GetCategoriesQuery>('GetCategoriesQuery'),
  GetCategoryByIdQuery: token<GetCategoryByIdQuery>('GetCategoryByIdQuery'),
  CreateCategoryCommand: token<CreateCategoryCommand>('CreateCategoryCommand'),
  UpdateCategoryCommand: token<CreateCategoryCommand>('UpdtaeCategoryCommand'),
  DeleteCategoryCommand: token<DeleteCategoryCommand>('DeleteCategoryCommand'),
}

export const BrandsCommandTokens = {
  GetBrandsQuery: token<GetBrandsQuery>('GetBrandsQuery'),
}

