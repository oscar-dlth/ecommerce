import { IBaseEntity } from "./base/IBaseEntity";

export interface IUser extends IBaseEntity {
    name: string;
    nickName: string;
    email: string;
    password: string;
}
