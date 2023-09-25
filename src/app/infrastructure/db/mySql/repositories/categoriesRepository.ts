import { injected } from "brandi";
import { BaseRepository } from "./base/baseRepository";
import db from "../sequelizer/models";
import { Category } from "@domain/entities/Category";
import { ICategoryRepository } from "@gateways/repositories/ICategoryRepository";

export class CategoriesRepository extends BaseRepository<Category> implements ICategoryRepository {
    constructor() {
        super(db.Category);
    }
}

injected(CategoriesRepository);