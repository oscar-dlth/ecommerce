
export interface User extends BaseModel{
    id: number;
    name: string;
    nickName: string;
    email: string;
    password: string;
}

export interface BaseModel{
    id: number;
}