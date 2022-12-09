import { Component, OnInit } from '@angular/core';
import {CurriculumService} from "../../../service/curriculum.service";

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  private currentUpload!: File;
  dropzoneActive: boolean = false;

  constructor(private service: CurriculumService) { }

  ngOnInit(): void {}

  dropzoneState($event: boolean) {
    this.dropzoneActive = $event;
  }

  handleClick(event: any) {
    alert(event.target.files[0].name + ' has been clicked!');
  }
  handleDrop(fileList: FileList) {
    alert(fileList.item(0)?.name + ' has been dropped!');
    this.service.generateImgPdf(fileList.item(0)).subscribe(value => {
      this.downLoadFile(value);
    });
  }

  downLoadFile(data: any) {
    let blob = new Blob([data], { type: 'application/x-download'});
    let url = window.URL.createObjectURL(blob);
    window.open(url);
  }

}
