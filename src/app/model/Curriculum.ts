import {User} from "./User";
import {Skill} from "./Skill";
import {EducationItem} from "./EducationItem";
import {ExperienceItem} from "./ExperienceItem";
import {Contact} from "./Contact";

export interface Curriculum {
  user: User;
  intro: string;
  educationItems: EducationItem[];
  experienceItems: ExperienceItem[];
  skills: Skill[];
  contacts: Contact[];
}
