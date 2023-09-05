import { BaseCommand } from "@application/common/baseCommands/BaseCommand";

export interface IUpdateOperation{
    update<TCommand extends BaseCommand>(dto: TCommand): Promise<number>;
}