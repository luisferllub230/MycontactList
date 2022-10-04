import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ReadJsonDataService } from 'src/app/Services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
})
export class UserCardComponent {

  constructor(private contactServices: ReadJsonDataService) { }

  userList: Array<any> = this.contactServices.getAllData();

  id = 0;

  setId(id: number) {
    this.id = id;
  }

  delete(id: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to deleted this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, restore it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.contactServices.deleteData(id);
      }
    })
  }

  restore(id: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, restore it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Restored!',
          'Your file has been restored.',
          'success'
        )
        this.contactServices.restoreData(id);
      }
    })

  }
}
