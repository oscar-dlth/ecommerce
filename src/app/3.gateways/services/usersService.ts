import { CreateUserCommand } from "@application/users/commands/createUser/CreateUserCommand"
import { UpdateUserCommand } from "@application/users/commands/updateUser/UpdateUserCommand";
import { UserCreatedViewModel } from "@application/users/viewModels/userCreatedViewModel";
import { IUserViewModel } from "@application/users/viewModels/userViewModel";

export interface IUserService{
    getUsers(): Promise<IUserViewModel[]>;
    getById(id: string): Promise<IUserViewModel | null>;
    signin(userDto: CreateUserCommand): Promise<UserCreatedViewModel>;
    update(userDto: UpdateUserCommand): Promise<number>
    delete(id: string): Promise<number>;
}