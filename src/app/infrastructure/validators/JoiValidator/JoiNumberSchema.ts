import Joi, { NumberSchema } from "joi";
import { CustomJoiSchema } from "./CustomJoiSchema";

export class JoiNumberSchema extends CustomJoiSchema<NumberSchema>{
    constructor() {
        super(Joi.number());
    }
}
