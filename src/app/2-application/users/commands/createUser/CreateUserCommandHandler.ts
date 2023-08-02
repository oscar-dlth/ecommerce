import { IRequestHandler, requestHandler } from "mediatr-ts";
import { UserCreatedViewModel } from "@application/users/viewModels/userCreatedViewModel";
import { TOKENS } from "@dependency-inyection/tokens";
import { container } from "@dependency-inyection/container";
import { CreateUserCommand } from "./CreateUserCommand";
import { DeleteUserCommand } from "../deleteUser/DeleteUserCommand";

@requestHandler(DeleteUserCommand)
export class CreateUserCommandHandler implements IRequestHandler<CreateUserCommand, UserCreatedViewModel>{
    handle(command: CreateUserCommand): Promise<UserCreatedViewModel> {
        const userService = container.get(TOKENS.usersService);
        return userService.signin(command);
    }
}