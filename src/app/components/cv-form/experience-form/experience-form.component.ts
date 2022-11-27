import {Component, OnInit} from '@angular/core';
import {BaseItemComponent} from "../base-item/base-item.component";
@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.scss']
})
export class ExperienceFormComponent extends BaseItemComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
