import { CategoryViewModel } from "@application/categories/viewModels/CategoryViewModel";
import { BasePagedViewModel } from "@application/common/BaseViewModels/BasePagedViewModel";
import { IRequest } from "mediatr-ts";

export class GetCategoriesQuery implements IRequest<Promise<BasePagedViewModel<CategoryViewModel>>>{
    keyWord: string;
    page: number;
    size: number;
}