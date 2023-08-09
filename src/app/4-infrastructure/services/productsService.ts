import { TOKENS } from "@dependency-inyection/tokens";
import { injected } from "brandi";
import { BaseServiceImp } from "./BaseServiceImp";
import { Product } from "@domain/entities/Product";
import { ProductViewModel } from "@application/products/viewModels/productViewModel";
import { CreateProductCommand } from "@application/products/commands/createProduct/createProductCommand";
import { UpdateProductCommand } from "@application/products/commands/updateProduct/updateProductCommand";
import { IProductRepository } from "@gateways/repositories/productRepository";

export class ProductsService extends BaseServiceImp<Product, ProductViewModel, CreateProductCommand, UpdateProductCommand> {
    constructor(productRepository: IProductRepository) {
        const searchFields = [ 'name', 'sku']
        super(productRepository, searchFields);
    }
    
    mapToEntityToInsert(dto: CreateProductCommand): Product {
        return { ...dto, id: 0 };
    }

    mapToEntityToUpdate(dto: UpdateProductCommand): Product {
        return { ...dto };
    }
    
    mapToViewModel(entity: Product): ProductViewModel {
        return {
            id: entity.id,
            name: entity.name,
            sku: entity.sku,
            price: entity.price,
            categoryId: entity.categoryId,
            brandId: entity.brandId,
            isActive: entity.isActive
        };
    }
}

injected(ProductsService, TOKENS.ProductRepository);