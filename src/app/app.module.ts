import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterApiKeys } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './providers/auth.service';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { CartOverviewComponent } from './cart-overview/cart-overview.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderRequestComponent } from './order-request/order-request.component';
import { OrderTileComponent } from './order-tile/order-tile.component';
import { FoodcartNavbarComponent } from './foodcart-navbar/foodcart-navbar.component';
import { EditCartComponent } from './edit-cart/edit-cart.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { CustomerOverviewComponent } from './customer-overview/customer-overview.component';
import { CustomerNavbarComponent } from './customer-navbar/customer-navbar.component';
import { CustomerCartListComponent } from './customer-cart-list/customer-cart-list.component';
import { CustomerCartTileComponent } from './customer-cart-tile/customer-cart-tile.component';
import { CustomerNewOrderTileComponent } from './customer-new-order-tile/customer-new-order-tile.component';
import { CustomerCurrentOrdersComponent } from './customer-current-orders/customer-current-orders.component';
import { CustomerHistoryComponent } from './customer-history/customer-history.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { DeliveryOverviewComponent } from './delivery-overview/delivery-overview.component';
import { DeliveryNavbarComponent } from './delivery-navbar/delivery-navbar.component';
import { DeliveryRequestsComponent } from './delivery-requests/delivery-requests.component';
import { OrderRequestsComponent } from './order-requests/order-requests.component';
import { OrderRequestTileComponent } from './order-request-tile/order-request-tile.component';
import { OrderListComponent } from './order-list/order-list.component';
import { DelivererEditComponent } from './deliverer-edit/deliverer-edit.component';


export const firebaseConfig = {
  apiKey: masterApiKeys.apiKey,
  authDomain: masterApiKeys.authDomain,
  databaseURL: masterApiKeys.databaseURL,
  storageBucket: masterApiKeys.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
    CartOverviewComponent,
    OrdersListComponent,
    OrderRequestComponent,
    OrderTileComponent,
    FoodcartNavbarComponent,
    EditCartComponent,
    AddMenuComponent,
    CartDetailsComponent,
    EditMenuComponent,
    CustomerOverviewComponent,
    CustomerNavbarComponent,
    CustomerCartListComponent,
    CustomerCartTileComponent,
    CustomerNewOrderTileComponent,
    CustomerCurrentOrdersComponent,
    CustomerHistoryComponent,
    CustomerEditComponent,
    DeliveryOverviewComponent,
    DeliveryNavbarComponent,
    DeliveryRequestsComponent,
    OrderRequestsComponent,
    OrderRequestTileComponent,
    OrderListComponent,
    DelivererEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
