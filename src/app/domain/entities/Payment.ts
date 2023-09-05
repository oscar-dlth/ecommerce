import { IBaseEntity } from "@domain/core/interfaces/IBaseEntity";

export class Payment implements IBaseEntity {
    id: number;
    amount: number;
    type: string;
}
