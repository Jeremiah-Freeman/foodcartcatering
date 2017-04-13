import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
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
  public todayObject = new Date();
  public today = this.todayObject.getFullYear() + "-" + (this.todayObject.getMonth()+1) + "-"+this.todayObject.getMonth()+"T"+ this.todayObject.getUTCHours()+":"+this.todayObject.getUTCMinutes ()+":"+this.todayObject.getUTCSeconds();

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.getOrdersSummariesByDelivererId2(this.summaries, this.delivererID);
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
