import { IBaseEntity } from "@domain/core/interfaces/IBaseEntity";

export class Order implements IBaseEntity {
    id: number;
    total: number;
    userId: number;
    paymentId: number;
}