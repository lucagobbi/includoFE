import {Component, Input, OnInit} from '@angular/core';
import {BaseItemComponent} from "../base-item/base-item.component";
import {Skill} from "../../../model/Skill";
import {FormGroup} from "@angular/forms";
import {CurriculumService} from "../../../service/curriculum.service";

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.scss']
})
export class ExperienceFormComponent extends BaseItemComponent implements OnInit {

  @Input() skillsFormArray!: FormGroup[];
  skills!: Skill[];

  constructor(private curriculumService: CurriculumService) {
    super();
  }

  ngOnInit(): void {
    this.skills = this.curriculumService.collectSkillsData(this.skillsFormArray);
  }



}
