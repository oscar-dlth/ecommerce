import { BaseModel } from "./base/BaseModel";

export class GenericCartDetail extends BaseModel {
    quantity!: number;
    subtotal!: number;
    productId!: number;
    cartId!: number;
}
