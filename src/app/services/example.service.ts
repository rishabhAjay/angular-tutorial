import { Injectable } from '@angular/core';

//by providing it as in injectible in root, you can initialize it in the
//constructor of a class
@Injectable({
  providedIn: 'root',
})
// if you wish to share data among unrelated components then services are for you
export class ExampleService {
  //you can manipulate these service data in any component that uses it
  arrayList: any = ['Item-1', 'Item-2', 'Item-3'];
  constructor() {}
}
