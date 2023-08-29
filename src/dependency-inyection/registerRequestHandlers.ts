import { GetCategoriesQueryHandler } from "@application/categories/queries/getCategories/getCategoriesQueryHandler";
import { GetProductsQueryHandler } from "@application/products/queries/getProducts/getProductsQueryHandler";
import { CreateUserCommandHandler } from "@application/users/commands/createUser/CreateUserCommandHandler";
import { LoginCommandHandler } from "@application/users/commands/login/LoginCommandHandler";
import { UpdateUserCommandHandler } from "@application/users/commands/updateUser/UpdateUserCommandHandler";
import { GetUserByIdQueryHandler } from "@application/users/queries/getUserById/GetUserByIdQueryHandler";
import { GetUsersQueryHandler } from "@application/users/queries/getUsers/GetUsersQueryHandler";
import { CategoriesCommandTokens, UserCommandTokens, ProductCommandTokens } from "@dependency-inyection/tokens";
import { Container } from "brandi";

export const registerRequestHandlers = (container: Container) => {
    container.bind(UserCommandTokens.GetUsersQuery).toInstance(<any>GetUsersQueryHandler).inSingletonScope();
    container.bind(UserCommandTokens.GetUserByIdQuery).toInstance(<any>GetUserByIdQueryHandler).inSingletonScope();
    container.bind(UserCommandTokens.LoginCommand).toInstance(<any>LoginCommandHandler).inSingletonScope();
    container.bind(UserCommandTokens.UpdateUserCommand).toInstance(<any>UpdateUserCommandHandler).inSingletonScope();
    container.bind(UserCommandTokens.CreateUserCommand).toInstance(<any>CreateUserCommandHandler).inSingletonScope();
    ///Products
    container.bind(ProductCommandTokens.GetProductsQuery).toInstance(<any>GetProductsQueryHandler).inSingletonScope();
    ///Categories
    container.bind(CategoriesCommandTokens.GetCategoriesQuery).toInstance(<any>GetCategoriesQueryHandler).inSingletonScope();
};