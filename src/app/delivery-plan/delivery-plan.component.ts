import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-delivery-plan',
  templateUrl: './delivery-plan.component.html',
  styleUrls: ['./delivery-plan.component.css']
})
export class DeliveryPlanComponent implements OnInit {

  // public summaries = [];
  // public locations = [];
  // public routeCall: string;
  // public delivererID = '1';
  // constructor(public dataService: DataService) { }
  //
  ngOnInit() {
  //   this.dataService.getOrdersSummariesByDelivererId2(this.summaries, this.delivererID);
  //   console.log(this.summaries);
  //
  //   // populates locations
  //   for(let i=0, i<summaries.length, i++){
  //     locations.push([summaries[i].foodCart.lat, summaries[i].customer]);
  //     //www.google.com/maps/dir/45.444683,-122.677194/45.520425,-122.676819/45.517801,-122.618808/
  //   }
  }

}
