import { IRequest } from "mediatr-ts";

export class UpdateCategoryCommand implements IRequest<number>{
    id: string;
    code: string;
    name: string;
    description: string;
}