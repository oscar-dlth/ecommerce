import { IBaseRepository } from "./base/baseRepository";
import { IUser } from "@domain/core/interfaces/IUser";

export interface IUserRepository extends IBaseRepository<IUser> {}