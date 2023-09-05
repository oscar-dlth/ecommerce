import { IBaseEntity } from "@domain/core/interfaces/IBaseEntity";

export class Category implements IBaseEntity {
    id: number;
    code: string;
    name: string;
    description: string;
}
