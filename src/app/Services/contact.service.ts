import { Injectable } from '@angular/core';
import { userListDataRepository } from '../repository/userListData.repository';

@Injectable({
  providedIn: 'root'
})
export class ReadJsonDataService {

  constructor() { }

  private jsonData = userListDataRepository.initialize();

  //read data
  public getAllData(): Array<object> {
    let arrayObject: Array<object> = this.jsonData.readData();
    return arrayObject;
  }

  //insert new data into local storage
  public insertData(data: Object): void {
    this.jsonData.insertData(data);
  }

  //create a id for new data
  public createId(): number {
    let id = Math.floor(Math.random() * 1000);
    return id;
  }

}
