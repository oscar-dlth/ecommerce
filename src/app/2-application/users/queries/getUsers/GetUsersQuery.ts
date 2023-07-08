import { IRequest } from "mediatr-ts";
import { IUserViewModel } from "../../viewModels/userViewModel";

export class GetUsersQuery implements IRequest<IUserViewModel[]>{ }