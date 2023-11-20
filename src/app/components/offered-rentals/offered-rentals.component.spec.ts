import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferedRentalsComponent } from './offered-rentals.component';

describe('OfferedRentalsComponent', () => {
  let component: OfferedRentalsComponent;
  let fixture: ComponentFixture<OfferedRentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferedRentalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferedRentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
