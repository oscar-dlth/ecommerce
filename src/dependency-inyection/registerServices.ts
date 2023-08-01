import { TOKENS } from "@dependency-inyectiontokens";
import { UserRepository } from "@infrastructure/db/mySql/repositories/userRepository";
import { AuthServiceImp } from "@infrastructure/identity/JWT/AuthServiceImp";
import { UsersService } from "@infrastructure/services/usersService";
import { Container } from "brandi";

export const registerServices = (container: Container) => {

  container
    .bind(TOKENS.userRepository)
    .toInstance(UserRepository)
    .inSingletonScope();

  container
    .bind(TOKENS.usersService)
    .toInstance(UsersService)
    .inSingletonScope();

  container
    .bind(TOKENS.AuthService)
    .toInstance(AuthServiceImp)
    .inSingletonScope();
}

