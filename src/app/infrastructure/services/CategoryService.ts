import { injected } from "brandi";
import { Category } from "@domain/entities/Category";
import { BaseCommand } from "@application/common/baseCommands/BaseCommand";
import { ReadOperation } from "./base/ReadOperation";
import { CreateOperation} from "./base/CreateOperation";
import { TOKENS } from "@dependency-inyection/tokens";
import { ICategoryService } from "@domain/services/ICategoryService";
import { ICreateOperation } from "@domain/services/base/CreateOperation";
import { IReadOperation } from "@domain/services/base/ReadOperation";
import { ICategoryRepository } from "@gateways/repositories/ICategoryRepository";
import { IUpdateOperation } from "@domain/services/base/UpdateOperation";
import { IDeleteOperation } from "@domain/services/base/DeleteOperation";
import { UpdateOperation } from "./base/UpdateOperation";
import { DeleteOperation } from "./base/DeleteOperation";

export class CategoryService implements ICategoryService {

    private readCategoryOperation: IReadOperation<Category>;
    private createCategoryOperation: ICreateOperation<Category>;
    private updateCategoryOperation: IUpdateOperation;
    private deleteCategoryOperation: IDeleteOperation;

    constructor(categoryRepository: ICategoryRepository) {
        this.readCategoryOperation = new ReadOperation(categoryRepository, ['name', 'code']);
        this.createCategoryOperation = new CreateOperation(categoryRepository);
        this.updateCategoryOperation = new UpdateOperation(categoryRepository);
        this.deleteCategoryOperation = new DeleteOperation(categoryRepository);
    }
    delete(id: string): Promise<number> {
        return this.deleteCategoryOperation.delete(id);
    }
    update<TCommand extends BaseCommand>(dto: TCommand): Promise<number> {
        return this.updateCategoryOperation.update(dto);
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