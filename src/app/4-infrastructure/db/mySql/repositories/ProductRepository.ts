import { injected } from "brandi";
import { BaseRepository } from "./base/baseRepository";
import db from "../sequelizer/models";
import { Product } from "@domain/entities/Product";
import { IProductRepository } from "@gateways/repositories/ProductRepository";

export class ProductRepository extends BaseRepository<Product> implements IProductRepository {
    constructor() {
        super(db.Product);
    }
}

injected(ProductRepository);