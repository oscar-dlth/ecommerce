import { BrandViewModel } from "@application/Brands/ViewModels/BrandViewModel";
import { BasePagedViewModel } from "@application/common/BaseViewModels/BasePagedViewModel";
import { IRequest } from "mediatr-ts";

export class GetBrandsQuery implements IRequest<Promise<BasePagedViewModel<BrandViewModel>>>{
    keyWord: string;
    page: number;
    size: number;
}