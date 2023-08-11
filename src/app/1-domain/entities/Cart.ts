import { IBaseEntity } from "@domain/core/interfaces/IBaseEntity";

export class Cart implements IBaseEntity {
    id: number;
    total: number;
    userId: number;
}
