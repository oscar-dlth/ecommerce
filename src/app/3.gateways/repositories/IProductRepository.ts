import { Product } from "@domain/entities/Product";
import { IBaseRepository } from "./base/IBaseRepository";

export interface IProductRepository extends IBaseRepository<Product> {}