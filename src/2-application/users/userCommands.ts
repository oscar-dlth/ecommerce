import { injected } from "brandi";
import { catchError, Observable, switchMap } from "rxjs";
import { TOKENS } from "../../../branDI/tokens";
import { User } from "../../1-domain/entities";
import { IUserGateway } from "../../3.gateways/userGateway";
import { IUserRepository } from "../../3.gateways/repositories/userRepository";
import { CreateUserDto } from "./dtos/createUserDto";
import { UpdateUserDto } from "./dtos/updateUserDto";
import { UserCreatedViewModel } from "./viewModels/userCreatedViewModel";
import { ErrorResponseViewModel } from "../errorResponseViewModel";
import { JWTManager } from "../../4-infrastructure/identity/JWT/JWTManager";

export class UserCommands {
    constructor(private userGateway: IUserGateway, private userRepository: IUserRepository) { }

    signin(userDto: CreateUserDto) {
        return new Observable<UserCreatedViewModel>(subscriber => {
            this.userRepository.get({ email: userDto.email })
                .subscribe({
                    next: users => {
                        if (users.length == 0) {
                            const user: User = {
                                name: userDto.name,
                                nickName: userDto.nickName,
                                email: userDto.email,
                                password: userDto.password
                            };

                            this.userRepository.insert(user).subscribe({
                                next: () => {
                                    console.log(user);
                                    const [token, duration] = JWTManager.sign(user.email, user.name);
                                    return { token: token, expiresIn: duration } as UserCreatedViewModel;
                                }
                                , error: (err) => {
                                    console.log(err);
                                    subscriber.error({
                                        status: 500,
                                        message: err
                                    } as ErrorResponseViewModel);
                                }
                            })
                        }
                        else {
                            subscriber.error({
                                status: 401,
                                message: 'User already exists'
                            } as ErrorResponseViewModel);
                        }
                    }, error: (err) => {
                        console.log(err);
                        subscriber.error({
                            status: 500,
                            message: err
                        } as ErrorResponseViewModel);
                    }
                })
        });
    }
    createUser(userDto: CreateUserDto): Observable<UserCreatedViewModel> {
        return this.userGateway.signIn(userDto);
    }

    createNewUser(userDto: CreateUserDto) {
        const user: User = {
            id: '',
            name: userDto.name,
            nickName: userDto.nickName,
            password: userDto.password,
            email: userDto.email,
        };
        return this.userRepository.insert(user);
    }

    updateUser(userDto: UpdateUserDto) {
        const user: User = {
            id: userDto.id,
            name: userDto.name,
            nickName: userDto.nickName,
            password: userDto.password,
            email: userDto.email,
        };

        return this.userRepository.update(user);
    }

    deleteUser(id: string) {
        return this.userRepository.delete(id);
    }
}

injected(UserCommands, TOKENS.userGateway, TOKENS.userRepository);