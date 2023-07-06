import { NextFunction, Request, Response } from 'express';
import { TOKENS } from '@dependency-inyection/tokens';
import { CreateUserDto } from "@application/users/dtos/createUserDto";
import { UserCreatedViewModel } from '@application/users/viewModels/userCreatedViewModel';
import { IUserViewModel } from '@application/users/viewModels/userViewModel';
import { UpdateUserDto } from '@application/users/dtos/updateUserDto';
import { handleError } from '../utils';
import { container } from '@dependency-inyection/container';
import { IResponseViewModel } from '@application/common/responseViewModel';

const userCommands = container.get(TOKENS.userCommands);
const userQueries = container.get(TOKENS.userQueries);

const signIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result =  await userCommands.signin( req.body as CreateUserDto );
        const responseData: IResponseViewModel<UserCreatedViewModel> = {
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
        const result =  await userQueries.getUsers();
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
        const result = await userQueries.getById(req.params.id as any);
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
        const result = await userCommands.update(req.body as UpdateUserDto);
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
        const result = await userCommands.delete(req.params.id as any);
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
    updateUser
};

export default router;