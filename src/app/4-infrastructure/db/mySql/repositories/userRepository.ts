import { injected } from "brandi";
import { IUserRepository } from "@gateways/repositories/userRepository";
import { BaseRepository } from "./base/baseRepository";
import { User } from "@domain/entities/User";

export class UserRepository extends BaseRepository<User> implements IUserRepository {
}

injected(UserRepository);