import { GetUsersQuery } from "@application/users/queries/getUsers/GetUsersQuery";
import { IRequestHandler, requestHandler } from "mediatr-ts";
import { BasePagedViewModel } from "@application/common/BaseViewModels/BasePagedViewModel";
import { TOKENS } from "@dependency-inyection/tokens";
import { container } from "@dependency-inyection/container";
import { PagedViewModelMapper } from "@application/common/utils/mapToPagedViewModel";
import { GetBrandsQuery } from "./GetBrandsQuery";
import { BrandViewModel } from "@application/Brands/ViewModels/BrandViewModel";
import { mapToViewModel } from "@application/Brands/Mappers/mapToViewModel";

@requestHandler(GetBrandsQuery)
export class GetBrandsQueryHandler implements IRequestHandler<GetBrandsQuery, BasePagedViewModel<BrandViewModel>>{
    async handle(request: GetBrandsQuery): Promise<BasePagedViewModel<BrandViewModel>> {
        const brandsService = container.get(TOKENS.BrandService);
        const result =  await brandsService.get(request);
        const mapper =  new PagedViewModelMapper(mapToViewModel);
        return mapper.mapToPagedViewModel(result);
    }
}
