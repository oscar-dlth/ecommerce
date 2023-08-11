
export interface IDeleteOperation{
    delete(id: string): Promise<number>;
}