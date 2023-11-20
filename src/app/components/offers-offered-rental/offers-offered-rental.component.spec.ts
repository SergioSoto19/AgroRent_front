import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersOfferedRentalComponent } from './offers-offered-rental.component';

describe('OffersOfferedRentalComponent', () => {
  let component: OffersOfferedRentalComponent;
  let fixture: ComponentFixture<OffersOfferedRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersOfferedRentalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffersOfferedRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
