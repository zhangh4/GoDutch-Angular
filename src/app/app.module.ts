import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppHeader } from './app.header';


@NgModule({
  declarations: [
    AppHeader,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppHeader, AppComponent]
})
export class AppModule { }
