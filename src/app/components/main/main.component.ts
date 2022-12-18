import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {I18nService} from "../../service/i18n.service";
import {Curriculum} from "../../model/Curriculum";
import {CurriculumService} from "../../service/curriculum.service";
import {MatDialog} from "@angular/material/dialog";
import {DownloadCvDialog} from "./download-cv-dialog/download-cv-dialog.component";
import {MatTabGroup} from "@angular/material/tabs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  picture!: any;
  pictureUploaded!: boolean;
  selectedIndex: number = 0;
  template: number = 1;

  constructor(public i18nService: I18nService, private dialog: MatDialog) { }

  ngOnInit(): void {}

  moveToNextTab(){
    this.selectedIndex++;
  }


  setCv(cv: Curriculum) {
    this.dialog.open(DownloadCvDialog, {data: {cv: cv, picture: this.picture}})
  }

  setImg(picture: any){
    this.picture = picture;
    if(picture) {
      this.pictureUploaded = true;
    }
  }

  setTemplate(index: number) {
    this.template = index;
  }
}
