import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCartListComponent } from './customer-cart-list.component';

describe('CustomerCartListComponent', () => {
  let component: CustomerCartListComponent;
  let fixture: ComponentFixture<CustomerCartListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCartListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
