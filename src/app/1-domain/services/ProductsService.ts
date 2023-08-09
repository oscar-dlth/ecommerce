import { CreateProductCommand } from "@application/products/commands/createProduct/createProductCommand";
import { BaseService } from "./BaseService";
import { ProductViewModel } from "@application/products/viewModels/productViewModel";
import { UpdateProductCommand } from "@application/products/commands/updateProduct/updateProductCommand";

export interface IProductsService  extends BaseService<ProductViewModel, CreateProductCommand, UpdateProductCommand> {}