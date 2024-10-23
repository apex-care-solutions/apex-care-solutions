export class Skill {
    skillId: string;
    type: string;
    description: string;

    constructor(skillId: string, type: string, description: string) {
        this.skillId = skillId;
        this.type = type;
        this.description = description;
    }
}
