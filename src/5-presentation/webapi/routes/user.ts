import { Request, Response } from 'express';
import { container } from '../../../../branDI/container';
import { TOKENS } from '../../../../branDI/tokens';
import { CreateUserDto } from "../../../2-application/users/dtos/createUserDto";
import { take } from 'rxjs/operators'
import { ErrorResponseViewModel } from '../../../2-application/errorResponseViewModel';
import { UserCreatedViewModel } from '../../../2-application/users/viewModels/userCreatedViewModel';
import { UpdateUserDto } from '../../../2-application/users/dtos/updateUserDto';

const userCommands = container.get(TOKENS.userCommands);
const userQueries = container.get(TOKENS.userQueries);

const signIn = (req: Request, res: Response) => {
    userCommands.signin(req.body as CreateUserDto)
        .pipe(take(1))
        .subscribe({
            next: (response: UserCreatedViewModel) => {
                res.send(response)
            },
            error: (error) => {
                res.status(error.status).json(error);
            }
        });
}

const getUsers = (req: Request, res: Response) => {
    userQueries.getUsers()
        .pipe(take(1))
        .subscribe({
            next: (response) => {
                res.send(response)
            },
            error: (error: ErrorResponseViewModel) => {
                res.status(error.status).json(error);
            }
        });
}

const getUserById = (req: Request, res: Response) => {
    userQueries.getById(req.params.id)
        .pipe(take(1))
        .subscribe({
            next: (response) => {
                res.send(response)
            },
            error: (error: ErrorResponseViewModel) => {
                res.status(500).json(error);
            }
        });
}

const router = {
    signIn,
    getUsers,
    getUserById
};

export default router;