import { IBaseEntity } from "./base/IBaseEntity";

export interface IAddress extends IBaseEntity {
    name: string;
    country: string;
    city: string;
    zip: string;
    street: string;
    number: string;
    userId: number
}
