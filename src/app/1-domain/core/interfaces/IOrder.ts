import { IBaseEntity } from "./base/IBaseEntity";

export interface IOrder extends IBaseEntity {
    total: number;
    paymentId: number;
    userId: number;
}