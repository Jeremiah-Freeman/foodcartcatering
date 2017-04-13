import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

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
  public delivererID="1";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private dataService: DataService) { }

  ngOnInit() {

    this.route.params.forEach((urlParameters) => {
      this.delivererID = urlParameters['id'];
    });

    this.dataService.getOrdersSummariesByDelivererId2(this.summaries, this.delivererID);
    console.log(this.summaries);

  }

}
