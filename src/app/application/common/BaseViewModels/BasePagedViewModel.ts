import { BaseViewModel } from "./BaseViewModel";

export class BasePagedViewModel<T extends BaseViewModel>{
    rows: T[];
    count: number;
}