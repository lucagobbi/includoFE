import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Curriculum} from "../model/Curriculum";
import {User} from "../model/User";
import {EducationItem} from "../model/EducationItem";
import {Skill} from "../model/Skill";
import {ExperienceItem} from "../model/ExperienceItem";
import {Contact} from "../model/Contact";
import {FormBuilder, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {}

  generateCV(cv: Curriculum) {
    alert('Calling back end...\n' + 'Payload: ' + '\n' + JSON.stringify(cv));
  }

  getUserIntro(userFormGroup: FormGroup): string {
    return userFormGroup.get('intro')?.value;
  }

  collectUserData(userFormGroup: FormGroup): User {
    const user = new User(
      userFormGroup.get('name')?.value,
      userFormGroup.get('surname')?.value,
      userFormGroup.get('dateOfBirth')?.value,
      userFormGroup.get('phoneNumber')?.value,
      userFormGroup.get('address')?.value,
      userFormGroup.get('intro')?.value
    );
    return user;
  }

  collectEducationData(educationItemsAsFormGroupArray: FormGroup[]): EducationItem[] {
    const educationItems = new Array();
    educationItemsAsFormGroupArray.forEach(educationItemFormGroup => {
      const educationItem = new EducationItem(
        educationItemFormGroup.get('dateOfStart')?.value,
        educationItemFormGroup.get('dateOfEnd')?.value,
        educationItemFormGroup.get('location')?.value,
        educationItemFormGroup.get('description')?.value,
        educationItemFormGroup.get('field')?.value,
        educationItemFormGroup.get('title')?.value,
        educationItemFormGroup.get('graduation')?.value
      );
      educationItems.push(educationItem);
    })
    return educationItems;
  }

  collectSkillsData(skillsAsFormGroupArray: FormGroup[]): Skill[] {
    const skills = new Array();
    skillsAsFormGroupArray.forEach(skillFormGroup => {
      const skill = new Skill(
        skillFormGroup.get('title')?.value,
        skillFormGroup.get('level')?.value
      );
      skills.push(skill)
    });
    return skills;
  }

  collectExperienceData(experienceItemsAsFormGroupArray: FormGroup[]): ExperienceItem[] {
    const experienceItems = new Array();
    experienceItemsAsFormGroupArray.forEach(experienceItemFormGroup => {
      const experienceItem = new ExperienceItem(
        experienceItemFormGroup.get('dateOfStart')?.value,
        experienceItemFormGroup.get('dateOfEnd')?.value,
        experienceItemFormGroup.get('location')?.value,
        experienceItemFormGroup.get('description')?.value,
        experienceItemFormGroup.get('appliedSkills')?.value
      );
      experienceItems.push(experienceItem);
    });
    return experienceItems;
  }

  collectContactData(contactsAsFormGroupArray: FormGroup[]): Contact[] {
    const contacts = new Array();
    contactsAsFormGroupArray.forEach(contactFormGroup => {
      const contact = new Contact(
        contactFormGroup.get('social')?.value,
        contactFormGroup.get('link')?.value
      );
      contacts.push(contact);
    });
    return contacts;
  }

  buildUserFromGroup(): FormGroup {
    return this.formBuilder.group({
      name: [''],
      surname: [''],
      dateOfBirth: [''],
      email: [''],
      phoneNumber: [''],
      address: [''],
      intro: ['']
    })
  }

  buildEducationFormGroup(): FormGroup {
    return this.formBuilder.group({
      educationItems: this.formBuilder.array([
        this.formBuilder.group({
          dateOfStart: [''],
          dateOfEnd: [''],
          location: [''],
          description: [''],
          field: [''],
          title: [''],
          graduation: ['']
        })
      ]),
    })
  }

  buildSkillsFormGroup(): FormGroup {
    return this.formBuilder.group({
      skills: this.formBuilder.array([
        this.formBuilder.group({
          title: [''],
          level: ['']
        })
      ])
    })
  }

  buildExperienceItemsFormGroup(): FormGroup {
    return this.formBuilder.group({
      experienceItems: this.formBuilder.array([
        this.formBuilder.group({
          dateOfStart: [''],
          dateOfEnd: [''],
          location: [''],
          description: [''],
          appliedSkills: ['']
        })])
    })
  }

  buildContactsFormGroup(): FormGroup {
    return this.formBuilder.group({
      contacts: this.formBuilder.array([
        this.formBuilder.group({
          social: [''],
          link: ['']
        })
      ])
    })
  }

}
