import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FoodCart } from '../food-cart.model';
import { DataService } from '../data.service';
import { FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { Order } from '../order.model';

@Component({
  selector: 'app-cart-overview',
  templateUrl: './cart-overview.component.html',
  styleUrls: ['./cart-overview.component.css'],
  providers: [DataService]
})
export class CartOverviewComponent implements OnInit {
  public summaries = [];
  public foodCartId = '2';
  public foodCart;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private dataService: DataService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.foodCartId = urlParameters['id'];
      this.dataService.getFoodCartById(this.foodCartId).subscribe((foodCart) => {
        this.foodCart = foodCart;
        this.dataService.getOrdersSummariesByFoodCartId2(this.summaries, this.foodCartId);
      });
    });
  }

  orderCompleted(order: Order) {
    console.log(order);
    order.productionCompletionStatus = true;
    const promise = this.dataService.updateOrder(order);
    promise.then((success) => {
      this.summaries = [];
      this.dataService.getOrdersSummariesByFoodCartId2(this.summaries, this.foodCartId);
    });
  }
}
