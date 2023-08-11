import { IRequest } from "mediatr-ts";

export class DeleteProductCommand implements IRequest<number>{
    id: number;
}