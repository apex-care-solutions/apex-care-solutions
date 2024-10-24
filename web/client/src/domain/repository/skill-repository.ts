import { ApexCareApi } from "../data/services/apex-care-api/apex-care-api";
import { Skill } from "../model/skill";
import { IRepository } from "./repository";

export class SkillRepository implements IRepository<Skill> {
    constructor(private apexCareApi: ApexCareApi) {}
    findAll(): Promise<Skill[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Skill | null> {
        throw new Error("Method not implemented.");
    }
    create(entity: Skill): Promise<Skill> {
        throw new Error("Method not implemented.");
    }
    update(id: string, entity: Partial<Skill>): Promise<Skill | null> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
