import { Technician } from "../model/technician";
import { IRepository } from "./repository";

export interface ITechnicianRepository extends IRepository<Technician> {
    findByLocation(location: string): Promise<Technician[]>;
    findBySkill(skillId: string): Promise<Technician[]>;
}
