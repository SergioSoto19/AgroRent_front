import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryRegistrationComponent } from './machinery-registration.component';

describe('MachineryRegistrationComponent', () => {
  let component: MachineryRegistrationComponent;
  let fixture: ComponentFixture<MachineryRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineryRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineryRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
