import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserCardComponent } from './Components/user-card/user-card.component';
import { ReadJsonDataService } from './Services/contact.service';
import { ContacRegisterFormComponent } from './Components/contac-register-form/contac-register-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    ContacRegisterFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [ReadJsonDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
