import { IRequestHandler, requestHandler } from "mediatr-ts";
import { CreateProductCommand } from "./createProductCommand";
import { ProductViewModel } from "@application/products/viewModels/productViewModel";
import { container } from "@dependency-inyection/container";
import { TOKENS } from "@dependency-inyection/tokens";

@requestHandler(CreateProductCommand)
export class CreateUserCommandHandler implements IRequestHandler<CreateProductCommand, ProductViewModel>{
    handle(command: CreateProductCommand): Promise<ProductViewModel> {
        const userService = container.get(TOKENS.productsService);
        return userService.insert(command);
    }
}