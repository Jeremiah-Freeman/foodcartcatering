import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerNewOrderTileComponent } from './customer-new-order-tile.component';

describe('CustomerNewOrderTileComponent', () => {
  let component: CustomerNewOrderTileComponent;
  let fixture: ComponentFixture<CustomerNewOrderTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerNewOrderTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerNewOrderTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
