import { IUserViewModel } from "@application/users/viewModels/userViewModel";
import { TOKENS } from "@dependency-inyection/tokens";
import { IRequestHandler, requestHandler } from "mediatr-ts";
import { container } from "@dependency-inyectioncontainer";
import { GetUsersQuery } from "./GetUsersQuery";


@requestHandler(GetUsersQuery)
export class GetUsersQueryHandler implements IRequestHandler<GetUsersQuery, IUserViewModel[]>{
    async handle(request: GetUsersQuery): Promise<IUserViewModel[]> {
        const usersService = container.get(TOKENS.usersService);
        return usersService.getUsers();
    }
}
