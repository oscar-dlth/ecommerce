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

                const { name, nickName, email, id } = item;
                
                return {
                    id, name, nickName, email
                };

            });

        }));

    }

    getById(id: number): Observable<UserViewModel | null> {
        return this.userRepository.getById(id).pipe(map((response: User | null): UserViewModel | null => {

            let result = null;

            if (response) {

                const { name, nickName, email } = response;
                result = { 
                    id, name, nickName, email
                 }

            }

            return result;

        }));

    }

}

injected(UserQueries, TOKENS.userRepository);