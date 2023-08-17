import { Component } from '@angular/core';
import { ExampleService } from '../services/example.service';

@Component({
  selector: 'app-services-module',
  templateUrl: './services-module.component.html',
  styleUrls: ['./services-module.component.css'],
  //you can also mention your Injectible classes here without using the
  //injectible decorator as a provider
  // providers: [ExampleService]
})
export class ServicesModuleComponent {
  arrayListFromService: any;
  //injecting Service class
  constructor(private exampleService: ExampleService) {
    this.arrayListFromService = exampleService.arrayList;
  }
}
