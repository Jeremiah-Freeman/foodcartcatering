import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-delivery-orders',
  templateUrl: './delivery-orders.component.html',
  styleUrls: ['./delivery-orders.component.css'],
  providers: [DataService]
})
export class DeliveryOrdersComponent implements OnInit {
  public summaries = [];
  public delivererID = '1';
  public todayObject = new Date();
  public today = this.todayObject.getFullYear() + "-" + (this.todayObject.getMonth()+1) + "-"+this.todayObject.getMonth()+"T"+ this.todayObject.getUTCHours()+":"+this.todayObject.getUTCMinutes ()+":"+this.todayObject.getUTCSeconds();

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.getOrdersSummariesByDelivererId2(this.summaries, this.delivererID);
    console.log(this.summaries);
  }

  updatePickUpTime(orderToUpdate){
    this.dataService.updateOrderPickupTimestamp(orderToUpdate);
  }

  updateDeliveryTime(orderToUpdate){
    this.dataService.updateOrderDeliveryTimestamp(orderToUpdate);
  }

}
