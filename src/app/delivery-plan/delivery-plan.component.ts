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

    // promise.then((response) => {
    //   // populates locations
    //   for(let i=0; i<this.summaries.length; i++){
    //     this.locations.push([this.summaries[i].foodCart.lat, this.summaries[i].foodCart.lon],[this.summaries[i].customer.lat, this.summaries[i].customer.lon]);
    //
    //     console.log(this.locations)
    //     this.locationsArrived = true;
    //     return this.locations
    //   }
    // });
  }

  //www.google.com/maps/dir/45.444683,-122.677194/45.520425,-122.676819/45.517801,-122.618808/
}
