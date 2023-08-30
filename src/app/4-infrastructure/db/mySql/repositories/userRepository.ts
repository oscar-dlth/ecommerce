import { injected } from "brandi";
import { BaseRepository } from "./base/baseRepository";
import db from "../sequelizer/models";
import { User } from "@domain/entities/User";
import { IUserRepository } from "@gateways/repositories/IUserRepository";

export class UserRepository extends BaseRepository<User> implements IUserRepository {
    constructor() {
        super(db.User);
    }
}

injected(UserRepository);