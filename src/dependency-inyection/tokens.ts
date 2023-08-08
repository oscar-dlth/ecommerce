import { token } from 'brandi';
import { IUserRepository } from '@gateways/repositories/userRepository';
import { IUserService } from '@domain/services/usersService';
import { GetUsersQuery } from '@application/users/queries/getUsers/GetUsersQuery';
import { GetUserByIdQuery } from '@application/users/queries/getUserById/GetUserByIdQuery';
import { AuthService } from '@domain/services/AuthService';
import { LoginCommand } from "@application/users/commands/login/LoginCommand";
import { UpdateUserCommand } from '@application/users/commands/updateUser/UpdateUserCommand';
import { CreateUserCommand } from '@application/users/commands/createUser/CreateUserCommand';



export const TOKENS = {
  userRepository: token<IUserRepository>('userRepository'),
  usersService: token<IUserService>('userService'),
  AuthService: token<AuthService>('AuthService')
};

export const CommandTokens = {
  LoginCommand: token<LoginCommand>('LoginCommand'),
  UpdateUserCommand: token<UpdateUserCommand>('UpdateUserCommand'),
  CreateUserCommand: token<CreateUserCommand>('CreateUserCommand'),
  GetUsersQuery: token<GetUsersQuery>('GetUsersQuery'),
  GetUserByIdQuery: token<GetUserByIdQuery>('GetUserByIdQuery'),
}