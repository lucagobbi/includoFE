import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.css']
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

  downloadCV() {}

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
          dateOfStart: ['', Validators.required],
          dateOfEnd: ['', Validators.required],
          location: ['', Validators.required],
          description: ['', Validators.required],
          field: ['', Validators.required],
          title: ['', Validators.required],
          graduation: ['', Validators.required]
        })
      ]),
    })
  }

  buildSkillsFormGroup(): FormGroup {
    return this.formBuilder.group({
      skills: this.formBuilder.array([
        this.formBuilder.group({
          title: ['', Validators.required],
          level: ['', Validators.required]
        })
      ])
    })
  }



  // experienceItems: this.formBuilder.array([
  //                                           this.formBuilder.group({
  //     dateOfStart: ['', Validators.required],
  //     dateOfEnd: ['', Validators.required],
  //     location: ['', Validators.required],
  //     description: ['', Validators.required],
  //     appliedSkills: this.formBuilder.array([
  //     this.formBuilder.group({
  //       title: ['', Validators.required],
  //       level: ['', Validators.required]
  //     })
  //   ])
  //                                           })
  //                                         ]),
  //                                ]),
  // contacts: this.formBuilder.array([
  //                                    this.formBuilder.group({
  //     social: ['', Validators.required],
  //     link: ['', Validators.required]
  //   })
  //                                  ])

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
