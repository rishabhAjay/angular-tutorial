import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-array-item',
  templateUrl: './array-item.component.html',
  styleUrls: ['./array-item.component.css'],
})
export class ArrayItemComponent {
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((value) => {
      console.log(value.get('id'));
    });
  }
}
