import { injected } from "brandi";
import { TOKENS } from "@dependency-inyection/tokens";
import { IUserRepository } from "@gateways/repositories/userRepository";
import { IUserViewModel } from "./viewModels/userViewModel";
import { IUser } from "@domain/core/interfaces/IUser";

export class UserQueries {

    constructor(private userRepository: IUserRepository) { }

    async getUsers(): Promise<IUserViewModel[]> {
        const users = await this.userRepository.get();

        const result = users.map( (user: IUser)=> ({
                id: user.id,
                name: user.name, 
                nickName: user.nickName, 
                email: user.email,
            }) 
        )
        return result as IUserViewModel[];
    };

    async getById(id: number): Promise<IUserViewModel | null> {
        const response =  await this.userRepository.getById(id);
        let result: IUserViewModel | null = null;

        if (response) {
            result = {
                id: response.id ,
                name: response.name, 
                nickName: response.nickName, 
                email: response.email 
            } 
        }

        return result;
    }
}

injected(UserQueries, TOKENS.userRepository);