import { IReadOperation } from "./base/ReadOperation";
import { Brand } from "@domain/entities/Brand";

export interface IBrandService extends IReadOperation<Brand>{}