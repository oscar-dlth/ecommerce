import { token } from 'brandi';
import { UserCommands } from '@application/users/userCommands';
import { UserQueries } from '@application/users/userQueries';
import { IUserRepository } from '@gateways/repositories/userRepository';


export const TOKENS = {
  userCommands: token<UserCommands>('userCommands'),
  userQueries: token<UserQueries>('userQueries'),
  userRepository: token<IUserRepository>('userRepository'),
};