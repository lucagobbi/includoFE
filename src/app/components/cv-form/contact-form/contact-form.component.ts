import {Component, OnInit} from '@angular/core';
import {BaseItemComponent} from "../base-item/base-item.component";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent extends BaseItemComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
