import { injected } from "brandi";
import { Observable, map, switchMap, throwError } from "rxjs";
import { TOKENS } from "../../../branDI/tokens";
import { User } from "../../1-domain/entities";
import { IUserRepository } from "../../3.gateways/repositories/userRepository";
import { CreateUserDto } from "./dtos/createUserDto";
import { UserCreatedViewModel } from "./viewModels/userCreatedViewModel";
import { JWTManager } from "../../4-infrastructure/identity/JWT/JWTManager";
import { statusCodes } from "../../1-domain/statusCodes";

export class UserCommands {
    constructor(private userRepository: IUserRepository) { }

    signin(userDto: CreateUserDto): Observable< UserCreatedViewModel> {
        return this.userRepository.get({ email: userDto.email })
        .pipe(switchMap(users => {
            if (users.length === 0) {
                const user: User = { ...userDto, _id: '' }

                return this.userRepository.insert(user).pipe(map(():UserCreatedViewModel => {
                    const { token, duration } = JWTManager.sign(user.email, user.name);
                    return { token , expiresIn: duration }
                }));
            } else {
                return throwError(() => {
                    const error: any = new Error();
                    error.message = 'User already exist';
                    error.code = statusCodes.conflict;
                    return error;
                });
            }
        }));
    }
}

injected(UserCommands, TOKENS.userRepository);