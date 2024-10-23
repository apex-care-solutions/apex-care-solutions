import { Skill } from "../model/skill";
import { IRepository } from "./repository";

export interface ISkillRepository extends IRepository<Skill> {
    findByType(type: string): Promise<Skill[]>;
}
