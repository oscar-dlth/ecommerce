import { IBaseEntity } from "./base/IBaseEntity";


export interface IOrderDetail extends IBaseEntity {
    quantity: number;
    subtotal: number;
    productId: number;
    orderId: number;
}
