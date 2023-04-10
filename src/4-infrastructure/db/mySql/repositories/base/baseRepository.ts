import {  from, map, Observable, of, throwError } from "rxjs";
import { BaseModel } from "../../../../../1-domain/entities";
import { IBaseRepository } from "../../../../../3.gateways/repositories/base/baseRepository";
import { JWTManager } from "../../../../identity/JWT/JWTManager";
import db from "../../sequelizer/models";


export class BaseRepository<T extends BaseModel> implements IBaseRepository<T>{
    
    constructor() { }

    onUpdateEntity( entity: T ): T {

        return entity;

    }

    get(filter: any): Observable<T[]> {

        return from(db.User.findAll(filter))
            .pipe(map((response: any) => {

                return response.map((item: any) => {
                    const model: T = { ...item.dataValues }
                    return model;
                })

            }));

    }

    getById(id: number): Observable<T | null> {

        return from(db.User.findByPk(id)).pipe(map((response: any) => {

                let result = null;
                if (response) {
                    const model: T = (Object.assign({}, response.dataValues))
                    result = model;
                }
                return result;

            }))

    }

    insert(entity: T): Observable<T> {

        this.onUpdateEntity(entity);

        return  from(db.User.create( entity)).pipe(map((response: any) => {

                    const model: T = (Object.assign({}, response._doc))
                    return model;

                }));
                
    }

    update(entity: any): Observable<boolean> {

        const entityToUpdate = { ...entity, id: undefined };

        return from(db.User.update( entityToUpdate , {
            where: {
              _id:  entity.id
            }
          }))
        .pipe(map(_ => true));
        
    }

    delete(id: string): Observable<boolean> {

        return from( db.User.destroy({
            where: {
              _id: id
            }
        }))
        .pipe(map(_ => true));

    }
}