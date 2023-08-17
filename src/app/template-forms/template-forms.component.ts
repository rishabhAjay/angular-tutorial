import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { FormCheckComponent } from '@coreui/angular';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css'],
})
export class TemplateFormsComponent {
  shouldBeValidated: boolean = true;
  onSubmit(f: NgForm) {
    this.shouldBeValidated = true;
    console.log(f.value);
  }

  getValue(email: any) {
    console.log(email);
  }
}
