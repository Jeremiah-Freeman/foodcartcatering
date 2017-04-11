import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CustomerOverviewComponent } from './customer-overview/customer-overview.component';
import { CartOverviewComponent } from './cart-overview/cart-overview.component';
import { DeliveryOverviewComponent } from './delivery-overview/delivery-overview.component';
import { DelivererEditComponent } from './deliverer-edit/deliverer-edit.component';
import { EditCartComponent } from './edit-cart/edit-cart.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: '',
    component: HomeComponent
  }, {
    path: 'customer-overview/:id',
    component: CustomerOverviewComponent
  }, {
    path: 'cart-overview/:id',
    component: CartOverviewComponent
  }, {
    path: 'delivery-overview/:id',
    component: DeliveryOverviewComponent
  }, {
    path: 'deliverer-edit/:id',
    component: DelivererEditComponent
  }, {
    path: 'edit-cart/:id',
    component: EditCartComponent
  }, {
    path: 'customer-edit/:id',
    component: CustomerEditComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
