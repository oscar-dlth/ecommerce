import { IRequestHandler, requestHandler } from "mediatr-ts";
import { container } from "@dependency-inyection/container";
import { TOKENS } from "@dependency-inyection/tokens";
import { mapToViewModel } from "../../mappers/mapToViewModel";
import { GetCategoryByIdQuery } from "./GetCategoryByIdQuery";
import { CategoryViewModel } from "@application/categories/viewModels/CategoryViewModel";

@requestHandler(GetCategoryByIdQuery)
export class GetCategoryByIdQueryHandler implements IRequestHandler<GetCategoryByIdQuery, CategoryViewModel | null >{
    async handle(request: GetCategoryByIdQuery): Promise<CategoryViewModel | null> {
        const categoryService = container.get(TOKENS.categoryService);
        const result =  await categoryService.getById(request.id);

        if(result === null){
            return null;
        }

        return mapToViewModel(result);
    }
}