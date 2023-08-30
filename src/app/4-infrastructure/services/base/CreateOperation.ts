import { BaseCommand } from "@application/common/baseCommands/BaseCommand";
import { IBaseEntity } from "@domain/core/interfaces/IBaseEntity";
import { ICreateOperation } from "@domain/services/base/CreateOperation";
import { IBaseRepository } from "@gateways/repositories/base/IBaseRepository";

export class CreateOperation<TEntity extends IBaseEntity> implements ICreateOperation<TEntity>{
    
    constructor(protected repository: IBaseRepository<TEntity>){}
    
    async insert<TCommand extends BaseCommand>(dto: TCommand): Promise<TEntity> {
        return await this.repository.insert(<any>dto);
    }
}
