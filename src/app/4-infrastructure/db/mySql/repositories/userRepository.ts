import { injected } from "brandi";
import { User } from "@domain/entities";
import { IUserRepository } from "@gateways/repositories/userRepository";
import { JWTManager } from "../../../identity/JWT/JWTManager";
import { BaseRepository } from "./base/baseRepository";

export class UserRepository extends BaseRepository<User> implements IUserRepository {
    
    override onUpdateEntity(entity: User): User {
        return {
            ...entity,
            password: JWTManager.encrypt(entity.password),
        }
    }
    
}

injected(UserRepository);