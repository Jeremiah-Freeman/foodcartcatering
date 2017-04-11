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
  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.getOrdersSummariesByDelivererId2(this.summaries, this.delivererID);
    console.log(this.summaries);
  }

}
