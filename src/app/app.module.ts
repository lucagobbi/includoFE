import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CvFormComponent } from './components/main/cv-form/cv-form.component';
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
import { UserFormComponent } from './components/main/cv-form/user-form/user-form.component';
import { EducationFormComponent } from './components/main/cv-form/education-form/education-form.component';
import { SkillFormComponent } from './components/main/cv-form/skill-form/skill-form.component';
import { ExperienceFormComponent } from './components/main/cv-form/experience-form/experience-form.component';
import { ContactFormComponent } from './components/main/cv-form/contact-form/contact-form.component';
import { BaseItemComponent } from './components/main/cv-form/base-item/base-item.component';
import {HttpClientModule} from "@angular/common/http";
import { FileDropDirective } from './directives/file-drop.directive';
import { UploadFileComponent } from './components/main/upload-file/upload-file.component';
import {NgxTranslateModule} from "../translate/translate.module";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {MatButtonModule} from "@angular/material/button";
import {MatBadgeModule} from "@angular/material/badge";
import {MatTabsModule} from "@angular/material/tabs";
import { MainComponent } from './components/main/main.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { FooterComponent } from './components/footer/footer.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {TitleCasePipe} from "@angular/common";
import { DownloadCvDialog } from './components/main/download-cv-dialog/download-cv-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {RouterModule} from "@angular/router";
import { CarouselComponent } from './components/main/startup/carousel/carousel.component';
import { StartupComponent } from './components/main/startup/startup.component';
import {CarouselModule} from "ngx-owl-carousel-o";

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
    BaseItemComponent,
    FileDropDirective,
    UploadFileComponent,
    MainComponent,
    FooterComponent,
    DownloadCvDialog,
    CarouselComponent,
    StartupComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule,
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
    MatTooltipModule,
    BsDropdownModule,
    NgxTranslateModule,
    MatButtonModule,
    MatBadgeModule,
    MatTabsModule,
    MatProgressBarModule,
    MatSnackBarModule,
    TooltipModule,
    MatDialogModule,
    CarouselModule
  ],
  providers: [TitleCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
