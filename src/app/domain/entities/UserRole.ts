import { IBaseEntity } from "@domain/core/interfaces/IBaseEntity";

export class UserRole implements IBaseEntity {
    id: number;
    userId: number;
    roleId: number;
}
