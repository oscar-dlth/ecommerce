import { IBaseEntity } from "@domain/core/interfaces/IBaseEntity";
import { IReadOperation } from "@domain/services/base/ReadOperation";
import { IBaseRepository } from "@gateways/repositories/base/baseRepository";

export class ReadOperation<TEntity extends IBaseEntity> implements IReadOperation<TEntity>{
    
    constructor(protected repository: IBaseRepository<TEntity>, private searchFields: string[]){}
    
    async get({ keyWord, page, size }: any): Promise<{ rows: TEntity[], count: number}> {
        return await this.repository.getPagedRows(keyWord, this.searchFields, page, size);
    }
    
    async getById(id: string): Promise<TEntity | null> {
        return await this.repository.getById(id);
    }
}
