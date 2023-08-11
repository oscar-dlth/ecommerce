import { BaseViewModel } from "@application/common/BaseViewModels/BaseViewModel";

export class ProductViewModel extends BaseViewModel{
    name: string;
    sku: string;
    price: number;
    categoryId: number;
    brandId: number;
    isActive: boolean;
}