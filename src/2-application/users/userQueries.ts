import { injected } from "brandi";
import { map, Observable } from "rxjs";
import { TOKENS } from "../../../branDI/tokens";
import { User } from "../../1-domain/entities";
import { IUserRepository } from "../../3.gateways/repositories/userRepository";
import { UserViewModel } from "./viewModels/userViewModel";

export class UserQueries {
    constructor(private userRepository: IUserRepository) { }

    getUsers(): Observable<UserViewModel[]> {
        return this.userRepository.get().pipe(map((response: User[]): UserViewModel[] => {
            return response.map((item: User): UserViewModel => {
                const { name, nickName, email, stories, _id } = item;
                return {
                    _id, name, nickName, email, stories
                };
            });
        }));
    }

    getById(id: string): Observable<UserViewModel | null> {
        return this.userRepository.getById(id).pipe(map((response: User | null): UserViewModel | null => {
            let result = null;
            if (response) {
                const { name, nickName, email, stories, _id } = response;
                result = { 
                    _id, name, nickName, email, stories
                 }
            }
            return result;
        }));
    }
}

injected(UserQueries, TOKENS.userRepository);