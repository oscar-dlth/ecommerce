import { IUser } from "@domain/core/interfaces/IUser";

export class User implements IUser {
    id: number;
    name: string;
    nickName: string;
    email: string;
    password: string;
}
