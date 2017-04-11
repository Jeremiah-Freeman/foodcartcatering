import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../order.model';

@Component({
  selector: 'app-order-tile',
  templateUrl: './order-tile.component.html',
  styleUrls: ['./order-tile.component.css']
})
export class OrderTileComponent implements OnInit {
  @Input() order: Order;

  constructor() { }

  ngOnInit() {
  }


  notifyDelay(orderID){

  }

}
