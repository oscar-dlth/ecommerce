import { IRequest } from "mediatr-ts";

export class UpdateProductCommand implements IRequest<number>{
    id!: number;
    name: string;
    sku: string;
    price: number;
    categoryId: number;
    brandId: number;
    isActive: boolean;
}