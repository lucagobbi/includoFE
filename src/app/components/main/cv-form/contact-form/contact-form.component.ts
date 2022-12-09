import {Component, OnInit} from '@angular/core';
import {BaseItemComponent} from "../base-item/base-item.component";
import {I18nService} from "../../../../service/i18n.service";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent extends BaseItemComponent implements OnInit {

  constructor(public i18nService: I18nService) {
    super();
  }

  ngOnInit(): void {
  }

}
