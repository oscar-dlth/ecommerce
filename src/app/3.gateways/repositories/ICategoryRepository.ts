import { Category } from "@domain/entities/Category";
import { IBaseRepository } from "./base/IBaseRepository";

export interface ICategoryRepository extends IBaseRepository<Category> {}