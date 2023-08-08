import { IBaseEntity } from "@domain/core/interfaces/base/IBaseEntity";

export interface IBaseRepository<T extends IBaseEntity>{
    get(filter?: any): Promise<Array<T>>;
    getPagedRows(keyWord: string, searchFields: string[], offset: number, limit: number): Promise<{rows: T[], count: number}>
    getById(id: string): Promise<T | null>;
    insert(model: T): Promise<T>;
    update(model: T): Promise<number>;
    delete(id: string): Promise<number>;
}