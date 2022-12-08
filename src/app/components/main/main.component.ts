import { Component, OnInit } from '@angular/core';
import {I18nService} from "../../service/i18n.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public i18nService: I18nService) { }

  ngOnInit(): void {
  }



}
