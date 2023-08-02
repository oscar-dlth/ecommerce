import { IBaseEntity } from "./base/IBaseEntity";

export interface ICartDetail extends IBaseEntity {
    quantity: number;
    subtotal: number;
    productId: number;
    cartId: number;
}
