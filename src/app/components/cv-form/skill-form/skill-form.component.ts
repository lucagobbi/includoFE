import {Component, OnInit} from '@angular/core';
import {BaseItemComponent} from "../base-item/base-item.component";

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.scss']
})
export class SkillFormComponent extends BaseItemComponent {

  skillLevel(level: number) {
    return level.toString();
  }

}
