import { IAddress } from "@domain/core/interfaces/IAddress";

export class Address implements IAddress {
    id: number;
    name: string;
    country: string;
    city: string;
    zip: string;
    street: string;
    number: string;
    userId: number;
}
