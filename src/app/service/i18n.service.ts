import { Injectable } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  constructor(private translateService: TranslateService) { }
  getMatLabelI18n(label: string): string {
    let labelTranslated = '';
    this.translateService.get(label).subscribe(translation => {
      labelTranslated = translation;
    });
    return labelTranslated;
  }

}
