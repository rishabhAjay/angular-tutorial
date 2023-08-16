import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['h3 {color:red}'],
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title: string = 'title coming from the ts file';

  fromChild: string = 'From child to App Component';
  @Input() fromParent!: string;

  // ------------------------------------------------------------------------
  //the Output and event emitter is ideal when we wish to share data between
  //components via events like button clicks.

  //define a new event emitter to emit to parent
  @Output() messageEvent = new EventEmitter();

  toParentViaEvent: string = 'From Child to parent via event emitters';
  constructor() {}
  ngOnInit(): void {}

  sendMessage() {
    this.messageEvent.emit(this.toParentViaEvent);
  }
  // ------------------------------------------------------------------------

  // bindings

  //property binding
  imgUrl: string = 'https://clipart-library.com/data_images/320465.png';

  // class bindings
  showClass: boolean = true;

  //template variable
  sendTemplateVariable(username: string) {
    console.log(username);
  }

  //two way data binding
  userNameForTwoWay: string = 'hello data binding';

  functionForTwoWay() {
    console.log(this.userNameForTwoWay);
  }

  /*
  ONE-WAY DATA BINDING
    # String Interpolation - {{title}}
    Property Binding - [src]
    # Class Binding - [class.text-red]
    # Style Binding - [style.backgroundColor]

TWO-WAY DATA BINDING
    # Two-way Binding - [(ngModel)]
  
  */
}
