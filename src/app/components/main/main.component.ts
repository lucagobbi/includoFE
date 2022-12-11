import { Component, OnInit } from '@angular/core';
import {I18nService} from "../../service/i18n.service";
import {Curriculum} from "../../model/Curriculum";
import {CurriculumService} from "../../service/curriculum.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  cv!: Curriculum;
  picture!: any;

  constructor(public i18nService: I18nService, private curriculumService: CurriculumService) { }

  ngOnInit(): void {
  }

  setCv(cv: Curriculum) {
    this.cv = cv;
  }

  setImg(picture: any){
    this.picture = picture;
  }

  generateCv() {
    this.curriculumService.generateCv(this.cv, this.picture);
  }

}
