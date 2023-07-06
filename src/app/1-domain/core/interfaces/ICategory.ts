import { IBaseEntity } from "./base/IBaseEntity";

export interface ICategory extends IBaseEntity {
    code: string;
    name: string;
    description: string;
}
