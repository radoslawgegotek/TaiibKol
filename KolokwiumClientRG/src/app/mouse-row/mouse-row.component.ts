import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Mouse } from '../models/mouse.model';
import { MouseService } from '../services/mouse.service';

@Component({
  selector: '[app-mouse-row]',
  templateUrl: './mouse-row.component.html',
  styleUrl: './mouse-row.component.scss'
})
export class MouseRowComponent {
  @Input('app-mouse-row') mouse!: Mouse;
  @Output() deleted = new EventEmitter<Mouse>();
  mouseService = inject(MouseService);

  public onDeleteClick() {
    this.deleted.emit(this.mouse);
  }
}
