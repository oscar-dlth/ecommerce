import { IBaseEntity } from "@domain/core/interfaces/base/IBaseEntity";

export interface IBaseRepository<T extends IBaseEntity>{
    get(filter?: any): Promise<Array<T>>;
    getById(id: number): Promise<T | null>;
    insert(model: T): Promise<T>;
    update(model: T): Promise<number>;
    delete(id: string): Promise<number>;
}