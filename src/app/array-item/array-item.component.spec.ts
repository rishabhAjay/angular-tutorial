import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayItemComponent } from './array-item.component';

describe('ArrayItemComponent', () => {
  let component: ArrayItemComponent;
  let fixture: ComponentFixture<ArrayItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrayItemComponent]
    });
    fixture = TestBed.createComponent(ArrayItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
