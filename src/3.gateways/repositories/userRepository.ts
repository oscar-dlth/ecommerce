import { Observable } from "rxjs";
import { User } from "../../1-domain/entities";
import { IBaseRepository } from "./base/baseRepository";

export interface IUserRepository extends IBaseRepository<User> {
    get(filter?: any): Promise<Array<User>>;
    getById(id: number): Promise<User | null>;
    insert(user: User): Promise<User>;
    update(user: User): Promise<number>;
    delete(string: string): Promise<number>;
}