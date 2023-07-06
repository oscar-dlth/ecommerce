import { injected } from "brandi";
import { IUserRepository } from "@gateways/repositories/userRepository";
import { CreateUserDto } from "./dtos/createUserDto";
import { UserCreatedViewModel } from "./viewModels/userCreatedViewModel";
import { JWTManager } from "@infrastructure/identity/JWT/JWTManager";
import { statusCodes } from "@domain/core/common/statusCodes";
import { UpdateUserDto } from "./dtos/updateUserDto";
import { TOKENS } from "@dependency-inyection/tokens";
import { User } from "@domain/entities/User";
import { IUser } from "@domain/core/interfaces/IUser";

export class UserCommands {

    constructor(private userRepository: IUserRepository) { }

    async signin(userDto: CreateUserDto): Promise<UserCreatedViewModel> {
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

    async update(userDto: UpdateUserDto): Promise<number> {
        const user: IUser = { ...userDto }
        const result = await this.userRepository.update(user);
        return result;
    }

    async delete(id: string): Promise<number> {
        const result = await this.userRepository.delete(id);
        return result;
    }

}

injected(UserCommands, TOKENS.userRepository);