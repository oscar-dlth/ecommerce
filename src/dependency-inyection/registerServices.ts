import { TOKENS } from "@dependency-inyection/tokens";
import { BrandsRepository } from "@infrastructure/db/mySql/repositories/BrandsRepository";
import { CategoriesRepository } from "@infrastructure/db/mySql/repositories/categoriesRepository";
import { ProductRepository } from "@infrastructure/db/mySql/repositories/productsRepository";
import { UserRepository } from "@infrastructure/db/mySql/repositories/usersRepository";
import { AuthService } from "@infrastructure/services/AuthService";
import { BrandService } from "@infrastructure/services/BrandService";
import { CategoryService } from "@infrastructure/services/CategoryService";
import { ProductsService } from "@infrastructure/services/ProductsService";
import { UsersService } from "@infrastructure/services/UserService";
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
    .bind(TOKENS.CategoryRepository)
    .toInstance(CategoriesRepository)
    .inSingletonScope();
  
  container
    .bind(TOKENS.BrandRepository)
    .toInstance(BrandsRepository)
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
    .bind(TOKENS.BrandService)
    .toInstance(BrandService)
    .inSingletonScope();
}

