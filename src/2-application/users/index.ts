import { Observable } from "rxjs";
import { Service } from "typedi";
import { IUserGateway } from "../../3.gateways/userGateway";
import { CreateUserDto } from "./dtos/createUserDto";
import { UserCreatedViewModel } from "./viewModels/userCreatedViewModel";

@Service()
export class UserRepository {
    constructor(private userGateway: IUserGateway){ }

    createUser(userDto: CreateUserDto): Observable<UserCreatedViewModel> {
        return this.userGateway.signIn(userDto);
    }
}