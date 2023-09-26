import Joi, { StringSchema } from "joi";
import { CustomJoiSchema } from "./CustomJoiSchema";

export class JoiStringSquema extends CustomJoiSchema<StringSchema>{
    constructor() {
        super(Joi.string());
        this.rules.email = ()=> this.email(this.schema);
    }

    private email(schema: StringSchema): CustomJoiSchema<StringSchema>{
        return new CustomJoiSchema(schema.email());
    }

}

