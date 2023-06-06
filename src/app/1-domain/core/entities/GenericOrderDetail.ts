import { BaseModel } from "./base/BaseModel";


export class GenericOrderDetail extends BaseModel {
    quantity!: number;
    subtotal!: number;
    productId!: number;
    orderId!: number;
}
