import { IBaseEntity } from "./base/IBaseEntity";

export interface IBrand extends IBaseEntity {
    id: number;
    code: string;
    name: string;
    description: number;
}
