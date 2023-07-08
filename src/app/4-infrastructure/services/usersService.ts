import { IUserService } from "@domain/services/usersService";
import { CreateUserCommand } from "@application/users/commands/createUser/CreateUserCommand";
import { UpdateUserCommand } from "@application/users/commands/updateUser/UpdateUserCommand";
import { UserCreatedViewModel } from "@application/users/viewModels/userCreatedViewModel";
import { IUserViewModel } from "@application/users/viewModels/userViewModel";
import { TOKENS } from "@dependency-inyection/tokens";
import { statusCodes } from "@domain/core/common/statusCodes";
import { IUser } from "@domain/core/interfaces/IUser";
import { IUserRepository } from "@gateways/repositories/userRepository";
import { JWTManager } from "@infrastructure/identity/JWT/JWTManager";
import { injected } from "brandi";

export class UsersService implements IUserService{
    constructor(private userRepository: IUserRepository){

    }

    async getUsers(): Promise<IUserViewModel[]> {

        const users = await this.userRepository.get();

        const result = users.map((user: IUser) => ({
            id: user.id,
            name: user.name,
            nickName: user.nickName,
            email: user.email,
        })
        )
        return result as IUserViewModel[];
    }

    async getById(id: string): Promise<IUserViewModel | null> {
        const response =  await this.userRepository.getById(id);
        let result: IUserViewModel | null = null;

        if (response) {
            result = {
                id: response.id ,
                name: response.name, 
                nickName: response.nickName, 
                email: response.email 
            } 
        }

        return result;
    }

    async signin(userDto: CreateUserCommand): Promise<UserCreatedViewModel> {
        const filter = { where: { email: userDto.email  } };
        const result = await this.userRepository.get(filter);

        if( result.length === 0 ) {
            const user: IUser = { ...userDto, id: 0 }
            const userInserted =  await this.userRepository.insert(user);
            const { token, duration: expiresIn } = JWTManager.sign(userInserted.email, userInserted.name);
            return { token, expiresIn } ;
        } else {
            const error: any = new Error();
            error.message = 'User already exist';
            error.code = statusCodes.conflict;
            throw error;
        }

    }

    async update(userDto: UpdateUserCommand): Promise<number> {
        const user: IUser = { ...userDto }
        const result = await this.userRepository.update(user);
        return result;
    }

    async delete(id: string): Promise<number> {
        const result = await this.userRepository.delete(id);
        return result;
    }
    
}

injected(UsersService, TOKENS.userRepository);