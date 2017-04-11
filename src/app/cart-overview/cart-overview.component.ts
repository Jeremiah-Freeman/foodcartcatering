import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart-overview',
  templateUrl: './cart-overview.component.html',
  styleUrls: ['./cart-overview.component.css'],
  providers: [DataService]
})
export class CartOverviewComponent implements OnInit {
  public summaries = [];
  public foodCartID = '2';
  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.getOrdersSummariesByFoodCartId2(this.summaries, this.foodCartID);
  }
}
