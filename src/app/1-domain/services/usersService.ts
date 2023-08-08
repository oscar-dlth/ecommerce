import { CreateUserCommand } from "@application/users/commands/createUser/CreateUserCommand"
import { UpdateUserCommand } from "@application/users/commands/updateUser/UpdateUserCommand";
import { UserCreatedViewModel } from "@application/users/viewModels/userCreatedViewModel";
import { UserViewModel } from "@application/users/viewModels/userViewModel";
import { BaseService } from "./BaseService";

export interface IUserService extends BaseService<UserViewModel, CreateUserCommand, UpdateUserCommand> {
    signin(userDto: CreateUserCommand): Promise<UserCreatedViewModel>;
}