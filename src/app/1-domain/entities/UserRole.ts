import { IUserRole } from "@domain/core/interfaces/IUserRole";

export class UserRole implements IUserRole {
    id: number;
    userId: number;
    roleId: number;
}
