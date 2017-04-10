import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodcartNavbarComponent } from './foodcart-navbar.component';

describe('FoodcartNavbarComponent', () => {
  let component: FoodcartNavbarComponent;
  let fixture: ComponentFixture<FoodcartNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodcartNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodcartNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
