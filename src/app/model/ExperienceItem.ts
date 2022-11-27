import {Item} from "./Item";
import {Skill} from "./Skill";

export class ExperienceItem extends Item {
  private appliedSkills: Skill[];


  constructor(dateOfStart: string, dateOfEnd: string, location: string, description: string, appliedSkills: Skill[]) {
    super(dateOfStart, dateOfEnd, location, description);
    this.appliedSkills = appliedSkills;
  }
}
