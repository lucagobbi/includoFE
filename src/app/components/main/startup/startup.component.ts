import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.scss']
})
export class StartupComponent implements OnInit {

  @Output() templateEvent: EventEmitter<number> = new EventEmitter();
  @Output() startEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  start() {
    this.startEvent.emit();
  }

  templateSelected(index: number) {
    this.templateEvent.emit(index);
  }

}
