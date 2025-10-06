import { injected } from "brandi";
import { BaseRepository } from "./base/baseRepository";
import db from "../sequelizer/models";
import { Brand } from "@domain/entities/Brand";
import { IBrandRepository } from "@gateways/repositories/IBrandRepository";

export class BrandsRepository extends BaseRepository<Brand> implements IBrandRepository {
    constructor() {
        super(db.Brand);
    }
}

injected(BrandsRepository);