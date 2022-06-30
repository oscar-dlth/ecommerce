import { token } from 'brandi';
import { UserUseCases } from '../src/2-application/users/userUsesCases';
import { IUserGateway } from '../src/3.gateways/userGateway';


export const TOKENS = {
  userUseCases: token<UserUseCases>('userUseCases'),
  userGateway: token<IUserGateway>('userGateway'),
};