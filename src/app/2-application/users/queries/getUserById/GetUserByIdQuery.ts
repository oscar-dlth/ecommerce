import { IUserViewModel } from "@application/users/viewModels/userViewModel";
import { IRequest } from "mediatr-ts";

export class GetUserByIdQuery implements IRequest<IUserViewModel | null>{
    id!: string;
}