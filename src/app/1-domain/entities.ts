export class BaseModel {
    id!: number;
}
export class User extends BaseModel{
    id!: number;
    name!: string;
    nickName!: string;
    email!: string;
    password!: string;
}

export class Role extends BaseModel {
    code!: string;
    name!: string;
    description!: string;
}

export class UserRole extends BaseModel {
    userId!: number;
    roleId!: number;
}

export class Address extends BaseModel {
    name!: string;
    country!: string;
    city!: string;
    zip!: string;
    street!: string;
    number!: string;
    userId!: number
}

export class Cart extends BaseModel {
    total!: number;
    userId!: number;
}

export class Payment extends BaseModel {
    amount!: number;
    type!: string;
}


export class Order extends BaseModel {
    total!: number;
    paymentId!: number;
}

export class Category extends BaseModel {
    code!: string;
    name!: string;
    description!: string;
}

export class Product extends BaseModel {
    name!: string;
    sku!: string;
    price!: number;
    isActive!: boolean;
    categoryId!: number;
    brandId!: number;
}

export class Brand extends BaseModel {
    name!: string;
    sku!: string;
    price!: number;
    isActive!: boolean;
    productCategoryId!: number;
}

export class OrderDetail extends BaseModel {
    quantity!: number;
    subtotal!: number;
    productId!: number;
    orderId!: number;
}

export class CartDetail extends BaseModel {
    quantity!: number;
    subtotal!: number;
    productId!: number;
    cartId!: number;
}
