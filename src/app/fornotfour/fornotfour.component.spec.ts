import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornotfourComponent } from './fornotfour.component';

describe('FornotfourComponent', () => {
  let component: FornotfourComponent;
  let fixture: ComponentFixture<FornotfourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FornotfourComponent]
    });
    fixture = TestBed.createComponent(FornotfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
