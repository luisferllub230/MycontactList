import { Injectable } from '@angular/core';
import { userListDataRepository } from '../repository/userListData.repository';

@Injectable({
  providedIn: 'root'
})
export class ReadJsonDataService {

  constructor() { }

  private jsonData = userListDataRepository.initialize();

  public getAllData():Array<object>{
    let arrayObject:Array<object> = this.jsonData.readData();
    return arrayObject;
  }

}
