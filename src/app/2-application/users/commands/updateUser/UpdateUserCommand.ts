import { IRequest } from "mediatr-ts";

export class UpdateUserCommand implements IRequest<number>{
    id!: number;
    name!: string;
    nickName!: string;
    email!: string;
}