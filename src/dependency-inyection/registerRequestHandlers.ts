import { GetUserByIdQueryHandler } from "@application/users/queries/getUserById/GetUserByIdQueryHandler";
import { GetUsersQueryHandler } from "@application/users/queries/getUsers/GetUsersQueryHandler";
import { TOKENS } from "@dependency-inyectiontokens";
import { Container } from "brandi";

export const registerRequestHandlers = (container: Container) => {
    container.bind(TOKENS.GetUsersQuery).toInstance(GetUsersQueryHandler).inSingletonScope();
    container.bind(TOKENS.GetUserByIdQuery).toInstance(GetUserByIdQueryHandler).inSingletonScope();
};