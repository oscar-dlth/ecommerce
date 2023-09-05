import { IRequestHandler, requestHandler } from "mediatr-ts";
import { LoginCommand } from "./LoginCommand";
import { LoginViewModel } from "@application/users/viewModels/LoginViewModel";
import { container } from "@dependency-inyection/container";
import { TOKENS } from "@dependency-inyection/tokens";

@requestHandler(LoginCommand)
export class LoginCommandHandler implements IRequestHandler<LoginCommand, LoginViewModel>{
    async handle(command: LoginCommand): Promise<LoginViewModel> {
        const authService = container.get(TOKENS.AuthService);
        return await authService.login(command.userName, command.password);
    }
}