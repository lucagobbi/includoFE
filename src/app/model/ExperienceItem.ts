import {Item} from "./Item";
import {Skill} from "./Skill";

export interface ExperienceItem extends Item {
  appliedSkills: Skill[];
}
