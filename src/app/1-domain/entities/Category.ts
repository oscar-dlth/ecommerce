import { ICategory } from "@domain/core/interfaces/ICategory";

export class Category implements ICategory {
    id: number;
    code: string;
    name: string;
    description: string;
}
