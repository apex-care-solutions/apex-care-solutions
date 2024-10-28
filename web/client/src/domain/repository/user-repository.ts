import { ApexCareApi } from "../data/services/apex-care-api/apex-care-api";
import { User } from "../model/user";
import { IRepository } from "./repository";

export class UserRepository implements IRepository<User> {
    constructor(private apexCareApi: ApexCareApi) {}
    findAll(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    create(entity: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    update(id: string, entity: Partial<User>): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
