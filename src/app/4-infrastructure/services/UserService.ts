import { CreateUserCommand } from "@application/users/commands/createUser/CreateUserCommand";
import { UserCreatedViewModel } from "@application/users/viewModels/userCreatedViewModel";
import { TOKENS } from "@dependency-inyection/tokens";
import { statusCodes } from "@domain/core/common/statusCodes";
import { IUserRepository } from "@gateways/repositories/IUserRepository";
import { injected } from "brandi";
import { User } from "@domain/entities/User";
import { BaseCommand } from "@application/common/baseCommands/BaseCommand";
import { ICreateOperation } from "@domain/services/base/CreateOperation";
import { IDeleteOperation } from "@domain/services/base/DeleteOperation";
import { IReadOperation } from "@domain/services/base/ReadOperation";
import { IUpdateOperation } from "@domain/services/base/UpdateOperation";
import { CreateOperation } from "./base/CreateOperation";
import { DeleteOperation } from "./base/DeleteOperation";
import { ReadOperation } from "./base/ReadOperation";
import { UpdateOperation } from "./base/UpdateOperation";
import { IUserService } from "@domain/services/IUserService";
import { IAuthService } from "@domain/services/IAuthService";

export class UsersService implements IUserService {
    private readUserOperation: IReadOperation<User>;
    private createUserOperation: ICreateOperation<User>;
    private updateUserOperation: IUpdateOperation;
    private deleteUserOperation: IDeleteOperation;

    constructor(private userRepository: IUserRepository, private authService: IAuthService) {
        const searchFields = [ 'nickName', 'email', 'name']
        this.readUserOperation = new ReadOperation(userRepository, searchFields);
        this.createUserOperation = new CreateOperation(userRepository);
        this.updateUserOperation = new UpdateOperation(userRepository);
        this.deleteUserOperation = new DeleteOperation(userRepository);
    }

    async signin(userDto: CreateUserCommand): Promise<UserCreatedViewModel> {
        const filter = { where: { email: userDto.email } };
        const result = await this.userRepository.get(filter);

        if (result.length === 0) {
            const user: User = { ...userDto, id: 0 }
            const userInserted = await this.userRepository.insert(user);
            const { token, duration: expiresIn } = this.authService.sign(userInserted.email, userInserted.name);
            return { token, expiresIn };
        } else {
            const error: any = new Error();
            error.message = 'User already exist';
            error.code = statusCodes.conflict;
            throw error;
        }
    }

    get(params: { keyWord: string; page: number; size: number; }): Promise<{ rows: User[]; count: number; }> {
        return this.readUserOperation.get(params);
    }

    getById(id: string): Promise<User | null> {
        return this.readUserOperation.getById(id);
    }

    insert<TCommand extends BaseCommand>(dto: TCommand): Promise<User> {
        return this.createUserOperation.insert(dto);
    }

    update<TCommand extends BaseCommand>(dto: TCommand): Promise<number> {
        return this.updateUserOperation.update(dto);
    }

    delete(id: string): Promise<number> {
        return this.deleteUserOperation.delete(id);
    }
}


injected(UsersService, TOKENS.userRepository, TOKENS.AuthService);