import { Model } from "mongoose";
import { Observable } from "rxjs";
import { BaseModel } from "../../../../../../1-domain/entities";
import { IBaseRepository } from "../../../../../../3.gateways/repositories/base/baseRepository";

export abstract class BaseRepository<T extends BaseModel> implements IBaseRepository<T>{
    private mongoseModel: Model<T,{},{}>;
    constructor(){
        this.mongoseModel =  this.getMongooseModel();
    }

    abstract getMongooseModel(): Model<T>;
    abstract getModelToInsert(newModel: T): any;
    
    get(filter: any): Observable<T[]> {
        return new Observable(subscriber => {
            this.mongoseModel.find(filter)
                .exec()
                .then(doc => {
                    subscriber.next(doc.map((item: any) => {
                        const model: T = (Object.assign({}, item._doc))
                        return model;
                    }));
                }).catch(error => {
                    subscriber.error(error);
                })
        })
    }

    getById(id: string): Observable<T | null> {
        return new Observable(subscriber => {
            this.mongoseModel.findById(id)
                .exec()
                .then((response: any) => {
                    if (response) {
                        const model: T = (Object.assign({}, response._doc))
                        subscriber.next(model);
                    } else {
                        subscriber.next(null)
                    }
                }).catch(error => {
                    subscriber.error(error);
                })
        })
    }

    insert(entity: T): Observable<T> {
        const newUserDto = this.getModelToInsert(entity)
        return new Observable(subscriber => {
            newUserDto
                .save()
                .then((response: any) => {
                    const model: T = (Object.assign({}, response._doc))
                    subscriber.next(model);
                })
                .catch((error: any) =>
                    subscriber.error(error)
                );
        })
    }
    
    update(entity: any): Observable<boolean> {
        return new Observable<boolean>(subscriber => {
            const entityToUpdate = {...entity, id: undefined };
            this.mongoseModel.findOneAndUpdate({ _id: entity.id }, { $set: entityToUpdate } as any)
                .exec()
                .then(() => {
                    subscriber.next(true);
                })
                .catch(error => {
                    subscriber.error(error);
                });
        });
    }

    delete(id: string): Observable<boolean> {
        return new Observable<boolean>(subscriber => {
            this.mongoseModel.remove({ _id: id })
                .exec()
                .then(() => {
                    subscriber.next(true);
                })
                .catch(error => {
                    subscriber.error(error);
                });
        });
    }
}