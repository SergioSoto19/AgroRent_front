import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryInfoComponent } from './machinery-info.component';

describe('MachineryInfoComponent', () => {
  let component: MachineryInfoComponent;
  let fixture: ComponentFixture<MachineryInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineryInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
