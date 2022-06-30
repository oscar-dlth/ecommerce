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
    userCommands.createUser(req.body as CreateUserDto)
        .pipe(take(1))
        .subscribe({
            next: (response: UserCreatedViewModel) => {
                res.send(response)
            },
            error: (error: ErrorResponseViewModel) => {
                res.status(error.status).json(error);
            }
        });
}

const getUsers = (req: Request, res: Response) => {
    userQueries.getUsers().subscribe({
        next: (response) => {
            res.send(response)
        },
        error: (error: ErrorResponseViewModel) => {
            res.status(error.status).json(error);
        }
    });
}

const getUserById = (req: Request, res: Response) => {
    userQueries.getById(req.params.id).subscribe({
        next: (response) => {
            res.send(response)
        },
        error: (error: ErrorResponseViewModel) => {
            res.status(500).json(error);
        }
    });
}

const createNewUser = (req: Request, res: Response) => {
    userCommands.createNewUser(req.body as CreateUserDto).subscribe({
        next: (response) => {
            res.send(response)
        },
        error: (error: ErrorResponseViewModel) => {
            res.status(500).json({ error: error.message, status: 500 });
        }
    });
}

const updateUser = (req: Request, res: Response) => {
    userCommands.updateUser(req.body as UpdateUserDto).subscribe({
        next: (response) => {
            res.send({ status: response })
        },
        error: (error: ErrorResponseViewModel) => {
            res.status(500).json({ error: error.message, status: 500 });
        }
    });
}

const deleteUser = (req: Request, res: Response) => {
    userCommands.deleteUser(req.params.id).subscribe({
        next: (response) => {
            res.send({ status: response })
        },
        error: (error: ErrorResponseViewModel) => {
            res.status(500).json({ error: error.message, status: 500 });
        }
    });
}

const router = {
    signIn,
    getUsers,
    getUserById,
    createNewUser,
    updateUser,
    deleteUser
};

export default router;