import { CreateUserCommand } from "@application/users/commands/createUser/CreateUserCommand"
import { UserCreatedViewModel } from "@application/users/viewModels/userCreatedViewModel";
import { User } from "@domain/entities/User";
import { IReadOperation } from "./base/ReadOperation";
import { ICreateOperation } from "./base/CreateOperation";
import { IUpdateOperation } from "./base/UpdateOperation";
import { IDeleteOperation } from "./base/DeleteOperation";

export interface IUserService extends IReadOperation<User>, ICreateOperation<User>, IUpdateOperation, IDeleteOperation {
    signin(userDto: CreateUserCommand) : Promise<UserCreatedViewModel>;
}