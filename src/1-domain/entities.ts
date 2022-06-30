export class Chapter {
    id!: string;
    title!: string;
    content!: string;
    imageId!: string;

    constructor(object: any){
        Object.assign(this, object);
    }
}

export class Story{
    id!: string;
    title!: string;
    categoryId!: string;
    likes!: number;
    userId!:string;
    chapters!: Array<Chapter>;

    constructor(object: any){
        Object.assign(this, object);
    }
}

export class Comment{
    id!: string;
    userId!: string;
    content!: string;
    date!: Date;
    likes!: number;

    constructor(object: any){
        Object.assign(this, object);
    }
}

export class User {
    id!: string;
    name!: string;
    nickName!: string;
    email!: string;
    password!: string;
    stories?: Array<Story>;

    constructor(object: any){
        Object.assign(this, object);
    }
}