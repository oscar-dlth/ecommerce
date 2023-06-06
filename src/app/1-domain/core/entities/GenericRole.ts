import { BaseModel } from "./base/BaseModel";

export class GenericRole extends BaseModel {
    code!: string;
    name!: string;
    description!: string;
}
