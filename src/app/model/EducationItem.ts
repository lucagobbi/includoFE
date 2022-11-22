import {Item} from "./Item";

export interface EducationItem extends Item {
  field: string;
  title: string;
  graduation: string;
}
