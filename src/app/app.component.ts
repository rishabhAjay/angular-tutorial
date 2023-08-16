import {
  Component,
  ViewChild,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'angular-tut';
  @ViewChild(HomeComponent) childObject!: any;
  fromChildCompLocal!: string;

  fromChildComponentViaEvent!: string;
  //after view is initialized, we call this lifecycle method
  ngAfterViewInit(): void {
    console.log(this.childObject.fromChild);
    this.fromChildCompLocal = this.childObject.fromChild;
  }

  //we consume the event that we just emitted via Output from the child
  receiveMessage($event: any) {
    console.log($event);
    this.fromChildComponentViaEvent = $event;
  }
  parentComponentVariable: string = 'From App which is parent comp to child';
}
