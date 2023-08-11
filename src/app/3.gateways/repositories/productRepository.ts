import { IProduct } from "@domain/core/interfaces/IProduct";
import { IBaseRepository } from "./base/baseRepository";

export interface IProductRepository extends IBaseRepository<IProduct> {}