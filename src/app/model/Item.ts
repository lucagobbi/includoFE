export class Item {
  private dateOfStart: string;
  private dateOfEnd: string;
  private location: string;
  private description: string;


  constructor(dateOfStart: string, dateOfEnd: string, location: string, description: string) {
    this.dateOfStart = dateOfStart;
    this.dateOfEnd = dateOfEnd;
    this.location = location;
    this.description = description;
  }
}
