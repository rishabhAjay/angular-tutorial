import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  /*
1. Component Directive -> which is an angular directive with
a template view

2. Structural Directive -> which can change the DOM layout by
adding and removing DOM elements. Examples: *ngFor, *ngIf, *ngSwitchCase

3. Attribute Directive -> which can change the appearance or
behavior of an element, component, or another directive. ex: ngStyle, ngClass

4. Custom Directive -> which can create our custom
directive from scratch.
*/

  postsArray: String[] = [];

  addPost() {
    this.postsArray.push(`Post ${this.postsArray.length + 1}`);
  }

  deletePost(i: number) {
    this.postsArray.splice(i, 1);
  }

  //ngswitch
  switchVariable: string = 'A2';

  //ng style and ng class
  ngStyleVariable: boolean = true;
}
