import { IBaseEntity } from "@domain/core/interfaces/IBaseEntity";
import { IDeleteOperation } from "@domain/services/base/DeleteOperation";
import { IBaseRepository } from "@gateways/repositories/base/baseRepository";

export class DeleteOperation<TEntity extends IBaseEntity> implements IDeleteOperation{
    
    constructor(protected repository: IBaseRepository<TEntity>){}
    
    async delete(id: string): Promise<number> {
        const result = await this.repository.delete(id);
        return result;
    }
}
