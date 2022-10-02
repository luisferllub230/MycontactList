import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserCardComponent } from './Components/user-card/user-card.component';
import { ReadJsonDataService } from './Services/read-json-data.service';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ReadJsonDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
