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
        equalTo: email,
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

  updateCustomer(editCustomer: Customer) {
    const customerInFirebase = this.getCustomerById(editCustomer.$key);
    return customerInFirebase.update({
      lat: editCustomer.lat,
      lon: editCustomer.lon,
      address: editCustomer.address,
      instructions: editCustomer.instructions,
      quadrantID: editCustomer.quadrantID,
      name: editCustomer.name,
      number: editCustomer.number,
      email: editCustomer.email
    });
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

  updateFoodCart(editFoodCart: FoodCart) {
    const foodCartInFirebase = this.getFoodCartById(editFoodCart.$key);
    return foodCartInFirebase.update({
      lat: editFoodCart.lat,
      lon: editFoodCart.lon,
      address: editFoodCart.address,
      instructions: editFoodCart.instructions,
      quadrantID: editFoodCart.quadrantID,
      name: editFoodCart.name,
      number: editFoodCart.number,
      email: editFoodCart.email,
      open: editFoodCart.open,
      close: editFoodCart.close,
      maximumOrderSize: editFoodCart.maximumOrderSize
    });
  }

  // Menu Items

  getMenuItems() {
    return this.menuItems;
  }

  getMenuItemsByFoodCartId(foodCartId: string) {
    return this.angularFire.database.list('/menuItems', {
      query: {
        orderByChild: "foodCartID",
        equalTo: foodCartId
      }
    });
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

  updateMenuItem(editMenuItem: MenuItem) {
    const menuItemInFirebase = this.getMenuItemById(editMenuItem.$key);
    return menuItemInFirebase.update({
      name: editMenuItem.name,
      description: editMenuItem.description,
      price: editMenuItem.price,
      rating: editMenuItem.rating,
      foodCartID: editMenuItem.foodCartID
    });
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

  updateDeliverer(editDeliverer: Deliverer) {
    const delivererInFirebase = this.getDelivererById(editDeliverer.$key);
    return delivererInFirebase.update({
      lat: editDeliverer.lat,
      lon: editDeliverer.lon,
      instructions: editDeliverer.instructions,
      quadrantID: editDeliverer.quadrantID,
      name: editDeliverer.name,
      number: editDeliverer.number,
      email: editDeliverer.email
    });
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

  updateOrder(editOrder: Order) {
    const orderInFirebase = this.getOrderById(editOrder.$key);
    return orderInFirebase.update({
      foodCartID: editOrder.foodCartID,
      delivererID: editOrder.delivererID,
      customerID: editOrder.customerID,
      productionCompletionStatus: editOrder.productionCompletionStatus,
      deliveryCompletionStatus: editOrder.deliveryCompletionStatus,
      orderRequestTimestamp: editOrder.orderRequestTimestamp,
      requestedDeliveryTime: editOrder.requestedDeliveryTime,
      orderAcceptedTimestamp: editOrder.orderAcceptedTimestamp,
      deliveryTimeEstimate: editOrder.deliveryTimeEstimate,
      orderReadyTime: editOrder.orderReadyTime,
      delayTime: editOrder.delayTime,
      pickupTimestamp: editOrder.pickupTimestamp,
      deliveryTimestamp: editOrder.deliveryTimestamp
    });
  }

  updateOrderPickupTimestamp(editOrder: Order){
    let dateNow = new Date();
    // NOTE GMT TIME
    let timeStamp = dateNow.getFullYear() + "-" + (dateNow.getMonth()+1) + "-"+dateNow.getMonth()+"T"+ dateNow.getUTCHours()+":"+dateNow.getUTCMinutes ()+":"+dateNow.getUTCSeconds();

    const orderInFirebase = this.getOrderById(editOrder.$key);
    return orderInFirebase.update({

      pickupTimestamp: timeStamp,

    });
  }
  updateOrderDeliveryTimestamp(editOrder: Order){
    // NOTE GMT TIME
    let dateNow = new Date();
    let timeStamp = dateNow.getFullYear() + "-" + (dateNow.getMonth()+1) + "-"+dateNow.getMonth()+"T"+ dateNow.getUTCHours()+":"+dateNow.getUTCMinutes ()+":"+dateNow.getUTCSeconds();

    const orderInFirebase = this.getOrderById(editOrder.$key);
    return orderInFirebase.update({

      deliveryTimestamp: timeStamp,
      deliveryCompletionStatus: true,

    });
  }

  getOrdersSummariesByFoodCartId(foodCartId: string) {

    return this.angularFire.database.list('/orders', {
      query: {
        orderByChild: "foodCartID",
        equalTo: foodCartId
      }
    });
  }

  getOrdersSummariesByUnassignedDeliverer() {

    return this.angularFire.database.list('/orders', {
      query: {
        orderByChild: "delivererID",
        equalTo: ''
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

  getUserByEmail(email: string) {
    return this.angularFire.database.list('users/', {
      query: {
        orderByChild: "email",
        equalTo: email
      }
    });
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

  tScrubber(inputDateTime = '') {
    if (inputDateTime.substring(10, 11) === 'T') {
      inputDateTime = inputDateTime.substring(0, 10) + ' ' + inputDateTime.substring(12);
    }
    return inputDateTime;
  }

  // Aggregator Functions
  // pass in the empty summaries array and list of orders
  summaryBuilder(summaries, orders) {
    // console.log(orders)
    // loop through each order


    for (let i=0; i<orders.length; i++){

      // then we push on to the first summary object the order itself, and create placehold array for the details relating to that order, and placeholder for revenue.
      summaries.push({order: orders[i], details: [], revenue: 0, customer: new Customer(), deliverer: new Deliverer(), foodCart: new FoodCart()});
      let customerID = orders[i].customerID;
      let delivererID = orders[i].delivererID;
      let foodCartID = orders[i].foodCartID;
      if (customerID) {
        this.getCustomerById(customerID).subscribe((customer) => {
          summaries[i].customer.copyFields(customer);
        });
      }

      // Remove T from time stamps to enable ng2 date filter to work
      summaries[i].order.orderRequestTimestamp = this.tScrubber(summaries[i].order.orderRequestTimestamp);
      summaries[i].order.requestedDeliveryTime = this.tScrubber(summaries[i].order.requestedDeliveryTime);
      summaries[i].order.orderAcceptedTimestamp = this.tScrubber(summaries[i].order.orderAcceptedTimestamp);
      summaries[i].order.deliveryTimeEstimate = this.tScrubber(summaries[i].order.deliveryTimeEstimate);
      summaries[i].order.orderReadyTime = this.tScrubber(summaries[i].order.orderReadyTime);
      summaries[i].order.deliveryTimestamp = this.tScrubber(summaries[i].order.deliveryTimestamp);
      summaries[i].order.pickupTimestamp = this.tScrubber(summaries[i].order.pickupTimestamp);


      if (delivererID) {
        this.getDelivererById(delivererID).subscribe((deliverer) => {
          summaries[i].deliverer.copyFields(deliverer);
        });
      }

      if (foodCartID) {
        this.getFoodCartById(foodCartID).subscribe((foodCart) => {
          summaries[i].foodCart.copyFields(foodCart);
        });
      }

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
            // console.log(summaries[i].revenue);
            // console.log(summaries);
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
    return this.getOrdersSummariesByDelivererId(delivererID).subscribe((orders) => {
      this.summaryBuilder(summaries, orders);
    })
  }

  getOrdersSummariesByCustomerId2(summaries, customerID) {
    this.getOrdersSummariesByCustomerId(customerID).subscribe((orders) => {
      this.summaryBuilder(summaries, orders);
    })
  }

  getOrdersSummariesByUnassignedDeliverer2(summaries) {
    this.getOrdersSummariesByUnassignedDeliverer().subscribe((orders) => {
      this.summaryBuilder(summaries, orders);
    })
  }


}
