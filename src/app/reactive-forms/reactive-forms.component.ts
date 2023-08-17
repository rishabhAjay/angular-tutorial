import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent {
  form: any;
  constructor() {
    //same as assigning a template variable to ngForm directive
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(5),
      ]),
      password: new FormControl(),
      toggle: new FormControl(),
    });
  }

  onSubmit() {
    console.log(this.form);
  }
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  get toggle() {
    return this.form.get('toggle');
  }
}
