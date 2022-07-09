import { token } from 'brandi';
import { UserCommands } from '../src/2-application/users/userCommands';
import { UserQueries } from '../src/2-application/users/userQueries';
import { IUserRepository } from '../src/3.gateways/repositories/userRepository';


export const TOKENS = {
  userCommands: token<UserCommands>('userCommands'),
  userQueries: token<UserQueries>('userQueries'),
  userRepository: token<IUserRepository>('userRepository'),
};