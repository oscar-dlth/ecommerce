import { token } from 'brandi';
import { UserCommands } from '../src/2-application/users/userCommands';
import { IUserGateway } from '../src/3.gateways/userGateway';


export const TOKENS = {
  userCommands: token<UserCommands>('userCommands'),
  userGateway: token<IUserGateway>('userGateway'),
};