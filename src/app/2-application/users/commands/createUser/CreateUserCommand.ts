import { IRequest } from "mediatr-ts";
import { UserViewModel } from "@application/users/viewModels/userViewModel";

export class CreateUserCommand implements IRequest<UserViewModel>{ 
    name: string;
    nickName: string;
    email: string;
    password: string;
}