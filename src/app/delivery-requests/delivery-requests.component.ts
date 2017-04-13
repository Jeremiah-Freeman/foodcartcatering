import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delivery-requests',
  templateUrl: './delivery-requests.component.html',
  styleUrls: ['./delivery-requests.component.css']
})
export class DeliveryRequestsComponent implements OnInit {
  public summaries = [];
  public delivererID = '1';

  constructor(public dataService: DataService) { }

  ngOnInit() {

    this.dataService.getOrdersSummariesByUnassignedDeliverer2(this.summaries);

    console.log(this.summaries);
  }

}
