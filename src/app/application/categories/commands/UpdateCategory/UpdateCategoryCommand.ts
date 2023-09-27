import { IRequest } from "mediatr-ts";

export class UpdateCategoryCommand implements IRequest<number>{
    id: number;
    name: string;
    description: string;
}