import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { FamilyInMemoryService } from './service/FamilyInMemoryService';
import { FamilyService } from './service/FamilyService';
import { FamilyComponent } from './family/family.component';
import { EventModule } from './event/event.module';
import { FamilyModule } from './family/family.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    EventModule,
    FamilyModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
