import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRoutingComponent } from './home-routing.component';

describe('HomeRoutingComponent', () => {
  let component: HomeRoutingComponent;
  let fixture: ComponentFixture<HomeRoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeRoutingComponent]
    });
    fixture = TestBed.createComponent(HomeRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
