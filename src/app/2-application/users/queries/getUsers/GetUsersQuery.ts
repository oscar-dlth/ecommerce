import { IRequest } from "mediatr-ts";
import { UserViewModel } from "../../viewModels/userViewModel";
import { BasePagedViewModel } from "@application/common/BaseViewModels/BasePagedViewModel";

export class GetUsersQuery implements IRequest<Promise<BasePagedViewModel<UserViewModel>>>{
    keyWord: string;
    page: number;
    size: number;
}