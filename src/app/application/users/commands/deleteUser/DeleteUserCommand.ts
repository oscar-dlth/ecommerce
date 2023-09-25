import { IRequest } from "mediatr-ts";

export class DeleteUserCommand implements IRequest<number>{
    id: string;
}