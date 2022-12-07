import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {CurriculumService} from "../../service/curriculum.service";
import {Curriculum} from "../../model/Curriculum";
import {TranslateService} from "@ngx-translate/core";

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

  constructor(private formBuilder: FormBuilder, private translateService: TranslateService,
              private curriculumService: CurriculumService) {
    this.userFormGroup = this.curriculumService.buildUserFromGroup();
    this.educationItemsFormGroup = this.curriculumService.buildEducationFormGroup()
    this.skillsFormGroup = this.curriculumService.buildSkillsFormGroup();
    this.experienceItemsFormGroup = this.curriculumService.buildExperienceItemsFormGroup();
    this.contactsFormGroup = this.curriculumService.buildContactsFormGroup();
  }

  ngOnInit(): void {}

  getMatLabelI18n(label: string): string {
    let labelTranslated = '';
    this.translateService.get(label).subscribe(translation => {
      labelTranslated = translation;
    });
    return labelTranslated;
  }

  downloadCV() {
    const user = this.curriculumService.collectUserData(this.userFormGroup);
    const intro = this.curriculumService.getUserIntro(this.userFormGroup);
    const educationItems = this.curriculumService.collectEducationData(this.educationItemsAsFormGroupArray);
    const skills = this.curriculumService.collectSkillsData(this.skillsAsFormGroupArray);
    const experienceItems = this.curriculumService.collectExperienceData(this.experienceItemsAsFormGroupArray);
    const contacts = this.curriculumService.collectContactData(this.contactsAsFormGroupArray);
    const cv = new Curriculum(user, intro, educationItems, experienceItems, skills, contacts);
    this.curriculumService.generateCV(cv);
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
