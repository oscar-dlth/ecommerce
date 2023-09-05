import { User } from "@domain/entities/User";
import { IBaseRepository } from "./base/IBaseRepository";

export interface IUserRepository extends IBaseRepository<User> {}