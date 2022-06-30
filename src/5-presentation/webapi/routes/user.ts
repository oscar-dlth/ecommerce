import { Request, Response } from 'express';
import Container from "typedi";
import { UserRepository } from "../../../2-application/users"
import { CreateUserDto } from "../../../2-application/users/dtos/createUserDto";

const userRepository = Container.get(UserRepository);

const signIn = (req: Request, res: Response) => {
    const createUserDto: CreateUserDto = {
        name: req.body.name,
        nickName: req.body.nickName,
        email: req.body.email,
        password: req.body.password
    };
    
    userRepository.createUser(createUserDto).subscribe(response => {
        res.send(response)
    });
}
const router = {
    signIn
};

export default router;