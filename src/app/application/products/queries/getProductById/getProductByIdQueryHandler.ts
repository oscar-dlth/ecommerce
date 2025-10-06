import { IRequestHandler, requestHandler } from "mediatr-ts";
import { container } from "@dependency-inyection/container";
import { TOKENS } from "@dependency-inyection/tokens";
import { mapToViewModel } from "../../mappers/mapToViewModel";
import { GetProductByIdQuery } from "./getProductByIdQuery";
import { ProductViewModel } from "@application/products/viewModels/productViewModel";

@requestHandler(GetProductByIdQuery)
export class GetProductByIdQueryHandler implements IRequestHandler<GetProductByIdQuery, ProductViewModel | null >{
    async handle(request: GetProductByIdQuery): Promise<ProductViewModel | null> {
        const productsService = container.get(TOKENS.productsService);
        const result =  await productsService.getById(request.id);

        if(result === null){
            return null;
        }

        return mapToViewModel(result);
    }
}