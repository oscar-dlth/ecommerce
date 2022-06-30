import { token } from 'brandi';
import { UserCommands } from '../src/2-application/users/userCommands';
import { UserQueries } from '../src/2-application/users/userQueries';
import { IUserGateway } from '../src/3.gateways/userGateway';
import { IUserRepository } from '../src/3.gateways/repositories/userRepository';


export const TOKENS = {
  userGateway: token<IUserGateway>('userGateway'),
  userCommands: token<UserCommands>('userCommands'),
  userQueries: token<UserQueries>('userQueries'),
  userRepository: token<IUserRepository>('userRepository'),
};