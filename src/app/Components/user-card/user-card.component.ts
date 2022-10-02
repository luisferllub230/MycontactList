import { Component, OnInit } from '@angular/core';
import { ReadJsonDataService } from 'src/app/Services/read-json-data.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
})
export class UserCardComponent{

  constructor(private jsonData: ReadJsonDataService) { }

  userList:Array<any>= this.jsonData.getAllData();

}
