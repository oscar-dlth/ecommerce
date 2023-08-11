import { Product } from "@domain/entities/Product";
import { IBaseRepository } from "./base/baseRepository";

export interface IProductRepository extends IBaseRepository<Product> {}