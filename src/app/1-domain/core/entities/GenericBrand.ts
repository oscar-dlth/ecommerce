import { BaseModel } from "./base/BaseModel";


export class GenericBrand extends BaseModel {
    name!: string;
    sku!: string;
    price!: number;
    isActive!: boolean;
    productCategoryId!: number;
}
