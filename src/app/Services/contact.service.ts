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

  getById(id: number): any {
    let container = this.getAllData().filter((item: any) => item.id === id);
    return container;
  }

  //create a id for new data
  public createId(): number {
    let id = Math.floor(Math.random() * 1000);
    return id;
  }

  //insert new data into local storage
  public insertData(data: Object): void {
    let container = this.getAllData();
    container.push(data);
    this.jsonData.insertData(container);
  }
  
  //update contact data
  public updateData(data: any, backup: any): void {
    let container = this.getAllData().filter((item: any) => item.id !== backup[0].id);
    let container2 = { backup: backup, id: data.id, name: data.name, email: data.email, phone: data.phone};
    container.push(container2);
    this.jsonData.insertData(container);
  }

  //delete contact data by id
  public deleteData(id: number): void {
    let container = this.getAllData().filter((item: any) => item.id !== id);
    this.jsonData.delete(container);
  }

}
