import { Container } from 'brandi';
import { UserRepository } from '../src/2-application/users';
import { UserGateway } from '../src/4-infrastructure/db/mongoDB/implementations/UserGateway';

import { TOKENS } from './tokens';

export const container = new Container();

container
  .bind(TOKENS.userGateway)
  .toInstance(UserGateway)
  .inSingletonScope();

container
  .bind(TOKENS.userRepository)
  .toInstance(UserRepository)
  .inSingletonScope();