import { IRole } from "@domain/core/interfaces/IRole";

export class Role implements IRole {
    id: number;
    code: string;
    name: string;
    description: string;
}
