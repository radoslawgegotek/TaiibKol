import { Component, EventEmitter, Output, inject } from '@angular/core';
import { MouseForm } from '../models/mouse.model';
import { MouseService } from '../services/mouse.service';

@Component({
  selector: 'app-mouse-form',
  templateUrl: './mouse-form.component.html',
  styleUrl: './mouse-form.component.scss'
})
export class MouseFormComponent {

  @Output() submitted = new EventEmitter<void>();
  public mouseForm: MouseForm = {
    model: null,
    dpi: null
  };

  readonly mouseService = inject(MouseService);

  public onSubmit(event: any) {
    this.mouseService.addMouse(this.mouseForm).subscribe(() => {
      this.submitted.emit();
    })
  }

}
