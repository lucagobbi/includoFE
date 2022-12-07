import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Language} from "../../../model/Language";
import languageSupported from "../../../../assets/i18n/languageSupported.json";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  languageList: Language[] = languageSupported;
  selectedLanguage: Language | undefined = this.languageList.at(1);

  constructor(private translateService: TranslateService) {
    this.translateService.use("it");
  }

  ngOnInit(): void {}

  changeSiteLanguage(localeCode: string): void {
    const selectedLanguage = this.languageList.find(
      (language) => language.code === localeCode
    );
    if(selectedLanguage) {
      this.selectedLanguage = selectedLanguage;
      this.translateService.use(localeCode);
    }
  }

}
