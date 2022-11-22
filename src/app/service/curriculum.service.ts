import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Curriculum} from "../model/Curriculum";

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  RPI_URL = 'http://192.168.1.245/curriculum/generate';

  constructor(private http: HttpClient) {}

  generateCV(cv: Curriculum) {
    this.http.post(this.RPI_URL, cv);
  }

}
