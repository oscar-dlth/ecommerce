import { Container } from 'brandi';
import { UserCommands } from '../src/2-application/users/userCommands';
import { UserQueries } from '../src/2-application/users/userQueries';
import { UserRepository } from '../src/4-infrastructure/db/mySql/implementations/repositories/userRepository';

import { TOKENS } from './tokens';

export const container = new Container();

container
  .bind(TOKENS.userCommands)
  .toInstance(UserCommands)
  .inSingletonScope();
  
container
.bind(TOKENS.userRepository)
.toInstance(UserRepository)
.inSingletonScope();

container
  .bind(TOKENS.userQueries)
  .toInstance(UserQueries)
  .inSingletonScope();