import { ICart } from "@domain/core/interfaces/ICart";

export class Cart implements ICart {
    id: number;
    total: number;
    userId: number;
}
