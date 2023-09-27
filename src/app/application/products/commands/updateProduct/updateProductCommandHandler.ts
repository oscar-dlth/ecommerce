import { container } from "@dependency-inyection/container";
import { UpdateProductCommand } from "./updateProductCommand";
import { IRequestHandler, requestHandler } from "mediatr-ts";
import { TOKENS } from "@dependency-inyection/tokens";

@requestHandler(UpdateProductCommand)
export class UpdateProductCommandHandler implements IRequestHandler<UpdateProductCommand, number >{
    handle(command: UpdateProductCommand): Promise<number> {
        const productsService = container.get(TOKENS.productsService);
        return productsService.update(command);
    }
}