import { IRequestHandler, requestHandler } from "mediatr-ts";
import { TOKENS } from "@dependency-inyection/tokens";
import { container } from "@dependency-inyection/container";
import { CreateCategoryCommand } from "./CreateCategoryCommand";
import { CategoryViewModel } from "@application/categories/viewModels/CategoryViewModel";

@requestHandler(CreateCategoryCommand)
export class CreateCategoryCommandHandler implements IRequestHandler<CreateCategoryCommand, CategoryViewModel>{
    handle(command: CreateCategoryCommand): Promise<CategoryViewModel> {
        const categoryService = container.get(TOKENS.categoryService);
        return categoryService.insert(command);
    }
}