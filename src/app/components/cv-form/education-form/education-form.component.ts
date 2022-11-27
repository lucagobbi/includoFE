import {Component, OnInit} from '@angular/core';
import {BaseItemComponent} from "../base-item/base-item.component";

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.scss']
})
export class EducationFormComponent extends BaseItemComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
