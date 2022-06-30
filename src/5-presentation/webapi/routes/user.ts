import { Request, Response } from 'express';
import { container } from '../../../../branDI/container';
import { TOKENS } from '../../../../branDI/tokens';
import { CreateUserDto } from "../../../2-application/users/dtos/createUserDto";
import { take } from 'rxjs/operators'
import { ErrorResponseViewModel } from '../../../2-application/errorResponseViewModel';
import { UserCreatedViewModel } from '../../../2-application/users/viewModels/userCreatedViewModel';

const signIn = (req: Request, res: Response) => {

    const userCommands = container.get(TOKENS.userCommands);

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

const router = {
    signIn
};

export default router;