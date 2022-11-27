import {Item} from "./Item";

export class EducationItem extends Item {
  private field: string;
  private title: string;
  private graduation: string;


  constructor(dateOfStart: string, dateOfEnd: string, location: string, description: string, field: string, title: string, graduation: string) {
    super(dateOfStart, dateOfEnd, location, description);
    this.field = field;
    this.title = title;
    this.graduation = graduation;
  }
}
