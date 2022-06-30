import { Request, Response } from 'express';
import { UserRepository } from "../../../2-application/users"
import { CreateUserDto } from "../../../2-application/users/dtos/createUserDto";
import { UserGateway } from '../../../4-infrastructure/db/mongoDB/implementations/UserGateway';


const signIn = (req: Request, res: Response) => {
    try{
    
        const userRepository = new UserRepository(new UserGateway());
        const createUserDto: CreateUserDto = {
            name: req.body.name,
            nickName: req.body.nickName,
            email: req.body.email,
            password: req.body.password
        };
        
        userRepository.createUser(createUserDto).subscribe(response => {
            res.send(response)
        });
    }catch(error: any){
        const userRepository =  new UserRepository(new UserGateway());
    }
    
}
const router = {
    signIn
};

export default router;