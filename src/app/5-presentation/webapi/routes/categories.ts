import { NextFunction, Request, Response } from 'express';
import { handleError } from '../utils';
import { ResponseViewModel } from '@application/common/responseViewModel';
import { Mediator } from 'mediatr-ts';
import { BasePagedViewModel } from '@application/common/BaseViewModels/BasePagedViewModel';
import { GetCategoriesQuery } from '@application/categories/queries/getCategories/getCategoriesQuery';
import { CategoryViewModel } from '@application/categories/viewModels/CategoryViewModel';

const mediator =  new Mediator();

const getCategories = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const query = new GetCategoriesQuery();
        query.keyWord =  String(req.query.keyWord);
        query.size =  Number(req.query.size);
        query.page =  Number(req.query.page);
        const result = await mediator.send<{rows: CategoryViewModel[], count: number}>(query);
        
        const responseData: ResponseViewModel<BasePagedViewModel<CategoryViewModel>> = {
            status: 'OK',
            data: result
        };
        
        res.send(responseData);
    } catch (error: any) {
        handleError(error, next);
    }
}

export const categoriesOperations =  {
    getCategories
};;