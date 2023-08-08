import { BasePagedViewModel } from "@application/common/BaseViewModels/BasePagedViewModel";
import { BaseViewModel } from "@application/common/BaseViewModels/BaseViewModel";
import { IBaseEntity } from "@domain/core/interfaces/base/IBaseEntity";
import { BaseService } from "@domain/services/BaseService";
import { IBaseRepository } from "@gateways/repositories/base/baseRepository";

export abstract class BaseServiceImp<TEntity extends IBaseEntity, TViewModel extends BaseViewModel, TInsertDto, TUpdateDto> implements BaseService<TViewModel, TInsertDto, TUpdateDto>{
    
    constructor(private repository: IBaseRepository<TEntity>, private searchFields: string[]){}
    
    abstract mapToViewModel(entity: TEntity): TViewModel;
    abstract mapToEntityToInsert(dto: TInsertDto): TEntity;
    abstract mapToEntityToUpdate(dto: TUpdateDto): TEntity;
    
    async get({ keyWord, page, size }: any): Promise<BasePagedViewModel<TViewModel>> {
        const data = await this.repository.getPagedRows(keyWord, this.searchFields, page, size);
        const result = data.rows.map((entity: TEntity) =>  this.mapToViewModel(entity));
        return { rows: result, count: data.count };
    }
    
    async getById(id: string): Promise<TViewModel | null> {
        const response = await this.repository.getById(id);
        
        if (response === null) {
            return null;
        }
        
        return this.mapToViewModel(response);
    }
    
    async update(dto: TUpdateDto): Promise<number> {
        const user: TEntity = this.mapToEntityToUpdate(dto)
        const result = await this.repository.update(user);
        return result;
    }

    async insert(dto: TInsertDto): Promise<TViewModel> {
        const user: TEntity = this.mapToEntityToInsert(dto);
        const userInserted = await this.repository.insert(user);
        return this.mapToViewModel(userInserted);
    }
    
    async delete(id: string): Promise<number> {
        const result = await this.repository.delete(id);
        return result;
    }
}
