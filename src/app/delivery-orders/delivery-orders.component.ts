import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

// import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-delivery-orders',
  templateUrl: './delivery-orders.component.html',
  styleUrls: ['./delivery-orders.component.css'],
  providers: [DataService]
})
export class DeliveryOrdersComponent implements OnInit {
  public summaries = []; //: FirebaseListObservable<any[]>;
  public delivererID = '1';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private dataService: DataService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.delivererID = urlParameters['id'];
      this.dataService.getOrdersSummariesByDelivererId2(this.summaries, this.delivererID);
    });
  }

  updatePickUpTime(orderToUpdate){
    const promise = this.dataService.updateOrderPickupTimestamp(orderToUpdate);
    promise.then((result) => {
      this.summaries = [];
      this.dataService.getOrdersSummariesByDelivererId2(this.summaries, this.delivererID);
    });
  }

  updateDeliveryTime(orderToUpdate){
    const promise = this.dataService.updateOrderDeliveryTimestamp(orderToUpdate);
    promise.then((result) => {
      this.summaries = [];
      this.dataService.getOrdersSummariesByDelivererId2(this.summaries, this.delivererID);
    });
  }

}
