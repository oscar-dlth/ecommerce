import { IBaseEntity } from "@domain/core/interfaces/IBaseEntity";

export class CartDetail implements IBaseEntity {
    id: number;
    quantity: number;
    subtotal: number;
    productId: number;
    cartId: number;
}
