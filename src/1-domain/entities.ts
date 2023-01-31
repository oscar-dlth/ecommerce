
export class User implements BaseModel{
    id!: number;
    name!: string;
    nickName!: string;
    email!: string;
    password!: string;

    constructor(object: any){
        Object.assign(this, object);
    }
}

export interface BaseModel{
    id: number;
}