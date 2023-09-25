import { IBaseEntity } from "@domain/core/interfaces/IBaseEntity";

export class Address implements IBaseEntity {
    id: number;
    name: string;
    country: string;
    city: string;
    zip: string;
    street: string;
    number: string;
    userId: number;
}
