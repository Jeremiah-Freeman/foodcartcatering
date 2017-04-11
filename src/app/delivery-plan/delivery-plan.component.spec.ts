import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPlanComponent } from './delivery-plan.component';

describe('DeliveryPlanComponent', () => {
  let component: DeliveryPlanComponent;
  let fixture: ComponentFixture<DeliveryPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
