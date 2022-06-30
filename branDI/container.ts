import { Container } from 'brandi';
import { UserUseCases } from '../src/2-application/users/userUsesCases';
import { UserGateway } from '../src/4-infrastructure/db/mongoDB/implementations/UserGateway';

import { TOKENS } from './tokens';

export const container = new Container();

container
  .bind(TOKENS.userGateway)
  .toInstance(UserGateway)
  .inSingletonScope();

container
  .bind(TOKENS.userUseCases)
  .toInstance(UserUseCases)
  .inSingletonScope();