export class User {
  private name:string;
  private surname:string;
  private dateOfBirth:string;
  private email:string;
  private phoneNumber:string;
  private address:string;

  constructor(name: string, surname: string, dateOfBirth: string, email: string, phoneNumber: string, address: string) {
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }
}
