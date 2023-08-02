import { IBrand } from "@domain/core/interfaces/IBrand";

export class Brand implements IBrand {
    id: number;
    code: string;
    name: string;
    description: number;
}
