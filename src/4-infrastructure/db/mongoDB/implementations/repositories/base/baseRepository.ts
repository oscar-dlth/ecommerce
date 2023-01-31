import { Model } from "mongoose";
import {  from, map, Observable, of } from "rxjs";
import { BaseModel } from "../../../../../../1-domain/entities";
import { IBaseRepository } from "../../../../../../3.gateways/repositories/base/baseRepository";

export abstract class BaseRepository<T extends BaseModel> implements IBaseRepository<T>{
    private mongoseModel: Model<T, {}, {}>;
    constructor() {
        this.mongoseModel = this.getMongooseModel();
    }

    abstract getMongooseModel(): Model<T>;
    abstract getModelToInsert(newModel: T): any;

    get(filter: any): Observable<T[]> {
        return from(this.mongoseModel.find(filter).exec())
            .pipe(map(doc => {
                return doc.map((item: any) => {
                    const model: T = { ...item._doc }
                    return model;
                })
            }));
    }

    getById(id: number): Observable<T | null> {
        return from(this.mongoseModel.findById(id)
            .exec()).pipe(map((response: any) => {
                let result = null;
                if (response) {
                    const model: T = (Object.assign({}, response._doc))
                    result = model;
                }
                return result
            }))
    }

    insert(entity: T): Observable<T> {
        const newUserDto = this.getModelToInsert(entity)

        return from(newUserDto
            .save()).pipe(map((response: any) => {
                const model: T = (Object.assign({}, response._doc))
                return model;
            }));
    }

    update(entity: any): Observable<boolean> {
        const entityToUpdate = { ...entity, id: undefined };
        return from(this.mongoseModel.findOneAndUpdate({ _id: entity.id }, { $set: entityToUpdate } as any).exec())
            .pipe(map(_ => true));
    }

    delete(id: string): Observable<boolean> {
        return from(this.mongoseModel.remove({ _id: id }).exec()).pipe(map(_ => true));
    }
}