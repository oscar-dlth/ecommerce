import { IRequestHandler, requestHandler } from "mediatr-ts";
import { UserViewModel } from "@application/users/viewModels/userViewModel";
import { container } from "@dependency-inyection/container";
import { TOKENS } from "@dependency-inyection/tokens";
import { GetUserByIdQuery } from "./GetUserByIdQuery";

@requestHandler(GetUserByIdQuery)
export class GetUserByIdQueryHandler implements IRequestHandler<GetUserByIdQuery, UserViewModel | null >{
    handle(request: GetUserByIdQuery): Promise<UserViewModel | null> {
        const usersService = container.get(TOKENS.usersService);
        return usersService.getById(request.id);
    }
}