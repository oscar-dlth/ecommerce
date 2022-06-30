import { Observable } from "rxjs";
import { User } from "../../1-domain/entities";

export interface IUserRepository {
    get(): Observable<Array<User>>;
    getById(id: string): Observable<User | null>;
    insert(user: User): Observable<User>;
    update(user: User): Observable<boolean>;
    delete(id: string): Observable<boolean>;
}