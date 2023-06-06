import { BaseModel } from "@domain/core/entities/base/BaseModel";

export interface IBaseRepository<T extends BaseModel>{
    get(filter?: any): Promise<Array<T>>;
    getById(id: number): Promise<T | null>;
    insert(model: T): Promise<T>;
    update(model: T): Promise<number>;
    delete(id: string): Promise<number>;
}