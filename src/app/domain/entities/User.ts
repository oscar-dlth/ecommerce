import { IBaseEntity } from "@domain/core/interfaces/IBaseEntity";

export class User implements IBaseEntity {
    id: number;
    name: string;
    nickName: string;
    email: string;
    password: string;
}
