import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { TagModel } from 'ngx-chips/core/tag-model';
import { Observable, filter, of } from 'rxjs';

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
      password: new FormControl('', [Validators.required]),
      toggle: new FormControl('', [Validators.required]),

      contactDetails: new FormGroup({
        address: new FormControl('', [Validators.required]),
        skills: new FormControl([], [Validators.required]),
      }),
    });
  }
  onAddSkill(tag: any) {
    console.log(tag);
    tag.items.map((element: object) => {
      this.skills.push(new FormControl(element));
    });
  }

  makeInputTouched() {
    this.skills.markAsTouched();
  }
  onSubmit() {
    console.log(this.skills);
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

  get address() {
    return this.form.get('contactDetails.address');
  }

  get skills() {
    return this.form.get('contactDetails.skills');
  }
}
