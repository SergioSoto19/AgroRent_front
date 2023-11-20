import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalsRequestComponent } from './rentals-request.component';

describe('RentalsRequestComponent', () => {
  let component: RentalsRequestComponent;
  let fixture: ComponentFixture<RentalsRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalsRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalsRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
