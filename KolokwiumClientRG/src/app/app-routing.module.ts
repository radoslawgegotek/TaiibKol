import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MouseListComponent } from './mouse-list/mouse-list.component';
import { KeyboardsComponent } from './keyboards/keyboards.component';

const routes: Routes = [
  { path: 'mouse-list', component: MouseListComponent },
  { path: 'keyboards', component: KeyboardsComponent },
  { path: '', redirectTo: 'mouse-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
