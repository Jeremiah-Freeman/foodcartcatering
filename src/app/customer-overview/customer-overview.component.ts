import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FoodCart } from '../food-cart.model';
import { Customer } from '../customer.model';
import { DataService } from '../data.service';
import { FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.css'],
  providers: [DataService]
})
export class CustomerOverviewComponent implements OnInit {
  // used to store summaries of existing orders
  public summaries = [];
  public customerId = '0';
  public customer;
  public foodCarts: FirebaseListObservable<any[]>;
  public selectedFoodCart;
  public selectedMenuItems;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private dataService: DataService) { }

  ngOnInit() {
    this.foodCarts = this.dataService.getFoodCarts();
    this.route.params.forEach((urlParameters) => {
      this.customerId = '0';
      this.dataService.getCustomerById(this.customerId).subscribe((customer) => {
        this.customer = customer;
        this.dataService.getOrdersSummariesByCustomerId2(this.summaries, this.customerId);
      });
    });
  }

  setCart(foodCartId: string){
    this.selectedFoodCart = this.dataService.getFoodCartById(foodCartId);
    this.dataService.getMenuItemsByFoodCartId(foodCartId).subscribe((menuItems) => {
      this.selectedMenuItems = menuItems;

    });
  }

}
