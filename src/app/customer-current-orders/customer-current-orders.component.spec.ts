import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCurrentOrdersComponent } from './customer-current-orders.component';

describe('CustomerCurrentOrdersComponent', () => {
  let component: CustomerCurrentOrdersComponent;
  let fixture: ComponentFixture<CustomerCurrentOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCurrentOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCurrentOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
