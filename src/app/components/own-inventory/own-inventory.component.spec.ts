import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnInventoryComponent } from './own-inventory.component';

describe('OwnInventoryComponent', () => {
  let component: OwnInventoryComponent;
  let fixture: ComponentFixture<OwnInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
