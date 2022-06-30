import { injected } from "brandi";
import { Observable } from "rxjs";
import { TOKENS } from "../../../branDI/tokens";
import { IUserGateway } from "../../3.gateways/userGateway";
import { CreateUserDto } from "./dtos/createUserDto";
import { UserCreatedViewModel } from "./viewModels/userCreatedViewModel";

export class UserUseCases {
    constructor(private userGateway: IUserGateway){ }

    createUser(userDto: CreateUserDto): Observable<UserCreatedViewModel> {
        return this.userGateway.signIn(userDto);
    }
}

injected(UserUseCases, TOKENS.userGateway);