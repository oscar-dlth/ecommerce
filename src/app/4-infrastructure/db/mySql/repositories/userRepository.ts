import { injected } from "brandi";
import { IUserRepository } from "@gateways/repositories/userRepository";
import { BaseRepository } from "./base/baseRepository";
import { User } from "@domain/entities/User";
import db from "../sequelizer/models";

export class UserRepository extends BaseRepository<User> implements IUserRepository {
    constructor() {
        super(db.User);
    }
}

injected(UserRepository);