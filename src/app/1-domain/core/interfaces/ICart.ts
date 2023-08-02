import { IBaseEntity } from "./base/IBaseEntity";


export interface ICart extends IBaseEntity {
    total: number;
    userId: number;
}
