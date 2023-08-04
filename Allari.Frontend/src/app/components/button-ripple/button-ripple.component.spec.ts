import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRippleComponent } from './button-ripple.component';

describe('ButtonRippleComponent', () => {
  let component: ButtonRippleComponent;
  let fixture: ComponentFixture<ButtonRippleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonRippleComponent]
    });
    fixture = TestBed.createComponent(ButtonRippleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
