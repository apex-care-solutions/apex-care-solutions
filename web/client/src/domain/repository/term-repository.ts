import { Term } from "../model/term";
import { IRepository } from "./repository";

export interface ITermRepository extends IRepository<Term> {
    findByRate(rate: number): Promise<Term[]>;
}
