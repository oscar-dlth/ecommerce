import { IBaseEntity } from "@domain/core/interfaces/IBaseEntity";

export class Brand implements IBaseEntity {
    id: number;
    code: string;
    name: string;
    description: string;
}
