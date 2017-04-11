import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DeliveryOverviewComponent } from './delivery-overview/delivery-overview.component';
import { DeliveryPlanComponent } from './delivery-plan/delivery-plan.component';
import { DeliveryOrdersComponent } from './delivery-orders/delivery-orders.component';
import { DeliveryRequestsComponent } from './delivery-requests/delivery-requests.component';
import { CustomerOverviewComponent } from './customer-overview/customer-overview.component';
import { CartOverviewComponent } from './cart-overview/cart-overview.component';



const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: '',
    component: HomeComponent
  }, {
    path: 'customer-overview',
    component: CustomerOverviewComponent
  }, {
    path: 'cart-overview',
    component: CartOverviewComponent
  }, {
    path: 'delivery-overview',
    component: DeliveryOverviewComponent
  }, {
    path: 'delivery-overview/orders',
    component: DeliveryOrdersComponent
  },{
    path: 'delivery-overview/plan',
    component: DeliveryPlanComponent
  },{
    path: 'delivery-overview/requests',
    component: DeliveryRequestsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
