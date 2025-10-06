import { Brand } from "@domain/entities/Brand"
import { BrandViewModel } from "../ViewModels/BrandViewModel"

export const mapToViewModel = (entity: Brand): BrandViewModel => {
    return {
        id: entity.id,
        name: entity.name,
        code: entity.code,
        description: entity.description
    }
}