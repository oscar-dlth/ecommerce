import { IBaseEntity } from "./base/IBaseEntity";

export interface IPayment extends IBaseEntity {
    amount: number;
    type: string;
}
