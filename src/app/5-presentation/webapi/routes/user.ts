import { NextFunction, Request, Response } from 'express';
import { UserCreatedViewModel } from '@application/users/viewModels/userCreatedViewModel';
import { IUserViewModel } from '@application/users/viewModels/userViewModel';
import { handleError } from '../utils';
import { IResponseViewModel } from '@application/common/responseViewModel';
import { Mediator } from 'mediatr-ts';
import { GetUsersQuery } from '@application/users/queries/getUsers/GetUsersQuery';
import { UpdateUserCommand } from '@application/users/commands/updateUser/UpdateUserCommand';
import { GetUserByIdQuery } from '@application/users/queries/getUserById/GetUserByIdQuery';
import { DeleteUserCommand } from '@application/users/commands/deleteUser/DeleteUserCommand';
import { CreateUserCommand } from '@application/users/commands/createUser/CreateUserCommand';
import { LoginCommand } from '@application/users/commands/login/LoginCommand';
import { LoginViewModel } from '@application/users/viewModels/LoginViewModel';

const mediator =  new Mediator();

const signIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const command = new CreateUserCommand();
        const result = await mediator.send<UserCreatedViewModel>(command);
        const responseData: IResponseViewModel<UserCreatedViewModel> = {
            status: 'OK',
            data: result
        };
        res.send(responseData)
    } catch (error: any) {
        handleError(error, next);
    }
}

const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const command = new LoginCommand();
        command.password =  req.body.password;
        command.userName = req.body.userName;
        const result = await mediator.send<LoginViewModel>(command);
        const responseData: IResponseViewModel<LoginViewModel> = {
            status: 'OK',
            data: result
        };
        res.send(responseData)
    } catch (error: any) {
        handleError(error, next);
    }
}

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const query = new GetUsersQuery();
        const result = await mediator.send<IUserViewModel[]>(query);
        
        const responseData: IResponseViewModel<IUserViewModel[]> = {
            status: 'OK',
            data: result
        };
        
        res.send(responseData);
    } catch (error: any) {
        handleError(error, next);
    }
}

const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const query = new GetUserByIdQuery();
        query.id =  req.params.id;
        const result = await mediator.send<IUserViewModel>(query);

        const responseData: IResponseViewModel<IUserViewModel | null> = {
            status: 'OK',
            data: result
        };
        res.send( responseData )
    } catch ( error: any ) {
        handleError(error, next);
    }
}

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const query = new UpdateUserCommand();
        const result = await mediator.send<number>(query);
        const responseData: IResponseViewModel<number> = {
            status: 'OK',
            data: result
        };
        res.send( responseData )
    } catch ( error: any ) {
        handleError(error, next);
    }
}

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const command = new DeleteUserCommand();
        const result = await mediator.send<number>(command);
        const responseData: IResponseViewModel<number> = {
            status: 'OK',
            data: result
        };
        res.send( responseData )
    } catch ( error: any ) {
        handleError(error, next);
    }
}

const router = {
    signIn,
    getUsers,
    getUserById,
    deleteUser,
    updateUser,
    login
};

export default router;