import {Component, EventEmitter, Output} from '@angular/core';
import {BaseItemComponent} from "../base-item/base-item.component";
import {Skill} from "../../../model/Skill";

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.scss']
})
export class SkillFormComponent extends BaseItemComponent {

}
