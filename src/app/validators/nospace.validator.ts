import { AbstractControl, ValidationErrors } from '@angular/forms';

export class NoSpace {
  //access this method without instantiating it
  static noSpaceValidation(control: AbstractControl): ValidationErrors | null {
    let controlValue = control.value as string;

    if (controlValue.indexOf(' ') >= 0) {
      return { spaceExists: true };
    } else {
      return null;
    }
  }
}
