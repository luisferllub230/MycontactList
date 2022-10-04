import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReadJsonDataService } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
})
export class ContactEditComponent {

  @Input() contactId: number = 0; 
  backup:any;

  constructor(private contactServices: ReadJsonDataService) { }

  contactForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('',
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('',
      [Validators.required, Validators.email]),
    phone: new FormControl('',
      [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]),
  });



  getInfoByID = (id: number) => {
    let container = this.contactServices.getById(id);
    this.backup = container;
    this.contactForm.setValue({id: container[0].id, name: container[0].name, email: container[0].email, phone: container[0].phone});
  }

  cleanModel(): void {
    this.contactForm.setValue({id: 0, name: '', email: '', phone: ''});
  }

  save(): void {
    let id = this.contactId;
    let name = this.contactForm.get('name')?.value;
    let email = this.contactForm.get('email')?.value;
    let phone = this.contactForm.get('phone')?.value;
    let backup = this.backup;

    if (id >=1 ){
      this.contactServices.updateData({id: id, name: name, email: email, phone: phone}, backup);
    }
  }

}
