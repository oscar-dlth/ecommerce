import { DeleteCategoryCommandHandler } from "@application/categories/commands/DeleteCategory/DeleteCategoryCommandHandler";
import { UpdateCategoryCommandHandler } from "@application/categories/commands/UpdateCategory/UpdateCategoryCommandHandler";
import { GetCategoriesQueryHandler } from "@application/categories/queries/getCategories/getCategoriesQueryHandler";
import { DeleteProductCommand } from "@application/products/commands/deleteProduct/deleteProductCommand";
import { GetProductsQueryHandler } from "@application/products/queries/getProducts/getProductsQueryHandler";
import { CreateUserCommandHandler } from "@application/users/commands/createUser/CreateUserCommandHandler";
import { LoginCommandHandler } from "@application/users/commands/login/LoginCommandHandler";
import { UpdateUserCommandHandler } from "@application/users/commands/updateUser/UpdateUserCommandHandler";
import { GetUserByIdQueryHandler } from "@application/users/queries/getUserById/GetUserByIdQueryHandler";
import { GetUsersQueryHandler } from "@application/users/queries/getUsers/GetUsersQueryHandler";
import { UserCommandTokens, ProductCommandTokens, CategoryCommandTokens } from "@dependency-inyection/tokens";
import { Container } from "brandi";

export const registerRequestHandlers = (container: Container) => {
    //Users
    container.bind(UserCommandTokens.GetUsersQuery).toInstance(<any>GetUsersQueryHandler).inSingletonScope();
    container.bind(UserCommandTokens.GetUserByIdQuery).toInstance(<any>GetUserByIdQueryHandler).inSingletonScope();
    container.bind(UserCommandTokens.LoginCommand).toInstance(<any>LoginCommandHandler).inSingletonScope();
    container.bind(UserCommandTokens.UpdateUserCommand).toInstance(<any>UpdateUserCommandHandler).inSingletonScope();
    container.bind(UserCommandTokens.CreateUserCommand).toInstance(<any>CreateUserCommandHandler).inSingletonScope();
    ///Products
    container.bind(ProductCommandTokens.GetProductsQuery).toInstance(<any>GetProductsQueryHandler).inSingletonScope();
    container.bind(ProductCommandTokens.UpdateProductCommand).toInstance(<any>UpdateUserCommandHandler).inSingletonScope();
    container.bind(ProductCommandTokens.CreateProductCommand).toInstance(<any>CreateUserCommandHandler).inSingletonScope();
    container.bind(ProductCommandTokens.DeleteProductCommand).toInstance(<any>DeleteProductCommand).inSingletonScope();
    ///Categories
    container.bind(CategoryCommandTokens.GetCategoriesQuery).toInstance(<any>GetCategoriesQueryHandler).inSingletonScope();
    container.bind(CategoryCommandTokens.UpdateCategoryCommand).toInstance(<any>UpdateCategoryCommandHandler).inSingletonScope();
    container.bind(CategoryCommandTokens.CreateCategoryCommand).toInstance(<any>CreateUserCommandHandler).inSingletonScope();
    container.bind(CategoryCommandTokens.DeleteCategoryCommand).toInstance(<any>DeleteCategoryCommandHandler).inSingletonScope();
};