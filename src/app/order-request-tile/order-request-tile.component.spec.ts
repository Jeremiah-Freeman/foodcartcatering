import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRequestTileComponent } from './order-request-tile.component';

describe('OrderRequestTileComponent', () => {
  let component: OrderRequestTileComponent;
  let fixture: ComponentFixture<OrderRequestTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderRequestTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderRequestTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
