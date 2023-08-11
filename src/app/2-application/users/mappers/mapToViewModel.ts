import { UserViewModel } from "@application/users/viewModels/userViewModel";
import { User } from "@domain/entities/User";

export const mapToViewModel = (entity: User): UserViewModel => {
    return {
        id: entity.id,
        name: entity.name,
        nickName: entity.nickName,
        email: entity.email,
    };
}