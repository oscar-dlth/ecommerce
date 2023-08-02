import { LoginViewModel } from "@application/users/viewModels/LoginViewModel";
import { IRequest } from "mediatr-ts";

export class LoginCommand implements IRequest<LoginViewModel>{
    userName: string;
    password: string;
}