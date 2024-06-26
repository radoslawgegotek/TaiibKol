import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MouseFormComponent } from './mouse-form/mouse-form.component';
import { MouseListComponent } from './mouse-list/mouse-list.component';
import { MouseRowComponent } from './mouse-row/mouse-row.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { KeyboardsComponent } from './keyboards/keyboards.component';

@NgModule({
  declarations: [
    AppComponent,
    MouseFormComponent,
    MouseListComponent,
    MouseRowComponent,
    KeyboardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
