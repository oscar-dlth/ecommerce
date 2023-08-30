import { IRequestHandler, requestHandler } from "mediatr-ts";
import { DeleteUserCommand } from "./DeleteUserCommand";
import { container } from "@dependency-inyection/container";
import { TOKENS } from "@dependency-inyection/tokens";

@requestHandler(DeleteUserCommand)
export class DeleteUserCommandHandler implements IRequestHandler<DeleteUserCommand, number>{
    handle(command: DeleteUserCommand): Promise<number> {
        const userService = container.get(TOKENS.usersService);
        return userService.delete(command.id);
    }
}