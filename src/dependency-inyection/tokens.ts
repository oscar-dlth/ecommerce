import { token } from 'brandi';
import { IUserRepository } from '@gateways/repositories/userRepository';
import { IUserService } from '@domain/services/usersService';
import { GetUsersQuery } from '@application/users/queries/getUsers/GetUsersQuery';
import { GetUserByIdQuery } from '@application/users/queries/getUserById/GetUserByIdQuery';
import { AuthService } from '@domain/services/AuthService';
import { LoginCommand } from "@application/users/commands/login/LoginCommand";
import { UpdateUserCommand } from '@application/users/commands/updateUser/UpdateUserCommand';
import { CreateUserCommand } from '@application/users/commands/createUser/CreateUserCommand';
import { IProductRepository } from '@gateways/repositories/productRepository';
import { IProductsService } from '@domain/services/ProductsService';
import { CreateProductCommand } from '@application/products/commands/createProduct/createProductCommand';
import { GetProductsQuery } from '@application/products/queries/getProducts/getProductsQuery';
import { GetProductByIdQuery } from '@application/products/queries/getProductById/getProductByIdQuery';
import { UpdateProductCommand } from '@application/products/commands/updateProduct/updateProductCommand';



export const TOKENS = {
  userRepository: token<IUserRepository>('userRepository'),
  ProductRepository: token<IProductRepository>('ProductRepository'),
  usersService: token<IUserService>('userService'),
  productsService: token<IProductsService>('productsService'),
  AuthService: token<AuthService>('AuthService')
};

export const CommandTokens = {
  LoginCommand: token<LoginCommand>('LoginCommand'),
  UpdateUserCommand: token<UpdateUserCommand>('UpdateUserCommand'),
  CreateUserCommand: token<CreateUserCommand>('CreateUserCommand'),
  GetUsersQuery: token<GetUsersQuery>('GetUsersQuery'),
  GetUserByIdQuery: token<GetUserByIdQuery>('GetUserByIdQuery'),
}

export const ProductCommandTokens = {
  UpdateProductCommand: token<UpdateProductCommand>('UpdateProductCommand'),
  CreateProductCommand: token<CreateProductCommand>('CreateProductCommand'),
  GetProductsQuery: token<GetProductsQuery>('GetProductsQuery'),
  GetProductByIdQuery: token<GetProductByIdQuery>('GetProductByIdQuery'),
}