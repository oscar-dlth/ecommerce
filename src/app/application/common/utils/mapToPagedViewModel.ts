import { IBaseEntity } from "@domain/core/interfaces/IBaseEntity";
import { BasePagedViewModel } from "../BaseViewModels/BasePagedViewModel";
import { BaseViewModel } from "../BaseViewModels/BaseViewModel";

export class PagedViewModelMapper<TEntity extends IBaseEntity, TViewModel extends BaseViewModel>{
    constructor(private mapper: (entity: TEntity) => TViewModel){}
    
    public mapToPagedViewModel(result: { rows: TEntity[], count: number }): BasePagedViewModel<TViewModel>{
        return {
            ...result,
            rows: result.rows.map( a => this.mapper(a)),
        };
    }
}
