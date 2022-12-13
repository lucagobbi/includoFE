import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  @Input() uploaded: boolean = false;
  dropzoneActive: boolean = false;
  @Output() picture: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {}

  dropzoneState($event: boolean) {
    this.dropzoneActive = $event;
  }

  handleClick(event: any) {
    this.picture.emit(event.target.files[0]);
  }

  handleDrop(fileList: FileList) {
    this.picture.emit(fileList.item(0));
  }

}
