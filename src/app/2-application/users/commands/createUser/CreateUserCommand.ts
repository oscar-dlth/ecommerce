import { IRequest } from "mediatr-ts";
import { UserCreatedViewModel } from "../../viewModels/userCreatedViewModel";

export class CreateUserCommand implements IRequest<UserCreatedViewModel>{ 
    name: string;
    nickName: string;
    email: string;
    password: string;
}