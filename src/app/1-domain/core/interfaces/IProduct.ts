import { IBaseEntity } from "./base/IBaseEntity";

export interface IProduct extends IBaseEntity {
    name: string;
    sku: string;
    price: number;
    isActive: boolean;
    categoryId: number;
    brandId: number;
}