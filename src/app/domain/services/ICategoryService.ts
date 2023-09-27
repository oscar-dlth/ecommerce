import { Category } from "@domain/entities/Category";
import { IReadOperation } from "./base/ReadOperation";
import { ICreateOperation } from "./base/CreateOperation";
import { IDeleteOperation } from "./base/DeleteOperation";
import { IUpdateOperation } from "./base/UpdateOperation";

export interface ICategoryService extends IReadOperation<Category> , ICreateOperation<Category>, IDeleteOperation, IUpdateOperation {}