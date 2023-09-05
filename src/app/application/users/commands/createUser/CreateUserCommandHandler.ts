import { IRequestHandler, requestHandler } from "mediatr-ts";
import { TOKENS } from "@dependency-inyection/tokens";
import { container } from "@dependency-inyection/container";
import { CreateUserCommand } from "./CreateUserCommand";
import { UserViewModel } from "@application/users/viewModels/userViewModel";

@requestHandler(CreateUserCommand)
export class CreateUserCommandHandler implements IRequestHandler<CreateUserCommand, UserViewModel>{
    handle(command: CreateUserCommand): Promise<UserViewModel> {
        const userService = container.get(TOKENS.usersService);
        return userService.insert(command);
    }
}