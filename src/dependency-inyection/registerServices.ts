import { TOKENS } from "@dependency-inyection/tokens";
import { CategoryRepository } from "@infrastructure/db/mySql/repositories/CategoryRepository";
import { ProductRepository } from "@infrastructure/db/mySql/repositories/ProductRepository";
import { AuthService } from "@infrastructure/services/AuthService";
import { CategoryService } from "@infrastructure/services/CategoryService";
import { ProductsService } from "@infrastructure/services/productsService";
import { UsersService } from "@infrastructure/services/UserService";
import { Container } from "brandi";
import { UserRepository } from "@infrastructure/db/mySql/repositories/UserRepository";

export const registerServices = (container: Container) => {
  container
    .bind(TOKENS.ProductRepository)
    .toInstance(ProductRepository)
    .inSingletonScope();

    container
    .bind(TOKENS.CategoryRepository)
    .toInstance(CategoryRepository)
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
    .toInstance(AuthService)
    .inSingletonScope();


    container
    .bind(TOKENS.categoryService)
    .toInstance(CategoryService)
    .inSingletonScope();

    container
    .bind(TOKENS.UserRepository)
    .toInstance(UserRepository)
    .inSingletonScope();
}

