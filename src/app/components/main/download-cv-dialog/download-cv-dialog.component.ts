import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Download} from "../../../model/Download";
import {CurriculumService} from "../../../service/curriculum.service";

@Component({
  selector: 'app-download-cv-dialog',
  templateUrl: './download-cv-dialog.component.html',
  styleUrls: ['./download-cv-dialog.component.scss']
})
export class DownloadCvDialog implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DownloadCvDialog>,
    private cvService: CurriculumService,
    @Inject(MAT_DIALOG_DATA) public data: Download
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  downloadCv() {
    this.cvService.generateCv(this.data.cv, this.data.picture);
  }
}
