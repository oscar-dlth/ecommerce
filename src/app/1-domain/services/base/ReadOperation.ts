import { IBaseEntity } from "@domain/core/interfaces/base/IBaseEntity";

export interface IReadOperation<TEntity extends IBaseEntity>{
    get(params : { keyWord: string, page: number, size: number}): Promise<{ rows: TEntity[], count: number}>;
    getById(id: string): Promise<TEntity | null>;
}