import {Component, EventEmitter, Output} from '@angular/core';
import {BaseItemComponent} from "../base-item/base-item.component";
import {Skill} from "../../../../model/Skill";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TranslateService} from "@ngx-translate/core";
import {I18nService} from "../../../../service/i18n.service";

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.scss']
})
export class SkillFormComponent extends BaseItemComponent {

  @Output() confirmedSkill: EventEmitter<Skill> = new EventEmitter<Skill>();

  constructor(private snackBar: MatSnackBar, public i18nService: I18nService,
              private translateService: TranslateService) {
    super();
  }

  confirmSkill() {
    const skill = new Skill(this.formGroup.get('title')?.value, this.formGroup.get('level')?.value);
    this.confirmedSkill.emit(skill);
    this.formGroup.controls["confirmed"].setValue(true);
    this.openSkillConfirmedSnackBar(this.formGroup.get('title')?.value);
  }

  openSkillConfirmedSnackBar(title: string) {
    let msg;
    this.translateService.get('skillAdded').subscribe(value => {
      msg = value;
    });
    this.snackBar.open(title + ' ' + msg, undefined, {
      duration: 2000
    });
  }

}
