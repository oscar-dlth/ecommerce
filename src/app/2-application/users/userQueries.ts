import { injected } from "brandi";
import { TOKENS } from "../../../branDI/tokens";
import { IUserRepository } from "../../3.gateways/repositories/userRepository";
import { UserViewModel } from "./viewModels/userViewModel";

export class UserQueries {

    constructor(private userRepository: IUserRepository) { }

    async getUsers(): Promise<UserViewModel[]> {

        const result = await this.userRepository.get();

        return result;
                
    };

    async getById(id: number): Promise<UserViewModel | null> {

        const response =  await this.userRepository.getById(id);

        let result = null;

        if (response) {

            const { name, nickName, email } = response;
            result = { id, name, nickName, email }

        }

        return result;

    }

}

injected(UserQueries, TOKENS.userRepository);