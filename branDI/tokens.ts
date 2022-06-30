import { token } from 'brandi';
import { UserRepository } from '../src/2-application/users';
import { IUserGateway } from '../src/3.gateways/userGateway';


export const TOKENS = {
  userRepository: token<UserRepository>('userRepository'),
  userGateway: token<IUserGateway>('userGateway'),
};