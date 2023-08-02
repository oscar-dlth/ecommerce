import { ICartDetail } from "@domain/core/interfaces/ICartDetail";

export class CartDetail implements ICartDetail {
    id: number;
    quantity: number;
    subtotal: number;
    productId: number;
    cartId: number;
}
