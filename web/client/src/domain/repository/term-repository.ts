import { ApexCareApi } from "../data/services/apex-care-api/apex-care-api";
import { Term } from "../model/term";
import { IRepository } from "./repository";

export class TermRepository implements IRepository<Term> {
    constructor(private apexCareApi: ApexCareApi) {}
    findAll(): Promise<Term[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<Term | null> {
        throw new Error("Method not implemented.");
    }
    create(entity: Term): Promise<Term> {
        throw new Error("Method not implemented.");
    }
    update(id: string, entity: Partial<Term>): Promise<Term | null> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
