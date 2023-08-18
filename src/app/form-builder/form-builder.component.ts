import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NoSpace } from '../validators/nospace.validator';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
})
export class FormBuilderComponent {
  form: any;

  //we can use form builder to avoid all the getter methods

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.minLength(5),
          NoSpace.noSpaceValidation,
        ],
      ],
      password: ['', [Validators.required]],
      toggle: ['', [Validators.required]],

      contactDetails: fb.group({
        address: ['', [Validators.required]],
        skills: [[], [Validators.required]],
      }),
    });
  }
  onAddSkill(tag: any) {
    console.log(tag);
    tag.items.map((element: object) => {
      this.fc.skills.push(new FormControl(element));
    });
  }

  makeInputTouched() {
    this.fc.skills.markAsTouched();
  }
  onSubmit() {
    console.log(this.fc.email);
  }
  get fc() {
    return this.form.controls;
  }

  get contactDetailsFc() {
    return this.form.controls.contactDetails.controls;
  }
}
