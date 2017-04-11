import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CustomerOverviewComponent } from './customer-overview/customer-overview.component';
import { CartOverviewComponent } from './cart-overview/cart-overview.component';
import { DeliveryOverviewComponent } from './delivery-overview/delivery-overview.component';
import { DelivererEditComponent } from './deliverer-edit/deliverer-edit.component';

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
    path: 'deliverer-edit/:id',
    component: DelivererEditComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
