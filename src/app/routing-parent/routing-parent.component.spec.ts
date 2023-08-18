import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingParentComponent } from './routing-parent.component';

describe('RoutingParentComponent', () => {
  let component: RoutingParentComponent;
  let fixture: ComponentFixture<RoutingParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingParentComponent]
    });
    fixture = TestBed.createComponent(RoutingParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
