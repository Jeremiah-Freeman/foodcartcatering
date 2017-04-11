import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import { FoodCart } from './food-cart.model';
import { MenuItem } from './menu-item.model';
import { Deliverer } from './deliverer.model';
import { Order } from './order.model';
import { OrderDetail } from './order-detail.model';
import { User } from './user.model';


import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class DataService {
  customers: FirebaseListObservable<any[]>;
  foodCarts: FirebaseListObservable<any[]>;
  deliverers: FirebaseListObservable<any[]>;
  menuItems: FirebaseListObservable<any[]>;
  orders: FirebaseListObservable<any[]>;
  orderDetails: FirebaseListObservable<any[]>;
  users: FirebaseListObservable<any[]>;

  constructor(
    private angularFire: AngularFire
  ) {
    this.customers = angularFire.database.list('customers');
    this.foodCarts = angularFire.database.list('foodCarts');
    this.deliverers = angularFire.database.list('deliverers');
    this.menuItems = angularFire.database.list('menuItems');
    this.orders = angularFire.database.list('orders');
    this.orderDetails = angularFire.database.list('orderDetails');
    this.users = angularFire.database.list('users');
  }

  // Customers

  getCustomers() {
    return this.customers;
  }

  getCustomerById(customerId: string) {
    return this.angularFire.database.object('customers/' + customerId);
  }

  getCustomerByEmail(email: string) {
    return this.angularFire.database.list('customers/', {
      query: {
        orderByChild: "email",
        equalTo: email
      }
    });
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

  getFoodCartByEmail(email: string) {
    return this.angularFire.database.list('foodCarts/', {
      query: {
        orderByChild: "email",
        equalTo: email
      }
    });
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

  getDelivererByEmail(email: string) {
    return this.angularFire.database.list('deliverers/', {
      query: {
        orderByChild: "email",
        equalTo: email
      }
    });
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

  getOrdersSummariesByDelivererId(delivererId: string) {
    return this.angularFire.database.list('/orders', {
      query: {
        orderByChild: "delivererID",
        equalTo: delivererId
      }
    });
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


  getOrdersSummariesByFoodCartId(foodCartId: string) {

    return this.angularFire.database.list('/orders', {
      query: {
        orderByChild: "foodCartID",
        equalTo: foodCartId
      }
    });
  }

  getOrdersSummariesByCustomerId(customerId: string) {
    return this.angularFire.database.list('/orders', {
      query: {
        orderByChild: "customerID",
        equalTo: customerId
      }
    });
  }



  getOrderDetailsByOrderId(orderId: string) {

    return this.angularFire.database.list('/orderDetails', {
      query: {
        orderByChild: "orderID",
        equalTo: orderId
      }
    });
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


  // users

  getUsers() {
    return this.users;
  }

  getUserById(userId: string) {
    return this.angularFire.database.object('users/' + userId);
  }

  addUser(newUser: User) {
    // Remove unassigned key (Firebase will then create one)
    if (!newUser.$key) {
      delete newUser.$key;
    }
    return this.users.push(newUser);
  }

  deleteUser(user: User) {
    const userInFirebase = this.getUserById(user.$key);
    return userInFirebase.remove();
  }


  // Aggregator Functions
  // pass in the empty summaries array and list of orders
  summaryBuilder(summaries, orders) {
    // console.log(orders)
    // loop through each order
    for (let i=0; i<orders.length; i++){
      // then we push on to the first summary object the order itself, and create placehold array for the details relating to that order, and placeholder for revenue.
      summaries.push({order: orders[i], details: [], revenue: 0});
      // go get the the list of details
      this.getOrderDetailsByOrderId(orders[i].$key).subscribe((details) => {
        for (let j=0; j<details.length; j++) {
          // connect the menu the item that relates to the detail in context
          this.getMenuItemById(details[j].menuItemID).subscribe((item) => {
            // push the actual orderDetail and menuItm onto summaries array on position of order
            summaries[i].details.push({orderDetail: details[j], menuItem: item});
            // turn quanity into a number
            let quantity = parseInt(summaries[i].details[j].orderDetail.quantity);
            // generate revenue for detail and add to total revenue
            summaries[i].revenue += quantity * item.price;
            if(i===orders.length - 1 && j===details.length -1){
              console.log(summaries);
            }
          });
        }
      });
    }
  }

  getOrdersSummariesByFoodCartId2(summaries, foodCartID) {
    this.getOrdersSummariesByFoodCartId(foodCartID).subscribe((orders) => {
      this.summaryBuilder(summaries, orders);
    });
  }

  getOrdersSummariesByDelivererId2(summaries, delivererID) {
    this.getOrdersSummariesByDelivererId(delivererID).subscribe((orders) => {
      this.summaryBuilder(summaries, orders);
      console.log(orders);
    })
  }

  getOrdersSummariesByCustomerId2(summaries, customerID) {
    this.getOrdersSummariesByCustomerId(customerID).subscribe((orders) => {
      this.summaryBuilder(summaries, orders);
    })
  }




}
