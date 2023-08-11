import { IBaseEntity } from "@domain/core/interfaces/IBaseEntity";

export class OrderDetail implements IBaseEntity {
    id: number;
    quantity: number;
    subtotal: number;
    productId: number;
    orderId: number;
}
