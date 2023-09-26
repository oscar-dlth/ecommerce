import Joi, { AnySchema, NumberSchema, StringSchema } from "joi";
import { IRequestValidator } from "@domain/core/interfaces/IRequestValidator";
import { RuleConfig, ValidateTypes, ValidationDefinition } from "@UI/webapi/routes/users/validators";
import { JoiStringSquema } from "./JoiStringSquema";
import { JoiNumberSchema } from "./JoiNumberSchema";
import { CustomJoiSchema } from "./CustomJoiSchema";

export class JoiValidator implements IRequestValidator {
    private object: Joi.ObjectSchema<any>;

    constructor(schema: Map<string, ValidationDefinition>) {

        this.object = this.getJoiObject(schema);
    }

    getJoiObject(ruleDefinition: Map<string, ValidationDefinition>){
        const joiSchena: Joi.PartialSchemaMap<any> = {};
        
        ruleDefinition.forEach((value: ValidationDefinition, key: string)=> {
            let schema =  this.getSchema(value.dataType);

            if(!schema){
                return;
            }

            value.rules.forEach((rule: RuleConfig)=>{
                schema = schema?.setRule(rule.type, rule.params)
            })
            
            joiSchena[key] = schema.getSchema();
        })

        return Joi.object().keys(joiSchena).options({ abortEarly: false });
    }

    validate(body: any) {
        const result = this.object.validate(body);
        return result.error;
    }

    private getSchema(dataType: ValidateTypes): CustomJoiSchema<AnySchema> | undefined{
        const schemas = new Map<ValidateTypes, CustomJoiSchema<AnySchema>>([
            [ValidateTypes.string, new JoiStringSquema()],
            [ValidateTypes.number, new JoiNumberSchema()]
        ])

        let schema = schemas.get(dataType);

        return schema
    }
}


