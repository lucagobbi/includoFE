import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Curriculum} from "../../model/Curriculum";
import {CurriculumService} from "../../service/curriculum.service";

@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.scss']
})
export class CvFormComponent implements OnInit {

  userFormGroup: FormGroup;
  educationItemsFormGroup: FormGroup;
  skillsFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userFormGroup = this.buildUserFromGroup();
    this.educationItemsFormGroup = this.buildEducationFormGroup()
    this.skillsFormGroup = this.buildSkillsFormGroup();
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
          appliedSkills: this.formBuilder.array([
            this.formBuilder.group({
              title: [''],
              level: ['']
            })
          ])
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





  get skills() {
    return this.skillsFormGroup.controls["skills"] as FormArray;
  }

  get skillsAsFormGroupArray() {
    return this.skills.controls as FormGroup[];
  }

  addSkill() {
    const skill = this.formBuilder.group({
      title: ['', Validators.required],
      level: ['', Validators.required]
    })
    this.skills.push(skill);
  }

  deleteSkill(index: number) {
    this.skills.removeAt(index);
  }

  formatLabel(value: number): string {
    return `${value}`;
  }

  get educationItems() {
    return this.educationItemsFormGroup.controls["educationItems"] as FormArray;
  }

  get educationItemsAsFormGroupArray() {
    return this.educationItems.controls as FormGroup[];
  }

  addEducationItem() {
    const educationItem = this.formBuilder.group({
      dateOfStart: ['', Validators.required],
      dateOfEnd: ['', Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required],
      field: ['', Validators.required],
      title: ['', Validators.required],
      graduation: ['', Validators.required]
    })
    this.educationItems.push(educationItem);
  }

  deleteEducationItem(index: number) {
    this.educationItems.removeAt(index);
  }
}
