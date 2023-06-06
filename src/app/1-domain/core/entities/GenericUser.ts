import { BaseModel } from "./base/BaseModel";

export class GenericUser extends BaseModel {
    id!: number;
    name!: string;
    nickName!: string;
    email!: string;
    password!: string;
}
