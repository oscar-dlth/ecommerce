import { Observable } from "rxjs";
import { BaseModel } from "../../../1-domain/entities";

export interface IBaseRepository<T extends BaseModel>{
    get(filter?: any): Observable<Array<T>>;
    getById(id: string): Observable<T | null>;
    insert(user: T): Observable<T>;
    update(user: T): Observable<boolean>;
    delete(id: string): Observable<boolean>;
}