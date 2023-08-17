import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesModuleComponent } from './services-module.component';

describe('ServicesModuleComponent', () => {
  let component: ServicesModuleComponent;
  let fixture: ComponentFixture<ServicesModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesModuleComponent]
    });
    fixture = TestBed.createComponent(ServicesModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
