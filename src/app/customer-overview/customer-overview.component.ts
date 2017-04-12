import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FoodCart } from '../food-cart.model';
import { Customer } from '../customer.model';
import { DataService } from '../data.service';
import { FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { Order } from '../order.model';
import { MenuItem } from "../menu-item.model";
import { OrderDetail } from "../order-detail.model";

@Component({
  selector: 'app-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.css'],
  providers: [DataService]
})
export class CustomerOverviewComponent implements OnInit {
  // used to store summaries of existing orders
  public summaries = [];
  public customerId = '';
  public customer;
  public foodCarts: FirebaseListObservable<any[]>;
  public selectedFoodCart = new FoodCart();
  public selectedMenuItems;
  public order = new Order();
  public editValidationMessage = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private dataService: DataService) { }

  ngOnInit() {
    this.foodCarts = this.dataService.getFoodCarts();
    this.route.params.forEach((urlParameters) => {
      this.customerId = urlParameters['id'];
      this.dataService.getCustomerById(this.customerId).subscribe((customer) => {
        this.customer = customer;
        this.dataService.getOrdersSummariesByCustomerId2(this.summaries, this.customerId);
      });
    });
  }

  setCart(foodCartId: string){
    this.dataService.getFoodCartById(foodCartId).subscribe((cart) => {
      this.selectedFoodCart = cart;
    });

    this.dataService.getMenuItemsByFoodCartId(foodCartId).subscribe((menuItems) => {
      this.selectedMenuItems = menuItems;

    });
  }

  setMenuItemQuantity(item: MenuItem , quantity) {
    for (var i = 0; i < this.selectedMenuItems.length; i++) {
      if (item.$key === this.selectedMenuItems[i].$key) {
        this.selectedMenuItems[i].quantity = quantity;
      }
    }
  }

  placeOrder() {
    this.order.customerID = this.customerId;
    this.order.foodCartID = this.selectedFoodCart.$key;

    // this.editValidationMessage = this.order.validationMessage();
    // if (!this.editValidationMessage) {
    //
    // }

    const promise = this.dataService.addOrder(this.order);
    promise.then((order) => {
      (order.key);

      for (var i = 0; i < this.selectedMenuItems.length; i++) {
        if (this.selectedMenuItems[i].quantity) {
          const newDetail = new OrderDetail(
            order.key,
            this.selectedMenuItems[i].$key,
            '',
            this.selectedMenuItems[i].quantity
          );
          this.dataService.addOrderDetail(newDetail);
        }
      }

    });


  }

}
