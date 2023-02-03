import { injected } from "brandi";
import { User } from "../../../../../1-domain/entities";
import { IUserRepository } from "../../../../../3.gateways/repositories/userRepository";
import { JWTManager } from "../../../../identity/JWT/JWTManager";
import { BaseRepository } from "./base/baseRepository";

export class UserRepository extends BaseRepository<User> implements IUserRepository {
    getModelToInsert(user: User) {
        return {
            _id: '',
            name: user.name,
            nickName: user.nickName,
            email: user.email,
            password: JWTManager.encrypt(user.password),
        };
    }
}

injected(UserRepository);