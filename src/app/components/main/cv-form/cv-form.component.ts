import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {CurriculumService} from "../../../service/curriculum.service";
import {Curriculum} from "../../../model/Curriculum";
import {I18nService} from "../../../service/i18n.service";
import {Skill} from "../../../model/Skill";

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

  confirmedSkills: Skill[] = new Array();

  privacy: boolean = false;

  @Output() cv: EventEmitter<Curriculum> = new EventEmitter<Curriculum>();

  constructor(private formBuilder: FormBuilder, public i18nService: I18nService,
              public curriculumService: CurriculumService) {
    this.userFormGroup = this.curriculumService.buildUserFromGroup();
    this.educationItemsFormGroup = this.curriculumService.buildEducationFormGroup()
    this.skillsFormGroup = this.curriculumService.buildSkillsFormGroup();
    this.experienceItemsFormGroup = this.curriculumService.buildExperienceItemsFormGroup();
    this.contactsFormGroup = this.curriculumService.buildContactsFormGroup();
  }

  ngOnInit(): void {}

  cvReady() {
    this.cv.emit(this.buildCv());
  }

  buildCv(): Curriculum {
    const user = this.curriculumService.collectUserData(this.userFormGroup);
    const intro = this.curriculumService.getUserIntro(this.userFormGroup);
    const educationItems = this.curriculumService.collectEducationData(this.educationItemsAsFormGroupArray);
    const skills = this.curriculumService.collectSkillsData(this.skillsAsFormGroupArray);
    const experienceItems = this.curriculumService.collectExperienceData(this.experienceItemsAsFormGroupArray);
    const contacts = this.curriculumService.collectContactData(this.contactsAsFormGroupArray);
    return new Curriculum(user, intro, educationItems, experienceItems, skills, contacts, this.privacy);
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
      level: [''],
      confirmed: [false]
    })
    this.skills.push(skill);
  }

  confirmSkill(skill: Skill) {
    this.confirmedSkills.push(skill);
  }

  deleteSkill(index: number) {
    const skillFormGroup = this.skills.at(index);
    this.confirmedSkills = this.confirmedSkills?.filter(skill => skill.title !== skillFormGroup.get('title')?.value);
    this.deleteItem(index, this.skills);
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

  setPrivacy(checked: boolean){
    this.privacy = checked;
  }

}
