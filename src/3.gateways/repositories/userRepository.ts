import { Observable } from "rxjs";
import { User } from "../../1-domain/entities";
import { IBaseRepository } from "./base/baseRepository";

export interface IUserRepository extends IBaseRepository<User> {
    get(filter?: any): Observable<Array<User>>;
    getById(id: string): Observable<User | null>;
    insert(user: User): Observable<User>;
    update(user: User): Observable<boolean>;
    delete(id: string): Observable<boolean>;
}