import { IRequest } from "mediatr-ts";

export class DeleteCategoryCommand implements IRequest<number>{
    id: string;
}