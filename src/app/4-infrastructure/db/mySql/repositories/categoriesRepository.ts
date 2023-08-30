import { injected } from "brandi";
import { BaseRepository } from "./base/baseRepository";
import db from "../sequelizer/models";
import { Category } from "@domain/entities/Category";
import { ICategoryRepository } from "@gateways/repositories/CategoryRepository";

export class CategoryRepository extends BaseRepository<Category> implements ICategoryRepository {
    constructor() {
        super(db.Category);
    }
}

injected(CategoryRepository);