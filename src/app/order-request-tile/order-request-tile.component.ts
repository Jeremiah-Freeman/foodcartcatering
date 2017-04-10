import { Component, OnInit, Input } from '@angular/core';
import { Order } from './../order.model';

@Component({
  selector: 'app-order-request-tile',
  templateUrl: './order-request-tile.component.html',
  styleUrls: ['./order-request-tile.component.css']
})
export class OrderRequestTileComponent implements OnInit {
  @Input() orderRequest: Order;

  // retrieved from service
  details: OrderDetail[];

  // has the text of what the menu items are
  menuItems: MenuItem[];
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

  getItemPrice( menuItemID: string) {
    for (menuItem in menuItems) {
      if (menuItemID === menuItem.$key){
        return menuItem.price;
      }
    }
  }

  getOrderRevenue(){
    let totalRevenue: number = 0;
    for (detail in details){
      totalRevenue += (getItemPrice(detail.menuItemID) * detail.quantity);
    }
    return totalRevenue;
  }

  approveOrder(orderRequest){

  }

  denyOrder(orderRequest){

  }

}
