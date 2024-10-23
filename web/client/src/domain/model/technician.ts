import { Job } from "./job";
import { TechnicianSkill } from "./technician-skill";

export interface Technician {
    technicianId: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    location: string;
    company: string;
    skills?: TechnicianSkill[];
    jobs?: Job[];
}
