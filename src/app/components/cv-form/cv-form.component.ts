import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.scss']
})
export class CvFormComponent implements OnInit {

  userFormGroup: FormGroup;
  educationItemsFormGroup: FormGroup;
  skillsFormGroup: FormGroup;
  experienceItemsFormGroup: FormGroup;
  contactsFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userFormGroup = this.buildUserFromGroup();
    this.educationItemsFormGroup = this.buildEducationFormGroup()
    this.skillsFormGroup = this.buildSkillsFormGroup();
    this.experienceItemsFormGroup = this.buildExperienceItemsFormGroup();
    this.contactsFormGroup = this.buildContactsFormGroup();
  }

  ngOnInit(): void {}

  downloadCV() {
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

  get educationItems() {
    return this.educationItemsFormGroup.controls["educationItems"] as FormArray;
  }

  get educationItemsAsFormGroupArray() {
    return this.educationItems.controls as FormGroup[];
  }

  addEducationItem() {
    const educationItem = this.formBuilder.group({
      dateOfStart: [''],
      dateOfEnd: [''],
      location: [''],
      description: [''],
      field: [''],
      title: [''],
      graduation: ['']
    })
    this.educationItems.push(educationItem);
  }

  get skills() {
    return this.skillsFormGroup.controls["skills"] as FormArray;
  }

  get skillsAsFormGroupArray() {
    return this.skills.controls as FormGroup[];
  }

  addSkill() {
    const skill = this.formBuilder.group({
      title: [''],
      level: ['']
    })
    this.skills.push(skill);
  }

  get experienceItems() {
    return this.experienceItemsFormGroup.controls["experienceItems"] as FormArray;
  }

  get experienceItemsAsFormGroupArray() {
    return this.experienceItems.controls as FormGroup[];
  }

  addExperienceItem() {
    const experienceItem = this.formBuilder.group({
      dateOfStart: [''],
      dateOfEnd: [''],
      location: [''],
      description: [''],
      appliedSkills: ['']
    })
    this.experienceItems.push(experienceItem);
  }

  get contacts() {
    return this.contactsFormGroup.controls["contacts"] as FormArray;
  }

  get contactsAsFormGroupArray() {
    return this.contacts.controls as FormGroup[];
  }

  addContact() {
    const contact = this.formBuilder.group({
      social: [''],
      link: ['']
    })
    this.contacts.push(contact);
  }

  deleteItem(index: any, formArray: FormArray) {
    formArray.removeAt(index);
  }

}
