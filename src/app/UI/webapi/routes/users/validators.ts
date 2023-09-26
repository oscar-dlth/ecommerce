import { createValidationError } from "../../utils";
import { IRequestValidator } from "@domain/core/interfaces/IRequestValidator";
import { JoiValidator } from "@infrastructure/validators/JoiValidator/JoiValidator";


export const validateCreateUser = (body: any): void => {
    const rules = new Map<string, ValidationDefinition>([
        ['name', { dataType: ValidateTypes.string, rules: [{ type: 'required' }] }],
        ['email', { dataType: ValidateTypes.string, rules: [{ type: 'required' }] }],
        ['nickName', { dataType: ValidateTypes.string, rules: [{ type: 'required' }] }],
        ['password', { dataType: ValidateTypes.string, rules: [{ type: 'required' }] }]
    ]);

    let validator: IRequestValidator = new JoiValidator(rules);

    const error = validator.validate(body);

    if (error) {
        throw createValidationError(error);
    }
}

export enum ValidateTypes {
    string,
    number,
}

export class ValidationDefinition {
    dataType: ValidateTypes;
    rules: RuleConfig[]
}

export class RuleConfig {
    type: string;
    params?: any;
}
