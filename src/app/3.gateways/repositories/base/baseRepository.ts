import { BaseModel } from "../../../1-domain/entities";

export interface IBaseRepository<T extends BaseModel>{
    get(filter?: any): Promise<Array<T>>;
    getById(id: number): Promise<T | null>;
    insert(model: T): Promise<T>;
    update(model: T): Promise<number>;
    delete(id: string): Promise<number>;
}