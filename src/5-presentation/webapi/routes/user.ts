import { NextFunction, Request, Response } from 'express';
import { container } from '../../../../branDI/container';
import { TOKENS } from '../../../../branDI/tokens';
import { CreateUserDto } from "../../../2-application/users/dtos/createUserDto";
import { take } from 'rxjs/operators'
import { ErrorResponseViewModel } from '../../../2-application/common/errorResponseViewModel';
import { UserCreatedViewModel } from '../../../2-application/users/viewModels/userCreatedViewModel';
import { responseViewModel } from '../../../2-application/common/responseViewModel';
import { UserViewModel } from '../../../2-application/users/viewModels/userViewModel';
import { UpdateUserDto } from '../../../2-application/users/dtos/updateUserDto';
import { handleError } from '../utils';

const userCommands = container.get(TOKENS.userCommands);
const userQueries = container.get(TOKENS.userQueries);

const signIn = async (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const result =  await userCommands.signin( req.body as CreateUserDto );

        const responseData: responseViewModel<UserCreatedViewModel> = {
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
    
        const responseData: responseViewModel<UserViewModel[]> = {
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
    
        const responseData: responseViewModel<UserViewModel | null> = {
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
    
        const responseData: responseViewModel<number> = {
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
    
        const responseData: responseViewModel<number> = {
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