import { CreateUserCommand } from "@application/users/commands/createUser/CreateUserCommand";
import { UserCreatedViewModel } from "@application/users/viewModels/userCreatedViewModel";
import { TOKENS } from "@dependency-inyection/tokens";
import { statusCodes } from "@domain/core/common/statusCodes";
import { IUserRepository } from "@gateways/repositories/IUserRepository";
import { injected } from "brandi";
import { User } from "@domain/entities/User";
import { BaseCommand } from "@application/common/baseCommands/BaseCommand";
import { ICreateOperation } from "@domain/services/base/CreateOperation";
import { IDeleteOperation } from "@domain/services/base/DeleteOperation";
import { IReadOperation } from "@domain/services/base/ReadOperation";
import { IUpdateOperation } from "@domain/services/base/UpdateOperation";
import { CreateOperation } from "./base/CreateOperation";
import { DeleteOperation } from "./base/DeleteOperation";
import { ReadOperation } from "./base/ReadOperation";
import { UpdateOperation } from "./base/UpdateOperation";
import { IAuthService } from "@domain/services/IAuthService";
import { IBrandService } from "@domain/services/IBrandService";
import { Brand } from "@domain/entities/Brand";
import { IBrandRepository } from "@gateways/repositories/IBrandRepository";

export class BrandService implements IBrandService {
    private readBrandOperation: IReadOperation<Brand>;

    constructor(brandRepository: IBrandRepository) {
        const searchFields = [ 'code', 'name', 'description']
        this.readBrandOperation = new ReadOperation(brandRepository, searchFields);
    }

    get(params: { keyWord: string; page: number; size: number; }): Promise<{ rows: Brand[]; count: number; }> {
        return this.readBrandOperation.get(params);
    }

    getById(id: string): Promise<Brand | null> {
        return this.readBrandOperation.getById(id);
    }
}

injected(BrandService, TOKENS.BrandRepository);