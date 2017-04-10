import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryRequestsComponent } from './delivery-requests.component';

describe('DeliveryRequestsComponent', () => {
  let component: DeliveryRequestsComponent;
  let fixture: ComponentFixture<DeliveryRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
