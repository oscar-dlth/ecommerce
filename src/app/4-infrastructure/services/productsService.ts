import { TOKENS } from "@dependency-inyection/tokens";
import { injected } from "brandi";
import { Product } from "@domain/entities/Product";
import { IProductRepository } from "@gateways/repositories/ProductRepository";
import { IProductService } from "@domain/services/ProductsService";
import { BaseCommand } from "@application/common/baseCommands/BaseCommand";
import { IReadOperation } from "@domain/services/base/ReadOperation";
import { ICreateOperation } from "@domain/services/base/CreateOperation";
import { IUpdateOperation } from "@domain/services/base/UpdateOperation";
import { IDeleteOperation } from "@domain/services/base/DeleteOperation";
import { ReadOperation } from "./base/ReadOperation";
import { CreateOperation } from "./base/CreateOperation";
import { UpdateOperation } from "./base/UpdateOperation";
import { DeleteOperation } from "./base/DeleteOperation";

export class ProductsService implements IProductService {

    private readProductOperation: IReadOperation<Product>;
    private createProductOperation: ICreateOperation<Product>;
    private updateProductOperation: IUpdateOperation;
    private deleteProductOperation: IDeleteOperation;

    constructor(productRepository: IProductRepository) {
        const searchFields = [ 'name', 'sku'];
        this.readProductOperation = new ReadOperation(productRepository, searchFields);
        this.createProductOperation = new CreateOperation(productRepository);
        this.updateProductOperation = new UpdateOperation(productRepository);
        this.deleteProductOperation = new DeleteOperation(productRepository);
    }

    get(params: { keyWord: string; page: number; size: number; }): Promise<{ rows: Product[]; count: number; }> {
        return this.readProductOperation.get(params);
    }

    getById(id: string): Promise<Product | null> {
        return this.readProductOperation.getById(id);
    }

    insert<TCommand extends BaseCommand>(dto: TCommand): Promise<Product> {
        return this.createProductOperation.insert(dto);
    }

    update<TCommand extends BaseCommand>(dto: TCommand): Promise<number> {
        return this.updateProductOperation.update(dto);
    }

    delete(id: string): Promise<number> {
        return this.deleteProductOperation.delete(id);
    }
}

injected(ProductsService, TOKENS.ProductRepository);