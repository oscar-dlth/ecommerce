import { NextFunction, Request, Response } from 'express';
import { UserCreatedViewModel } from '@application/users/viewModels/userCreatedViewModel';
import { UserViewModel } from '@application/users/viewModels/userViewModel';
import { handleError } from '../../utils';
import { ResponseViewModel } from '@application/common/responseViewModel';
import { Mediator } from 'mediatr-ts';
import { GetUsersQuery } from '@application/users/queries/getUsers/GetUsersQuery';
import { UpdateUserCommand } from '@application/users/commands/updateUser/UpdateUserCommand';
import { GetUserByIdQuery } from '@application/users/queries/getUserById/GetUserByIdQuery';
import { DeleteUserCommand } from '@application/users/commands/deleteUser/DeleteUserCommand';
import { CreateUserCommand } from '@application/users/commands/createUser/CreateUserCommand';
import { LoginCommand } from '@application/users/commands/login/LoginCommand';
import { LoginViewModel } from '@application/users/viewModels/LoginViewModel';
import { BasePagedViewModel } from '@application/common/BaseViewModels/BasePagedViewModel';
import { validateCreateUser } from './validators';

const mediator =  new Mediator();

const signIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const command = new CreateUserCommand();
        const result = await mediator.send<UserCreatedViewModel>(command);
        const responseData: ResponseViewModel<UserCreatedViewModel> = {
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
        const responseData: ResponseViewModel<LoginViewModel> = {
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
        query.keyWord =  String(req.query.keyWord);
        query.size =  Number(req.query.size);
        query.page =  Number(req.query.page);
        const result = await mediator.send<{rows: UserViewModel[], count: number}>(query);
        
        const responseData: ResponseViewModel<BasePagedViewModel<UserViewModel>> = {
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
        const result = await mediator.send<UserViewModel>(query);

        const responseData: ResponseViewModel<UserViewModel | null> = {
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
        const command = new UpdateUserCommand();
        command.email = req.body.email;
        command.id = req.body.id;
        command.name = req.body.name;
        command.nickName = req.body.nickName;

        const result = await mediator.send<number>(command);
        const responseData: ResponseViewModel<number> = {
            status: 'OK',
            data: result
        };
        res.send(responseData)
    } catch ( error: any ) {
        handleError(error, next);
    }
}

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        validateCreateUser(req.body);
        
        const command = new CreateUserCommand();
        command.email = req.body.email;
        command.name = req.body.name;
        command.nickName = req.body.nickName;
        command.password = req.body.password;

        const result = await mediator.send<UserViewModel>(command);
        const responseData: ResponseViewModel<UserViewModel> = {
            status: 'OK',
            data: result
        };
        res.send(responseData)
    } catch ( error: any ) {
        handleError(error, next);
    }
}

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const command = new DeleteUserCommand();
        const result = await mediator.send<number>(command);
        const responseData: ResponseViewModel<number> = {
            status: 'OK',
            data: result
        };
        res.send( responseData )
    } catch ( error: any ) {
        handleError(error, next);
    }
}

export const userOperations = {
    signIn,
    getUsers,
    getUserById,
    deleteUser,
    updateUser,
    login,
    createUser
};

