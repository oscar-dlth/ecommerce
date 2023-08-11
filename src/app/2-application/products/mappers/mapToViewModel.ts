import { Product } from "@domain/entities/Product";
import { ProductViewModel } from "../viewModels/productViewModel";

export const mapToViewModel = (entity: Product): ProductViewModel => {
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