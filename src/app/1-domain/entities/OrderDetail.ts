import { IOrderDetail } from "@domain/core/interfaces/IOrderDetail";

export class OrderDetail implements IOrderDetail {
    id: number;
    quantity: number;
    subtotal: number;
    productId: number;
    orderId: number;
}
