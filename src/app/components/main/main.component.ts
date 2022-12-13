import { Component, OnInit } from '@angular/core';
import {I18nService} from "../../service/i18n.service";
import {Curriculum} from "../../model/Curriculum";
import {CurriculumService} from "../../service/curriculum.service";
import {MatDialog} from "@angular/material/dialog";
import {DownloadCvDialog} from "./download-cv-dialog/download-cv-dialog.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  picture!: any;
  pictureUploaded!: boolean;

  constructor(public i18nService: I18nService, private dialog: MatDialog) { }

  ngOnInit(): void {}


  setCv(cv: Curriculum) {
    this.dialog.open(DownloadCvDialog, {data: {cv: cv, picture: this.picture}})
  }

  setImg(picture: any){
    this.picture = picture;
    if(picture) {
      this.pictureUploaded = true;
    }
  }

}
