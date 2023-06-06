import { BaseModel } from "./base/BaseModel";

export class GenericOrder extends BaseModel {
    total!: number;
    paymentId!: number;
}