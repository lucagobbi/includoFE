import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CvFormComponent } from './components/cv-form/cv-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatStepperModule} from "@angular/material/stepper";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSliderModule} from "@angular/material/slider";
import {MatTooltipModule} from "@angular/material/tooltip";
import { UserFormComponent } from './components/cv-form/user-form/user-form.component';
import { EducationFormComponent } from './components/cv-form/education-form/education-form.component';
import { SkillFormComponent } from './components/cv-form/skill-form/skill-form.component';
import { ExperienceFormComponent } from './components/cv-form/experience-form/experience-form.component';
import { ContactFormComponent } from './components/cv-form/contact-form/contact-form.component';
import { BaseItemComponent } from './components/cv-form/base-item/base-item.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CvFormComponent,
    NavbarComponent,
    UserFormComponent,
    EducationFormComponent,
    SkillFormComponent,
    ExperienceFormComponent,
    ContactFormComponent,
    BaseItemComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    MatIconModule,
    MatButtonToggleModule,
    MatToolbarModule,
    NgbModule,
    MatSliderModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
