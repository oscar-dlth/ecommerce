import { GetUsersQuery } from "@application/users/queries/getUsers/GetUsersQuery";
import { IRequestHandler, requestHandler } from "mediatr-ts";
import { BasePagedViewModel } from "@application/common/BaseViewModels/BasePagedViewModel";
import { TOKENS } from "@dependency-inyection/tokens";
import { container } from "@dependency-inyectioncontainer";
import { GetCategoriesQuery } from "./getCategoriesQuery";
import { CategoryViewModel } from "@application/categories/viewModels/CategoryViewModel";
import { PagedViewModelMapper } from "@application/common/utils/mapToPagedViewModel";
import { mapToViewModel } from "@application/categories/mappers/mapToViewModel";

@requestHandler(GetCategoriesQuery)
export class GetCategoriesQueryHandler implements IRequestHandler<GetCategoriesQuery, BasePagedViewModel<CategoryViewModel>>{
    async handle(request: GetUsersQuery): Promise<BasePagedViewModel<CategoryViewModel>> {
        const categoriesService = container.get(TOKENS.categoryService);
        const result =  await categoriesService.get(request);
        const mapper =  new PagedViewModelMapper(mapToViewModel);
        return mapper.mapToPagedViewModel(result);
    }
}
