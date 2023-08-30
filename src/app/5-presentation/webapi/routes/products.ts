import { NextFunction, Request, Response } from 'express';
import { UserCreatedViewModel } from '@application/users/viewModels/userCreatedViewModel';
import { UserViewModel } from '@application/users/viewModels/userViewModel';
import { handleError } from '../utils';
import { ResponseViewModel } from '@application/common/responseViewModel';
import { Mediator } from 'mediatr-ts';
import { GetUsersQuery } from '@application/users/queries/getUsers/GetUsersQuery';
import { UpdateUserCommand } from '@application/users/commands/updateUser/UpdateUserCommand';
import { GetUserByIdQuery } from '@application/users/queries/getUserById/GetUserByIdQuery';
import { BasePagedViewModel } from '@application/common/BaseViewModels/BasePagedViewModel';
import { GetProductsQuery } from '@application/products/queries/getProducts/getProductsQuery';
import { ProductViewModel } from '@application/products/viewModels/productViewModel';

const mediator =  new Mediator();

const getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const query = new GetProductsQuery();
        query.keyWord =  String(req.query.keyWord) || '';
        query.size =  Number(req.query.size) || 0;
        query.page =  Number(req.query.page) || 0;
        const result = await mediator.send<{rows: ProductViewModel[], count: number}>(query);
        
        const responseData: ResponseViewModel<BasePagedViewModel<ProductViewModel>> = {
            status: 'OK',
            data: result
        };
        
        res.send(responseData);
    } catch (error: any) {
        handleError(error, next);
    }
}

export const productsOperations = {
    getProducts
};

