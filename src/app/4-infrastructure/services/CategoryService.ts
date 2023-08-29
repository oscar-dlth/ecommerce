import { injected } from "brandi";
import { Category } from "@domain/entities/Category";
import { BaseCommand } from "@application/common/baseCommands/BaseCommand";
import { ReadOperation } from "./base/ReadOperation";
import { CreateOperation} from "./base/CreateOperation";
import { TOKENS } from "@dependency-inyection/tokens";
import { ICategoryService } from "@domain/services/CategoryService";
import { ICreateOperation } from "@domain/services/base/CreateOperation";
import { IReadOperation } from "@domain/services/base/ReadOperation";
import { ICategoryRepository } from "@gateways/repositories/CategoryRepository";

export class CategoryService implements ICategoryService {

    private readCategoryOperation: IReadOperation<Category>;
    private createCategoryOperation: ICreateOperation<Category>;

    constructor(categoryRepository: ICategoryRepository) {
        this.readCategoryOperation = new ReadOperation(categoryRepository, ['name', 'code']);
        this.createCategoryOperation = new CreateOperation(categoryRepository);
    }

    get(params: { keyWord: string; page: number; size: number; }): Promise<{ rows: Category[]; count: number; }> {
        return this.readCategoryOperation.get(params)
    }

    getById(id: string): Promise<Category | null> {
        return this.readCategoryOperation.getById(id);
    }

    insert<TCommand extends BaseCommand>(dto: TCommand): Promise<Category> {
        return this.createCategoryOperation.insert(dto);
    }

}

injected(CategoryService, TOKENS.CategoryRepository);