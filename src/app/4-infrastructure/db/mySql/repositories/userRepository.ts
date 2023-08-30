import { IUserRepository } from "@gateways/repositories/IUserRepository";
import { BaseRepository } from "./base/baseRepository";
import { User } from "@domain/entities/User";
import db from "../sequelizer/models";
import { injected } from "brandi";

export class UserRepository extends BaseRepository<User> implements IUserRepository {
    constructor() {
        super(db.User);
    }
}

injected(UserRepository);