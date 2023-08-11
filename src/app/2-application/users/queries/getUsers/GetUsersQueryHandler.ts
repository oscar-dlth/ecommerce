import { UserViewModel } from "@application/users/viewModels/userViewModel";
import { TOKENS } from "@dependency-inyection/tokens";
import { IRequestHandler, requestHandler } from "mediatr-ts";
import { container } from "@dependency-inyectioncontainer";
import { GetUsersQuery } from "./GetUsersQuery";
import { BasePagedViewModel } from "@application/common/BaseViewModels/BasePagedViewModel";
import { PagedViewModelMapper } from "@application/common/utils/mapToPagedViewModel";
import { mapToViewModel } from "../../mappers/mapToViewModel";


@requestHandler(GetUsersQuery)
export class GetUsersQueryHandler implements IRequestHandler<GetUsersQuery, BasePagedViewModel<UserViewModel>>{
    async handle(request: GetUsersQuery): Promise<BasePagedViewModel<UserViewModel>> {
        const usersService = container.get(TOKENS.usersService);
        const result =  await usersService.get(request);
        const mapper =  new PagedViewModelMapper(mapToViewModel);
        return mapper.mapToPagedViewModel(result);
    }
}
