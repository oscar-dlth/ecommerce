import { Request, Response } from 'express';
import { container } from '../../../../branDI/container';
import { TOKENS } from '../../../../branDI/tokens';
import { CreateUserDto } from "../../../2-application/users/dtos/createUserDto";

const signIn = (req: Request, res: Response) => {

    const userRepository = container.get(TOKENS.userRepository);
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