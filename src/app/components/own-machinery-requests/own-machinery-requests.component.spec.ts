import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnMachineryRequestsComponent } from './own-machinery-requests.component';

describe('OwnMachineryRequestsComponent', () => {
  let component: OwnMachineryRequestsComponent;
  let fixture: ComponentFixture<OwnMachineryRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnMachineryRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnMachineryRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
