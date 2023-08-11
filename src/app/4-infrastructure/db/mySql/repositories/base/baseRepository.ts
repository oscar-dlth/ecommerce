import { IBaseRepository } from "@gateways/repositories/base/baseRepository";
import { IBaseEntity } from "@domain/core/interfaces/base/IBaseEntity";
import { Op } from "sequelize";


export class BaseRepository<T extends IBaseEntity> implements IBaseRepository<T>{

    constructor(private entity: any) { }

    async get(filter: any): Promise<T[]> {
        const result = await this.entity.findAll(filter);
        const model: T[] = result.map((data: any) => data.dataValues)
        return model;

    }

    async getPagedRows(keyWord: string, searchFields: string[], page: number, size: number): Promise<{ rows: T[], count: number }> {
        const where =  this.getWhereOperator(searchFields, keyWord);

        const response = await this.entity.findAndCountAll({
            where,
            offset: page * size,
            limit: size,
            include: { all: true }
        });
        return response;
    }

    private getWhereOperator(searchFields: string[], keyWord: string){
        const where: any = {};

        where[Op.or] = [];
        searchFields.forEach((field: string) => {
            where[Op.or].push({
                [field]: {
                    [Op.like]: `%${keyWord}%`
                }
            })
        });

        return where;
    }

    async getById(id: string): Promise<T | null> {
        const response = await this.entity.findByPk(id);
        let result = null;
        if (response) {
            const model: T = (Object.assign({}, response.dataValues))
            result = model;
        }
        return result;
    }

    async insert(entity: T): Promise<T> {
        const result = await this.entity.create(entity);
        const model: T = (Object.assign({}, result.dataValues))
        return model;
    }

    async update(entity: T): Promise<number> {
        const entityToUpdate = { ...entity };
        const result = await this.entity.update(entityToUpdate, { where: { id: entityToUpdate.id } });
        return result.length;
    }

    async delete(id: string): Promise<number> {
        const result = await this.entity.destroy({ where: { id: id } });
        return result;
    }
}