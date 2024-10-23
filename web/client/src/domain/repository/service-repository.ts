import { Service } from "../model/service";
import { IRepository } from "./repository";

export interface IServiceRepository extends IRepository<Service> {
    findByName(name: string): Promise<Service[]>;
}
