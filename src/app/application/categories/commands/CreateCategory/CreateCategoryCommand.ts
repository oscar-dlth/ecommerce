import { CategoryViewModel } from "@application/categories/viewModels/CategoryViewModel";
import { IRequest } from "mediatr-ts";

export class CreateCategoryCommand implements IRequest<CategoryViewModel>{
    code: string;
    name: string;
    description: string;
}