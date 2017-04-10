import { Component, OnInit, Input } from '@angular/core';

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

  getItemName( menuItemID: string ) {
    for (menuItem in menuItems) {
      if (menuItemID === menuItem.$key){
        return menuItem.name;
      }
    }
  }

  notifyDelay(orderID){

  }

}
