import { NextFunction, Request, Response } from 'express';
import { handleError } from '../../utils';
import { ResponseViewModel } from '@application/common/responseViewModel';
import { Mediator } from 'mediatr-ts';
import { GetProductsQuery } from '@application/products/queries/getProducts/getProductsQuery';
import { ProductViewModel } from '@application/products/viewModels/productViewModel';
import { BasePagedViewModel } from '@application/common/BaseViewModels/BasePagedViewModel';
import { GetProductByIdQuery } from '@application/products/queries/getProductById/getProductByIdQuery';
import { CreateProductCommand } from '@application/products/commands/createProduct/createProductCommand';
import { DeleteProductCommand } from '@application/products/commands/deleteProduct/deleteProductCommand';
import { UpdateProductCommand } from '@application/products/commands/updateProduct/updateProductCommand';

const mediator =  new Mediator();

const getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const query = new GetProductsQuery();
        query.keyWord =  String(req.query.keyWord);
        query.size =  Number(req.query.size);
        query.page =  Number(req.query.page);
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

const getProductById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const query = new GetProductByIdQuery();
        query.id =  req.params.id;
        const result = await mediator.send<ProductViewModel>(query);

        const responseData: ResponseViewModel<ProductViewModel | null> = {
            status: 'OK',
            data: result
        };
        res.send( responseData )
    } catch ( error: any ) {
        handleError(error, next);
    }
}

const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const command = new UpdateProductCommand();
        command.id =  req.body.id;
        command.name =  req.body.name;
        command.sku =  req.body.sku;
        command.price =  req.body.price;
        command.categoryId =  req.body.categoryId;
        command.brandId =  req.body.brandId;
        command.isActive =  req.body.isActive;

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

const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const command = new CreateProductCommand();
        command.name =  req.body.name;
        command.sku =  req.body.sku;
        command.price =  req.body.price;
        command.categoryId =  req.body.categoryId;
        command.brandId =  req.body.brandId;
        command.isActive =  req.body.isActive;

        const result = await mediator.send<ProductViewModel>(command);
        const responseData: ResponseViewModel<ProductViewModel> = {
            status: 'OK',
            data: result
        };
        res.send(responseData)
    } catch ( error: any ) {
        handleError(error, next);
    }
}

const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const command = new DeleteProductCommand();
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

export const productsOperations = {
    getProducts,
    deleteProduct,
    updateProduct,
    getProductById,
    createProduct
};

