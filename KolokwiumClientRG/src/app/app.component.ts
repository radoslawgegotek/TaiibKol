import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'KolokwiumClientRG';
  private readonly router = inject(Router);


  redirectToMouseList() {
    this.router.navigate(['/'])
  }

  redirectToKeyboards() {
    this.router.navigate(['keyboards'])
  }
}
