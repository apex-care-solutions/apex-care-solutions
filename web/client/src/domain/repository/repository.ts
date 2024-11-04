import { ApexAPIResponse } from "../data/services/apex-care-api/apex-care-api";


export interface IRepository<T> {
    findAll(): Promise<ApexAPIResponse<T[]>>;
    findById(id: string): Promise<ApexAPIResponse<T | null>>;
    create(entity: T): Promise<ApexAPIResponse<T>>;
    update(id: string, entity: Partial<T>): Promise<ApexAPIResponse<T | null>>;
    delete(id: string): Promise<ApexAPIResponse<boolean>>;
}

export abstract class Repository<T> implements IRepository<T> {
    findAll(): Promise<ApexAPIResponse<T[]>> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<ApexAPIResponse<T | null>> {
        throw new Error("Method not implemented.");
    }
    create(entity: T): Promise<ApexAPIResponse<T>> {
        throw new Error("Method not implemented.");
    }
    update(id: string, entity: Partial<T>): Promise<ApexAPIResponse<T | null>> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<ApexAPIResponse<boolean>> {
        throw new Error("Method not implemented.");
    }
   
}
