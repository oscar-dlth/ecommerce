import { BaseCommand } from "@application/common/baseCommands/BaseCommand";
import { IBaseEntity } from "@domain/core/interfaces/base/IBaseEntity";
import { ICreateOperation } from "@domain/services/base/CreateOperation";
import { IBaseRepository } from "@gateways/repositories/base/baseRepository";

export class CreateOperation<TEntity extends IBaseEntity> implements ICreateOperation<TEntity>{
    
    constructor(protected repository: IBaseRepository<TEntity>){}
    
    mapToEntityToInsert<TCommand extends BaseCommand>(dto: TCommand): TEntity{
        return <any>{...dto, id: 0};
    }

    async insert<TCommand extends BaseCommand>(dto: TCommand): Promise<TEntity> {
        const user: TEntity = this.mapToEntityToInsert<TCommand>(dto);
        const userInserted = await this.repository.insert(user);
        return userInserted;
    }
}
