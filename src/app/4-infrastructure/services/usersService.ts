import { CreateUserCommand } from "@application/users/commands/createUser/CreateUserCommand";
import { UpdateUserCommand } from "@application/users/commands/updateUser/UpdateUserCommand";
import { UserCreatedViewModel } from "@application/users/viewModels/userCreatedViewModel";
import { UserViewModel } from "@application/users/viewModels/userViewModel";
import { TOKENS } from "@dependency-inyection/tokens";
import { statusCodes } from "@domain/core/common/statusCodes";
import { IUser } from "@domain/core/interfaces/IUser";
import { IUserRepository } from "@gateways/repositories/userRepository";
import { injected } from "brandi";
import { AuthService } from "@domain/services/AuthService";
import { BaseServiceImp } from "./BaseServiceImp";
import { User } from "@domain/entities/User";

export class UsersService extends BaseServiceImp<User, UserViewModel, CreateUserCommand, UpdateUserCommand> {
    constructor(userRepository: IUserRepository, private authService: AuthService) {
        const searchFields = [ 'nickName', 'email', 'name']
        super(userRepository, searchFields);
    }
    
    mapToEntityToInsert(dto: CreateUserCommand): User {
        return { ...dto, id: 0 };
    }

    mapToEntityToUpdate(dto: UpdateUserCommand): User {
        return { ...dto, password: dto.password };
    }
    
    mapToViewModel(entity: User): UserViewModel {
        return {
            id: entity.id,
            name: entity.name,
            nickName: entity.nickName,
            email: entity.email,
        };
    }

    async signin(userDto: CreateUserCommand): Promise<UserCreatedViewModel> {
        const filter = { where: { email: userDto.email } };
        const result = await this.repository.get(filter);

        if (result.length === 0) {
            const user: IUser = { ...userDto, id: 0 }
            const userInserted = await this.repository.insert(user);
            const { token, duration: expiresIn } = this.authService.sign(userInserted.email, userInserted.name);
            return { token, expiresIn };
        } else {
            const error: any = new Error();
            error.message = 'User already exist';
            error.code = statusCodes.conflict;
            throw error;
        }
    }
}

injected(UsersService, TOKENS.userRepository, TOKENS.AuthService);