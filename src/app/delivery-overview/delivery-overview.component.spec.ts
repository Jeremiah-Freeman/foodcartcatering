import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryOverviewComponent } from './delivery-overview.component';

describe('DeliveryOverviewComponent', () => {
  let component: DeliveryOverviewComponent;
  let fixture: ComponentFixture<DeliveryOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
