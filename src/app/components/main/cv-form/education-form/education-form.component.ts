import {Component, OnInit} from '@angular/core';
import {BaseItemComponent} from "../base-item/base-item.component";
import {I18nService} from "../../../../service/i18n.service";

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.scss']
})
export class EducationFormComponent extends BaseItemComponent implements OnInit {

  constructor(public i18nService: I18nService) {
    super();
  }

  ngOnInit(): void {
  }

}
