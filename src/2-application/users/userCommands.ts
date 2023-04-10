import { injected } from "brandi";
import { Observable, map, switchMap, throwError } from "rxjs";
import { TOKENS } from "../../../branDI/tokens";
import { User } from "../../1-domain/entities";
import { IUserRepository } from "../../3.gateways/repositories/userRepository";
import { CreateUserDto } from "./dtos/createUserDto";
import { UserCreatedViewModel } from "./viewModels/userCreatedViewModel";
import { JWTManager } from "../../4-infrastructure/identity/JWT/JWTManager";
import { statusCodes } from "../../1-domain/statusCodes";
import { UserViewModel } from "./viewModels/userViewModel";
import { UpdateUserDto } from "./dtos/updateUserDto";

export class UserCommands {

    constructor(private userRepository: IUserRepository) { }

    async signin(userDto: CreateUserDto): Promise<UserCreatedViewModel> {
        
        const filter = { where: { email: userDto.email  } };
        
        const result = await this.userRepository.get(filter);

        if( result.length === 0 ) {
            
            const user: User = { ...userDto, id: 0 }

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
      
        const user: User = { ...userDto }

        const result = await this.userRepository.update(user);

        return result;

    }

    async delete(id: string): Promise<number> {
        
        const result = await this.userRepository.delete(id);

        return result;

    }

}

injected(UserCommands, TOKENS.userRepository);