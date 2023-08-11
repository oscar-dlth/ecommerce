import { Category } from "@domain/entities/Category";
import { IBaseRepository } from "./base/baseRepository";

export interface ICategoryRepository extends IBaseRepository<Category> {}