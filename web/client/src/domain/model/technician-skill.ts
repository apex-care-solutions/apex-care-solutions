export class TechnicianSkill {
    technicianSkillId: string;
    technicianId: string;
    skillId: string;

    constructor(
        technicianSkillId: string,
        technicianId: string,
        skillId: string,
    ) {
        this.technicianSkillId = technicianSkillId;
        this.technicianId = technicianId;
        this.skillId = skillId;
    }
}
