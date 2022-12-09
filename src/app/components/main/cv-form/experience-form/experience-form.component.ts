import {Component, Input} from '@angular/core';
import {BaseItemComponent} from "../base-item/base-item.component";
import {Skill} from "../../../../model/Skill";
import {I18nService} from "../../../../service/i18n.service";
@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.scss']
})
export class ExperienceFormComponent extends BaseItemComponent {
  @Input() confirmedSkills!: Skill[];

  constructor(public i18nService: I18nService) {
    super();
  }
}
