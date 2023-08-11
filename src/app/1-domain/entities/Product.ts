import { IBaseEntity } from "@domain/core/interfaces/IBaseEntity";

export class Product implements IBaseEntity {
    id: number;
    name: string;
    sku: string;
    price: number;
    isActive: boolean;
    categoryId: number;
    brandId: number;
}