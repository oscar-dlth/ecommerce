import { IBaseEntity } from "./base/IBaseEntity";

export interface IRole extends IBaseEntity {
    code: string;
    name: string;
    description: string;
}
