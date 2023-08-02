import { IBaseEntity } from "./base/IBaseEntity";

export interface IUserRole extends IBaseEntity {
    userId: number;
    roleId: number;
}
