import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import { FoodCart } from './food-cart.model';
import { MenuItem } from './menu-item.model';
import { Deliverer } from './deliverer.model';
import { Order } from './order.model';
import { OrderDetail } from './order-detail.model';


import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class DataService {
  customers: FirebaseListObservable<any[]>;
  foodCarts: FirebaseListObservable<any[]>;
  deliverers: FirebaseListObservable<any[]>;
  menuItems: FirebaseListObservable<any[]>;
  orders: FirebaseListObservable<any[]>;
  orderDetails: FirebaseListObservable<any[]>;

  constructor(
    private angularFire: AngularFire
  ) {
    this.customers = angularFire.database.list('customers');
    this.foodCarts = angularFire.database.list('foodCarts');
    this.deliverers = angularFire.database.list('deliverers');
    this.menuItems = angularFire.database.list('menuItems');
    this.orders = angularFire.database.list('orders');
    this.orderDetails = angularFire.database.list('orderDetails');
  }

  // Customers

  getCustomers() {
    return this.customers;
  }

  getCustomerById(customerId: string) {
    return this.angularFire.database.object('customers/' + customerId);
  }

  addCustomer(newCustomer: Customer) {
    // Remove unassigned key (Firebase will then create one)
    if (!newCustomer.$key) {
      delete newCustomer.$key;
    }
    return this.customers.push(newCustomer);
  }

  deleteCustomer(customer: Customer) {
    const customerInFirebase = this.getCustomerById(customer.$key);
    return customerInFirebase.remove();
  }


  // Food Carts

  getFoodCarts() {
    return this.foodCarts;
  }

  getFoodCartById(foodCartId: string) {
    return this.angularFire.database.object('foodCarts/' + foodCartId);
  }

  addFoodCart(newFoodCart: FoodCart) {
    // Remove unassigned key (Firebase will then create one)
    if (!newFoodCart.$key) {
      delete newFoodCart.$key;
    }
    return this.foodCarts.push(newFoodCart);
  }

  deleteFoodCart(foodCart: FoodCart) {
    const foodCartInFirebase = this.getFoodCartById(foodCart.$key);
    return foodCartInFirebase.remove();
  }


  // Menu Items

  getMenuItems() {
    return this.menuItems;
  }

  getMenuItemById(menuItemId: string) {
    return this.angularFire.database.object('menuItems/' + menuItemId);
  }

  addMenuItem(newMenuItem: MenuItem) {
    // Remove unassigned key (Firebase will then create one)
    if (!newMenuItem.$key) {
      delete newMenuItem.$key;
    }
    return this.menuItems.push(newMenuItem);
  }

  deleteMenuItem(menuItem: MenuItem) {
    const menuItemInFirebase = this.getMenuItemById(menuItem.$key);
    return menuItemInFirebase.remove();
  }


  // Deliverers

  getDeliverers() {
    return this.deliverers;
  }

  getDelivererById(delivererId: string) {
    return this.angularFire.database.object('deliverers/' + delivererId);
  }

  addDeliverer(newDeliverer: Deliverer) {
    // Remove unassigned key (Firebase will then create one)
    if (!newDeliverer.$key) {
      delete newDeliverer.$key;
    }
    return this.deliverers.push(newDeliverer);
  }

  deleteDeliverer(deliverer: Deliverer) {
    const delivererInFirebase = this.getDelivererById(deliverer.$key);
    return delivererInFirebase.remove();
  }


  // Order

  getOrders() {
    return this.orders;
  }

  getOrderById(orderId: string) {
    return this.angularFire.database.object('orders/' + orderId);
  }

  // TODO test 
  getOrdersByCustomerId(customerId: string) {
    return this.angularFire.database.list('/orders', {
      query: {
        orderByChild: 'customerId',
        equalTo: customerId
      }
    });
  }

  addOrder(newOrder: Order) {
    // Remove unassigned key (Firebase will then create one)
    if (!newOrder.$key) {
      delete newOrder.$key;
    }
    return this.orders.push(newOrder);
  }

  deleteOrder(order: Order) {
    const orderInFirebase = this.getOrderById(order.$key);
    return orderInFirebase.remove();
  }


  // Order Detail

  getOrderDetails() {
    return this.orderDetails;
  }

  getOrderDetailById(orderDetailId: string) {
    return this.angularFire.database.object('orderDetails/' + orderDetailId);
  }

  addOrderDetail(newOrderDetail: OrderDetail) {
    // Remove unassigned key (Firebase will then create one)
    if (!newOrderDetail.$key) {
      delete newOrderDetail.$key;
    }
    return this.orderDetails.push(newOrderDetail);
  }

  deleteOrderDetail(orderDetail: OrderDetail) {
    const orderDetailInFirebase = this.getOrderDetailById(orderDetail.$key);
    return orderDetailInFirebase.remove();
  }




}
