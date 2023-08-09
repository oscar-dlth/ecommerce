import { TOKENS } from "@dependency-inyectiontokens";
import { ProductRepository } from "@infrastructure/db/mySql/repositories/producctRepository";
import { UserRepository } from "@infrastructure/db/mySql/repositories/userRepository";
import { AuthServiceImp } from "@infrastructure/services/AuthServiceImp";
import { ProductsService } from "@infrastructure/services/productsService";
import { UsersService } from "@infrastructure/services/usersService";
import { Container } from "brandi";

export const registerServices = (container: Container) => {

  container
    .bind(TOKENS.userRepository)
    .toInstance(UserRepository)
    .inSingletonScope();
  
  container
    .bind(TOKENS.ProductRepository)
    .toInstance(ProductRepository)
    .inSingletonScope();
  
  container
    .bind(TOKENS.productsService)
    .toInstance(ProductsService)
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

