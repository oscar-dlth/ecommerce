import { IRequestHandler, requestHandler } from "mediatr-ts";
import { UpdateUserCommand } from "./UpdateUserCommand";
import { container } from "@dependency-inyection/container";
import { TOKENS } from "@dependency-inyection/tokens";

@requestHandler(UpdateUserCommand)
export class UpdateUserCommandHandler implements IRequestHandler<UpdateUserCommand, number >{
    handle(command: UpdateUserCommand): Promise<number> {
        const userService = container.get(TOKENS.usersService);
        return userService.update(command);
    }
}