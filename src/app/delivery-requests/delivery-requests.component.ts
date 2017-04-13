import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Order } from '../order.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-delivery-requests',
  templateUrl: './delivery-requests.component.html',
  styleUrls: ['./delivery-requests.component.css']
})
export class DeliveryRequestsComponent implements OnInit {
  public summaries = [];
  public delivererID = '1';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private dataService: DataService) { }

  ngOnInit() {


    this.route.params.forEach((urlParameters) => {
      this.delivererID = urlParameters['id'];
    });
    // gets all foodCarts and then gets summaries for all foodCarts.
    this.dataService.getOrdersSummariesByUnassignedDeliverer2(this.summaries);

    // this.dataService.getOrdersSummariesByFoodCartId2(this.summaries, this.foodCartID);
  }

  acceptRequest(order) {
    order.delivererID = this.delivererID;
    const promise = this.dataService.updateOrder(order);
    promise.then((data) => {
      this.summaries = [];
      let promise = this.dataService.getFoodCarts().subscribe((data)=>{
        for(let i=0; i<data.length; i++){
          this.dataService.getOrdersSummariesByFoodCartId2(this.summaries, data[i].$key);
        }
      });
    });
  }

}
