import { BaseModel } from "./base/BaseModel";

export class GenericProduct extends BaseModel {
    name!: string;
    sku!: string;
    price!: number;
    isActive!: boolean;
    categoryId!: number;
    brandId!: number;
}