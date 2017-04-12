import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delivery-plan',
  templateUrl: './delivery-plan.component.html',
  styleUrls: ['./delivery-plan.component.css'],
  providers: [DataService]
})
export class DeliveryPlanComponent implements OnInit {

  lat: number = 45.470266;
  lng: number = -122.720072;

  public summaries = [];
  public locations = [];
  public locationsArrived = false;
  public routeCall: string;
  public delivererID = '1';
  constructor(public dataService: DataService) { }

  ngOnInit() {

    this.dataService.getOrdersSummariesByDelivererId2(this.summaries, this.delivererID);
    console.log(this.summaries);

  }

}
