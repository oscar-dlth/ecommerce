import { BasePagedViewModel } from "@application/common/BaseViewModels/BasePagedViewModel";
import { BaseViewModel } from "@application/common/BaseViewModels/BaseViewModel";

export interface BaseService<TViewModel extends BaseViewModel, TUpdateDto, TInsertDto>{
    get(params : { keyWord: string, page: number, size: number}): Promise<BasePagedViewModel<TViewModel>>;
    getById(id: string): Promise<TViewModel | null>;
    insert(dto: any): Promise<TViewModel>;
    update(dto: any): Promise<number>
    delete(id: string): Promise<number>;
}