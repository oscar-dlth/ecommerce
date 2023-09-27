import { NextFunction, Request, Response } from 'express';
import { handleError } from '../../utils';
import { ResponseViewModel } from '@application/common/responseViewModel';
import { Mediator } from 'mediatr-ts';
import { BasePagedViewModel } from '@application/common/BaseViewModels/BasePagedViewModel';
import { GetCategoriesQuery } from '@application/categories/queries/getCategories/getCategoriesQuery';
import { CategoryViewModel } from '@application/categories/viewModels/CategoryViewModel';
import { GetCategoryByIdQuery } from '@application/categories/queries/getCategoryById/GetCategoryByIdQuery';
import { CreateCategoryCommand } from '@application/categories/commands/CreateCategory/CreateCategoryCommand';
import { DeleteCategoryCommand } from '@application/categories/commands/DeleteCategory/DeleteCategoryCommand';
import { UpdateCategoryCommand } from '@application/categories/commands/UpdateCategory/UpdateCategoryCommand';

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

const getCategoryById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const query = new GetCategoryByIdQuery();
        query.id =  req.params.id;
        const result = await mediator.send<CategoryViewModel>(query);

        const responseData: ResponseViewModel<CategoryViewModel | null> = {
            status: 'OK',
            data: result
        };
        res.send( responseData )
    } catch ( error: any ) {
        handleError(error, next);
    }
}

const updateCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const command = new UpdateCategoryCommand();
        command.id =  req.body.id;
        command.name =  req.body.name;
        command.code =  req.body.code;
        command.description =  req.body.description;

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

const createCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const command = new CreateCategoryCommand();
        command.code =  req.body.code;
        command.name =  req.body.name;
        command.description =  req.body.description;

        const result = await mediator.send<CategoryViewModel>(command);
        const responseData: ResponseViewModel<CategoryViewModel> = {
            status: 'OK',
            data: result
        };
        res.send(responseData)
    } catch ( error: any ) {
        handleError(error, next);
    }
}

const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const command = new DeleteCategoryCommand();
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

export const categoriesOperations = {
    deleteCategory,
    updateCategory,
    getCategoryById,
    createCategory,
    getCategories
};