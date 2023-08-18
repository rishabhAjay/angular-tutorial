import { Component } from '@angular/core';
import { ExampleService } from '../services/example.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-parent',
  templateUrl: './routing-parent.component.html',
  styleUrls: ['./routing-parent.component.css'],
})
export class RoutingParentComponent {
  arrayList: any;
  constructor(exampleService: ExampleService, private router: Router) {
    this.arrayList = exampleService.arrayList;
  }

  onSubmit() {
    //you can also pass queryParams as an object and other paramters
    this.router.navigate(['/child-1']);
  }
}
