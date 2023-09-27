import { IRequestHandler, requestHandler } from "mediatr-ts";
import { container } from "@dependency-inyection/container";
import { TOKENS } from "@dependency-inyection/tokens";
import { DeleteProductCommand } from "./deleteProductCommand";

@requestHandler(DeleteProductCommand)
export class DeleteProductCommandHandler implements IRequestHandler<DeleteProductCommand, number>{
    handle(command: DeleteProductCommand): Promise<number> {
        const productsService = container.get(TOKENS.productsService);
        return productsService.delete(command.id);
    }
}