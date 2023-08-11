import { GetUsersQuery } from "@application/users/queries/getUsers/GetUsersQuery";
import { IRequestHandler, requestHandler } from "mediatr-ts";
import { BasePagedViewModel } from "@application/common/BaseViewModels/BasePagedViewModel";
import { TOKENS } from "@dependency-inyection/tokens";
import { container } from "@dependency-inyectioncontainer";
import { GetCategoriesQuery } from "./getCategoriesQuery";
import { CategoryViewModel } from "@application/categories/viewModels/CategoryViewModel";
import { Category } from "@domain/entities/Category";

@requestHandler(GetCategoriesQuery)
export class GetCategoriesQueryHandler implements IRequestHandler<GetCategoriesQuery, BasePagedViewModel<CategoryViewModel>>{
    async handle(request: GetUsersQuery): Promise<BasePagedViewModel<CategoryViewModel>> {
        const categoriesService = container.get(TOKENS.categoryService);

        const result =  await categoriesService.get(request);

        return {
            ...result,
            rows: result.rows.map( a => this.mapToViewModel(a)),
        }
    }

    private mapToViewModel(category: Category): CategoryViewModel{
        return {
            id: category.id,
            name: category.name,
            code: category.code,
            description: category.description
        }
    }
}
