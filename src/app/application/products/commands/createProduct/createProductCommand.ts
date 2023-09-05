import { ProductViewModel } from "@application/products/viewModels/productViewModel";
import { IRequest } from "mediatr-ts";

export class CreateProductCommand implements IRequest<ProductViewModel>{
    name: string;
    sku: string;
    price: number;
    categoryId: number;
    brandId: number;
    isActive: boolean;
}