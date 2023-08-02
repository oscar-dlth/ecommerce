import { IRequestHandler, requestHandler } from "mediatr-ts";
import { IUserViewModel } from "@application/users/viewModels/userViewModel";
import { container } from "@dependency-inyection/container";
import { TOKENS } from "@dependency-inyection/tokens";
import { GetUserByIdQuery } from "./GetUserByIdQuery";

@requestHandler(GetUserByIdQuery)
export class GetUserByIdQueryHandler implements IRequestHandler<GetUserByIdQuery, IUserViewModel | null >{
    handle(request: GetUserByIdQuery): Promise<IUserViewModel | null> {
        const usersService = container.get(TOKENS.usersService);
        return usersService.getById(request.id);
    }
}