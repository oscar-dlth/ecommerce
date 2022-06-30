import { injected } from "brandi";
import { Observable } from "rxjs";
import { TOKENS } from "../../../branDI/tokens";
import { User } from "../../1-domain/entities";
import { IUserRepository } from "../../3.gateways/repositories/userRepository";

export class UserQueries {
    constructor(private userRepository: IUserRepository){ }

    getUsers(): Observable<User[]> {
        return this.userRepository.get();
    }

    getById(id: string): Observable<User | null> {
        return this.userRepository.getById(id);
    }
}

injected(UserQueries, TOKENS.userRepository);