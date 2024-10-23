import { TechnicianSkill } from "../model/technician-skill";
import { IRepository } from "./repository";

export interface ITechnicianSkillRepository extends IRepository<TechnicianSkill> {
    findByTechnicianId(technicianId: string): Promise<TechnicianSkill[]>;
}
