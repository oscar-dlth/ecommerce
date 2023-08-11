import { BaseCommand } from "@application/common/baseCommands/BaseCommand";
import { IBaseEntity } from "@domain/core/interfaces/IBaseEntity";
import { IUpdateOperation } from "@domain/services/base/UpdateOperation";
import { IBaseRepository } from "@gateways/repositories/base/baseRepository";

export class UpdateOperation<TEntity extends IBaseEntity> implements IUpdateOperation{
    
    constructor(protected repository: IBaseRepository<TEntity>){}
    
    async update<TCommand extends BaseCommand>(dto: TCommand): Promise<number> {
        const entity: TEntity = this.mapToEntityToUpdate<TCommand>(dto);
        const entriesUpdated = await this.repository.update(entity);
        return entriesUpdated;
    }
    
    private mapToEntityToUpdate<TCommand extends BaseCommand>(dto: TCommand): TEntity{
        return <any>{...dto };
    }
}
