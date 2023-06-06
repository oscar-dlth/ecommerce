import { BaseModel } from "./base/BaseModel";


export class GenericCart extends BaseModel {
    total!: number;
    userId!: number;
}
