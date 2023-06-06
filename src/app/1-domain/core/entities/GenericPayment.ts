import { BaseModel } from "./base/BaseModel";

export class GenericPayment extends BaseModel {
    amount!: number;
    type!: string;
}
