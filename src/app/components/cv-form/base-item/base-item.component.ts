import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-base-item',
  templateUrl: './base-item.component.html'
})
export class BaseItemComponent {

  @Input() formGroup!: FormGroup;
  @Input() index!: number;
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  deleteItem() {
    this.deleteEvent.emit(this.index);
  }

}
