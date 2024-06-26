import { Component, OnInit, inject } from '@angular/core';
import { Mouse } from '../models/mouse.model';
import { MouseService } from '../services/mouse.service';

@Component({
  selector: 'app-mouse-list',
  templateUrl: './mouse-list.component.html',
  styleUrl: './mouse-list.component.scss'
})
export class MouseListComponent implements OnInit {
  mouseService = inject(MouseService);
  mouseList!: Mouse[];
  isFormView = false;

  ngOnInit(): void {
    this.loadData();
  }

  public onMouseDelete(mouse: Mouse) {
    this.mouseService.deleteMouse(mouse.id).subscribe(() => {
      this.loadData();
    });
  }

  public loadData() {
    this.mouseService.getMouseList().subscribe((result) => {
      this.mouseList = result;
    });
  }

  public switchView() {
    this.isFormView = !this.isFormView;
  }

  public onFormSubmitted(event: any) {
    this.loadData();
    this.switchView();
  }
}
