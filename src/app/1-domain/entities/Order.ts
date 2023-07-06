import { IOrder } from "@domain/core/interfaces/IOrder";

export class Order implements IOrder {
    id: number;
    total: number;
    userId: number;
    paymentId: number;
}