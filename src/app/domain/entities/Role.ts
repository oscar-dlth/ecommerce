import { IBaseEntity } from "@domain/core/interfaces/IBaseEntity";

export class Role implements IBaseEntity {
    id: number;
    code: string;
    name: string;
    description: string;
}
