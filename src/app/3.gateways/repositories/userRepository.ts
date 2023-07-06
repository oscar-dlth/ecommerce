import { IBaseRepository } from "./base/baseRepository";
import { IUser } from "@domain/core/interfaces/IUser";

export interface IUserRepository extends IBaseRepository<IUser> {
    get(filter?: any): Promise<Array<IUser>>;
    getById(id: number): Promise<IUser | null>;
    insert(user: IUser): Promise<IUser>;
    update(user: IUser): Promise<number>;
    delete(string: string): Promise<number>;
}