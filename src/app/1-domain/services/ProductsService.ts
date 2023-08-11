import { IReadOperation } from "./base/ReadOperation";
import { ICreateOperation } from "./base/CreateOperation";
import { IUpdateOperation } from "./base/UpdateOperation";
import { IDeleteOperation } from "./base/DeleteOperation";
import { Product } from "@domain/entities/Product";

export interface IProductService  extends IReadOperation<Product>, ICreateOperation<Product>, IUpdateOperation, IDeleteOperation {}