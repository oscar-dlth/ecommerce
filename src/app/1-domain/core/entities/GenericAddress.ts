import { BaseModel } from "./base/BaseModel";

export class GenericAddress extends BaseModel {
    name!: string;
    country!: string;
    city!: string;
    zip!: string;
    street!: string;
    number!: string;
    userId!: number
}
