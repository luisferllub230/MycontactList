import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ReadJsonDataService } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
})
export class UserCardComponent{

  constructor(private contactServices: ReadJsonDataService) { }

  userList:Array<any>= this.contactServices.getAllData();

  id = 0;

  setId(id:number){
    this.id = id;
  }
}
