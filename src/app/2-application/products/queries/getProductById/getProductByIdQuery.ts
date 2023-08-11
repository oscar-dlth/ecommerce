import { ProductViewModel } from "@application/products/viewModels/productViewModel";
import { IRequest } from "mediatr-ts";

export class GetProductByIdQuery implements IRequest<ProductViewModel | null>{
    id!: string;
}