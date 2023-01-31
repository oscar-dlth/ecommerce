import { NextFunction, Request, Response } from 'express';
import { container } from '../../../../branDI/container';
import { TOKENS } from '../../../../branDI/tokens';
import { CreateUserDto } from "../../../2-application/users/dtos/createUserDto";
import { take } from 'rxjs/operators'
import { ErrorResponseViewModel } from '../../../2-application/common/errorResponseViewModel';
import { UserCreatedViewModel } from '../../../2-application/users/viewModels/userCreatedViewModel';
import { responseViewModel } from '../../../2-application/common/responseViewModel';
import { UserViewModel } from '../../../2-application/users/viewModels/userViewModel';

const userCommands = container.get(TOKENS.userCommands);
const userQueries = container.get(TOKENS.userQueries);

const signIn = (req: Request, res: Response, next: NextFunction) => {
    userCommands.signin(req.body as CreateUserDto)
        .pipe(take(1))
        .subscribe({

            next: (response: UserCreatedViewModel) => {

                const responseData: responseViewModel<UserCreatedViewModel> = {
                    status: 'OK',
                    data: response
                };
                res.send(responseData)
            },
            error: (error) => {

                const statusCode = error.code
            
                const responseError: ErrorResponseViewModel =  {
                    status: 'Fail',
                    message: error.message,
                    code: statusCode
                }
                next(responseError);

            }
        });
}

const getUsers = (req: Request, res: Response) => {

    userQueries.getUsers()
        .pipe(take(1))
        .subscribe({
            next: (response) => {

                const responseData: responseViewModel<UserViewModel[]> = {
                    status: 'OK',
                    data: response
                };

                res.send(responseData)
            },
            error: (error) => {

                const statusCode = error.code | 500;
                
                const responseError: ErrorResponseViewModel =  {
                    status: 'Fail',
                    message: error.message,
                    code: statusCode
                }

                res.status(statusCode).json(responseError);
            }
        });

}

const getUserById = (req: Request, res: Response, next: NextFunction) => {
    userQueries.getById(req.params.id as any)
        .pipe(take(1))
        .subscribe({
            next: (response) => {

                const responseData: responseViewModel<UserViewModel | null> = {
                    status: 'OK',
                    data: response
                };
                res.send( responseData )

            },
            error: (error) => {

                const statusCode = error.code;
                const responseError: ErrorResponseViewModel =  {
                    status: 'Fail',
                    message: error.message,
                    code: statusCode
                }
                next(responseError);
                
            }
        });
}

const router = {
    signIn,
    getUsers,
    getUserById
};

export default router;