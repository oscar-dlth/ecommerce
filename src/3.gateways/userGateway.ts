import { CreateUserDto } from "../2-application/users/dtos/createUserDto";
import { UserCreatedViewModel } from "../2-application/users/viewModels/userCreatedViewModel";

export interface IUserGateway {
    signIn(userDto: CreateUserDto): Promise<UserCreatedViewModel>;
    loginIn(): Promise<any>;
}