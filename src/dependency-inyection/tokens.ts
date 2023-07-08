import { token } from 'brandi';
import { IUserRepository } from '@gateways/repositories/userRepository';
import { IUserService } from '@domain/services/usersService';
import { GetUsersQuery } from '@application/users/queries/getUsers/GetUsersQuery';
import { GetUserByIdQuery } from '@application/users/queries/getUserById/GetUserByIdQuery';


export const TOKENS = {
  userRepository: token<IUserRepository>('userRepository'),
  usersService: token<IUserService>('userService'),
  GetUsersQuery: token<GetUsersQuery>('GetUsersQuery'),
  GetUserByIdQuery: token<GetUserByIdQuery>('GetUserByIdQuery')
};