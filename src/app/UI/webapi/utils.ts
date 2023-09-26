import { NextFunction } from "express";
import { ErrorResponseViewModel } from "@application/common/errorResponseViewModel";
import Joi from "joi";
import { statusCodes } from "@domain/core/common/statusCodes";

export const handleError = (error: any, next: NextFunction) => {

    const statusCode = error.code || 500;

    const responseError: ErrorResponseViewModel = {
        status: 'Fail',
        message: error.message,
        details: error.details,
        code: statusCode
    }

    next(responseError);

}

export const createValidationError = (error: any) => {
    const result: any = new Error();
    result.details = error.details.map((a: any) => a.message);
    result.message = 'Validation error';
    result.code = statusCodes.badRequest;
    return result;
}