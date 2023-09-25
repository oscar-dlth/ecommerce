import { Category } from "@domain/entities/Category";
import { IReadOperation } from "./base/ReadOperation";
import { ICreateOperation } from "./base/CreateOperation";

export interface ICategoryService extends IReadOperation<Category> , ICreateOperation<Category> {}