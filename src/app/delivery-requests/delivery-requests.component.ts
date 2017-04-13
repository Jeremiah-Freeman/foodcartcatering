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

    // gets all foodCarts and then gets summaries for all foodCarts.
    let promise = this.dataService.getFoodCarts().subscribe((data)=>{
      for(let i=0; i<data.length; i++){
        this.dataService.getOrdersSummariesByFoodCartId2(this.summaries, data[i].$key);
      }
      console.log(data);
    });

    // this.dataService.getOrdersSummariesByFoodCartId2(this.summaries, this.foodCartID);
    console.log(this.summaries);
  }

}
