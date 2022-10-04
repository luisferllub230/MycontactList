import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReadJsonDataService } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-contac-register-form',
  templateUrl: './contac-register-form.component.html',
})
export class ContacRegisterFormComponent {

  constructor(private contactServices: ReadJsonDataService,) { }

  contactForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('',
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('',
      [Validators.required, Validators.email]),
    phone: new FormControl('',
      [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]),
  });

  save(): void {
    let id = this.contactServices.createId();
    let name = this.contactForm.value.name;
    let email = this.contactForm.value.email;
    let phone = this.contactForm.value.phone;

    if (this.contactForm.valid) {
      this.contactServices.insertData({ id, name, email, phone });
      this.contactForm.reset();
    }
  }

}
