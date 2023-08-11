import { BasePagedViewModel } from "@application/common/BaseViewModels/BasePagedViewModel";
import { ProductViewModel } from "@application/products/viewModels/productViewModel";
import { IRequest } from "mediatr-ts";

export class GetProductsQuery implements IRequest<Promise<BasePagedViewModel<ProductViewModel>>>{
    keyWord: string;
    page: number;
    size: number;
}