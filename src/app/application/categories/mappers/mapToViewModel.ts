import { Category } from "@domain/entities/Category";
import { CategoryViewModel } from "../viewModels/CategoryViewModel";

export const mapToViewModel = (entity: Category): CategoryViewModel => {
    return {
        id: entity.id,
        name: entity.name,
        code: entity.code,
        description: entity.description
    }
}