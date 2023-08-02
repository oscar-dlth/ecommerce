import { IProduct } from "@domain/core/interfaces/IProduct";

export class Product implements IProduct {
    id: number;
    name: string;
    sku: string;
    price: number;
    isActive: boolean;
    categoryId: number;
    brandId: number;
}