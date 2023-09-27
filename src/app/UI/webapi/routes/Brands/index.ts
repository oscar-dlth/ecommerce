import { NextFunction, Request, Response } from 'express';
import { handleError } from '../../utils';
import { ResponseViewModel } from '@application/common/responseViewModel';
import { Mediator } from 'mediatr-ts';
import { BasePagedViewModel } from '@application/common/BaseViewModels/BasePagedViewModel';
import { GetBrandsQuery } from '@application/Brands/Queries/GetBrands/GetBrandsQuery';
import { BrandViewModel } from '@application/Brands/ViewModels/BrandViewModel';

const mediator =  new Mediator();

const getBrands = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const query = new GetBrandsQuery();
        query.keyWord =  String(req.query.keyWord);
        query.size =  Number(req.query.size);
        query.page =  Number(req.query.page);
        const result = await mediator.send<{rows: BrandViewModel[], count: number}>(query);
        
        const responseData: ResponseViewModel<BasePagedViewModel<BrandViewModel>> = {
            status: 'OK',
            data: result
        };
        
        res.send(responseData);
    } catch (error: any) {
        handleError(error, next);
    }
}

export const brandsOperations = {
    getBrands
};