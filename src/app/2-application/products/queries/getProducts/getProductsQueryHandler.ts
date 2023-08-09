import { GetUsersQuery } from "@application/users/queries/getUsers/GetUsersQuery";
import { IRequestHandler, requestHandler } from "mediatr-ts";
import { GetProductsQuery } from "./getProductsQuery";
import { BasePagedViewModel } from "@application/common/BaseViewModels/BasePagedViewModel";
import { TOKENS } from "@dependency-inyection/tokens";
import { container } from "@dependency-inyectioncontainer";
import { ProductViewModel } from "@application/products/viewModels/productViewModel";

@requestHandler(GetProductsQuery)
export class GetProductsQueryHandler implements IRequestHandler<GetProductsQuery, BasePagedViewModel<ProductViewModel>>{
    async handle(request: GetUsersQuery): Promise<BasePagedViewModel<ProductViewModel>> {
        const productsService = container.get(TOKENS.productsService);
        return productsService.get(request);
    }
}