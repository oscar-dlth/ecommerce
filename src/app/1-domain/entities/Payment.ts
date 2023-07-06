import { IPayment } from "@domain/core/interfaces/IPayment";

export class Payment implements IPayment {
    id: number;
    amount: number;
    type: string;
}
