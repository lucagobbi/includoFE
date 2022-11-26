import {User} from "./User";
import {Skill} from "./Skill";
import {EducationItem} from "./EducationItem";
import {ExperienceItem} from "./ExperienceItem";
import {Contact} from "./Contact";

export class Curriculum {
  private user: User;
  private intro: string;
  private educationItems: EducationItem[];
  private experienceItems: ExperienceItem[];
  private skills: Skill[];
  private contacts: Contact[];

  constructor(user: User, intro: string, educationItems: EducationItem[],
              experienceItems: ExperienceItem[], skills: Skill[], contacts: Contact[]) {
    this.user = user;
    this.intro = intro;
    this.educationItems = educationItems;
    this.experienceItems = experienceItems;
    this.skills = skills;
    this.contacts = contacts;
  }

}
