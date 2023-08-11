import { BaseCommand } from "@application/common/baseCommands/BaseCommand";
import { IBaseEntity } from "@domain/core/interfaces/base/IBaseEntity";

export interface ICreateOperation<TEntity extends IBaseEntity>{
    insert<TCommand extends BaseCommand>(dto: TCommand): Promise<TEntity>;
}