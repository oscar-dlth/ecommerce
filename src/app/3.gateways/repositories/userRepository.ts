import { User } from "@domain/entities/User";
import { IBaseRepository } from "./base/baseRepository";

export interface IUserRepository extends IBaseRepository<User> {}