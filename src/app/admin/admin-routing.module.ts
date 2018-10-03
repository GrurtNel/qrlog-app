import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderComponent } from './order/order.component';
import { CustomerComponent } from './customer/customer.component';
import { RegisterComponent } from './customer/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: AdminComponent, children: [
      { path: 'customer', component: CustomerComponent },
      { path: 'customer/register', component: RegisterComponent },
      { path: 'product', loadChildren: './product/product.module#ProductModule' },
      { path: '', component: DashboardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
