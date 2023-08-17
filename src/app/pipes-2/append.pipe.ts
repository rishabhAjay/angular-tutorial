import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'append' })
export class AppendPipe implements PipeTransform {
  //you can also make arguments optional
  transform(value: string, length?: number) {
    if (length) return 'City Name: ' + value.substring(0, length);
    else return 'City Name: ' + value;
  }
}
