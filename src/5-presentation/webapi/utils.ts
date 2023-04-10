import { NextFunction } from "express";
import { ErrorResponseViewModel } from "../../2-application/common/errorResponseViewModel";

export const handleError = (error: any, next: NextFunction) => {

    const statusCode = error.code || 500;

    const responseError: ErrorResponseViewModel = {
        status: 'Fail',
        message: error.message,
        code: statusCode
    }

    next(responseError);

}