import { AnySchema } from "joi";

export class CustomJoiSchema<T extends AnySchema>{
    protected schema: T;
    protected rules :any = {};

    constructor(schema?: T) {
        if (!schema) {
            return;
        }
        this.schema = schema;
        this.rules.required = ()=> this.required(this.schema);
    }

    protected required(schema: T): CustomJoiSchema<T> {
        return new CustomJoiSchema(schema.required())
    }

    public setRule(ruleName: string, params?: any){
        const rule = this.rules[ruleName]; 

        if(rule){
            return rule(params);
        }

        return this;
    }

    getSchema() {
        return this.schema;
    }
}
