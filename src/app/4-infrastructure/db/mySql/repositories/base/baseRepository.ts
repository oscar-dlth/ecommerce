import { IBaseRepository } from "@gateways/repositories/base/baseRepository";
import db from "../../sequelizer/models";
import { IBaseEntity } from "@domain/core/interfaces/base/IBaseEntity";
import { AuthService } from "@domain/services/AuthService";


export class BaseRepository<T extends IBaseEntity> implements IBaseRepository<T>{

    constructor() { }

    async get(filter: any): Promise<T[]> {
        const result = await db.User.findAll(filter);
        const model: T[] = result.map((data: any) => data.dataValues)
        return model;

    }

    async getById(id: string): Promise<T | null> {
        const response = await db.User.findByPk(id);
        let result = null;
        if (response) {
            const model: T = (Object.assign({}, response.dataValues))
            result = model;
        }
        return result;
    }

    async insert(entity: T): Promise<T> { 
        const result = await db.User.create(entity);
        const model: T = (Object.assign({}, result.dataValues))
        return model;
    }

    async update(entity: T): Promise<number> {
        const entityToUpdate = { ...entity };
        const result = await db.User.update(entityToUpdate, { where: { id: entityToUpdate.id } });
        return result.length;
    }

    async delete(id: string): Promise<number> {
        const result = await db.User.destroy({ where: { id: id } });
        return result;
    }
}