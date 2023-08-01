import { LoginCommandHandler } from "@application/users/commands/login/LoginCommandHandler";
import { GetUserByIdQueryHandler } from "@application/users/queries/getUserById/GetUserByIdQueryHandler";
import { GetUsersQueryHandler } from "@application/users/queries/getUsers/GetUsersQueryHandler";
import { CommandTokens } from "@dependency-inyectiontokens";
import { Container } from "brandi";

export const registerRequestHandlers = (container: Container) => {
    container.bind(CommandTokens.GetUsersQuery).toInstance(GetUsersQueryHandler).inSingletonScope();
    container.bind(CommandTokens.GetUserByIdQuery).toInstance(<any>GetUserByIdQueryHandler).inSingletonScope();
    container.bind(CommandTokens.LoginCommand).toInstance(<any>LoginCommandHandler).inSingletonScope();
};