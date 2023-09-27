import { container } from "@dependency-inyection/container";
import { IRequestHandler, requestHandler } from "mediatr-ts";
import { TOKENS } from "@dependency-inyection/tokens";
import { UpdateCategoryCommand } from "./UpdateCategoryCommand";

@requestHandler(UpdateCategoryCommand)
export class UpdateCategoryCommandHandler implements IRequestHandler<UpdateCategoryCommand, number >{
    handle(command: UpdateCategoryCommand): Promise<number> {
        const categoryService = container.get(TOKENS.categoryService);
        return categoryService.update(command);
    }
}