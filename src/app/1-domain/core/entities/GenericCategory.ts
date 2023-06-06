import { BaseModel } from "./base/BaseModel";

export class GenericCategory extends BaseModel {
    code!: string;
    name!: string;
    description!: string;
}
