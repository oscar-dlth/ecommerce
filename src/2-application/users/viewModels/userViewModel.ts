import { Story } from "../../../1-domain/entities";

export class UserViewModel{
    _id!: string;
    name!: string;
    nickName!: string;
    email!: string;
    stories?: Array<Story>;
}