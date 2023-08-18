import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingChildOneComponent } from './routing-child-one.component';

describe('RoutingChildOneComponent', () => {
  let component: RoutingChildOneComponent;
  let fixture: ComponentFixture<RoutingChildOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingChildOneComponent]
    });
    fixture = TestBed.createComponent(RoutingChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
