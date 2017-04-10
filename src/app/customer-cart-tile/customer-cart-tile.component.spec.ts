import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCartTileComponent } from './customer-cart-tile.component';

describe('CustomerCartTileComponent', () => {
  let component: CustomerCartTileComponent;
  let fixture: ComponentFixture<CustomerCartTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCartTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCartTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
