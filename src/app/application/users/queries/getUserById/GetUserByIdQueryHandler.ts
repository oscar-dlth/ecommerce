import { IRequestHandler, requestHandler } from "mediatr-ts";
import { UserViewModel } from "@application/users/viewModels/userViewModel";
import { container } from "@dependency-inyection/container";
import { TOKENS } from "@dependency-inyection/tokens";
import { GetUserByIdQuery } from "./GetUserByIdQuery";
import { mapToViewModel } from "../../mappers/mapToViewModel";

@requestHandler(GetUserByIdQuery)
export class GetUserByIdQueryHandler implements IRequestHandler<GetUserByIdQuery, UserViewModel | null >{
    async handle(request: GetUserByIdQuery): Promise<UserViewModel | null> {
        const usersService = container.get(TOKENS.usersService);
        const result =  await usersService.getById(request.id);

        if(result === null){
            return null;
        }

        return mapToViewModel(result);
    }
}