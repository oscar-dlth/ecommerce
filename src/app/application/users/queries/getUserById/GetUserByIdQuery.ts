import { UserViewModel } from "@application/users/viewModels/userViewModel";
import { IRequest } from "mediatr-ts";

export class GetUserByIdQuery implements IRequest<UserViewModel | null>{
    id!: string;
}