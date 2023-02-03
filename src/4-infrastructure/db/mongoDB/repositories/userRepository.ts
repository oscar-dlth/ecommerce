import { injected } from "brandi";
import { Model, Types } from "mongoose";
import { User } from "../../../../1-domain/entities";
import { IUserRepository } from "../../../../3.gateways/repositories/userRepository";
import { JWTManager } from "../../../identity/JWT/JWTManager";
import UserModel from "../models/user";
import { BaseRepository } from "./base/baseRepository";

export class UserRepository extends BaseRepository<User> implements IUserRepository {
    getModelToInsert(user: User) {
        return new UserModel({
            _id: new Types.ObjectId(),
            name: user.name,
            nickName: user.nickName,
            email: user.email,
            password: JWTManager.encrypt(user.password),
            stories: [],
            comments: []
        });
    }

    getMongooseModel(): Model<User, {}, {}> {
        return UserModel;
    }
}

injected(UserRepository);