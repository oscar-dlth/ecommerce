import { injected } from "brandi";
import { Observable } from "rxjs";
import { TOKENS } from "../../../branDI/tokens";
import { User } from "../../1-domain/entities";
import { IUserGateway } from "../../3.gateways/userGateway";
import { IUserRepository } from "../../3.gateways/repositories/userRepository";
import { CreateUserDto } from "./dtos/createUserDto";
import { UpdateUserDto } from "./dtos/updateUserDto";
import { UserCreatedViewModel } from "./viewModels/userCreatedViewModel";

export class UserCommands {
    constructor(private userGateway: IUserGateway, private userRepository: IUserRepository){ }

    createUser(userDto: CreateUserDto): Observable<UserCreatedViewModel> {
        return this.userGateway.signIn(userDto);
    }

    createNewUser(userDto: CreateUserDto){
        const user: User = {
            id: '',
            name: userDto.name,
            nickName: userDto.nickName,
            password: userDto.password,
            email: userDto.email,
        };
        return this.userRepository.insert(user);
    }

    updateUser(userDto: UpdateUserDto){
        const user: User = {
            id: userDto.id,
            name: userDto.name,
            nickName: userDto.nickName,
            password: userDto.password,
            email: userDto.email,
        };

        return this.userRepository.update(user);
    }

    deleteUser(id: string){
        return this.userRepository.delete(id);
    }
}

injected(UserCommands, TOKENS.userGateway, TOKENS.userRepository);