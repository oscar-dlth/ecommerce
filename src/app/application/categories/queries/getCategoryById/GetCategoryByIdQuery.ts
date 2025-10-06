import { CategoryViewModel } from "@application/categories/viewModels/CategoryViewModel";
import { IRequest } from "mediatr-ts";

export class GetCategoryByIdQuery implements IRequest<CategoryViewModel | null>{
    id!: string;
}