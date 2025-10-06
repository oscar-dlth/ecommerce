import { IRequestHandler, requestHandler } from "mediatr-ts";
import { container } from "@dependency-inyection/container";
import { TOKENS } from "@dependency-inyection/tokens";
import { DeleteCategoryCommand } from "./DeleteCategoryCommand";

@requestHandler(DeleteCategoryCommand)
export class DeleteCategoryCommandHandler implements IRequestHandler<DeleteCategoryCommand, number>{
    handle(command: DeleteCategoryCommand): Promise<number> {
        const categoryService = container.get(TOKENS.categoryService);
        return categoryService.delete(command.id);
    }
}