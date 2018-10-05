import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProccessComponent } from './proccess/proccess.component';

const routes: Routes = [
  {
    path: '', component: CustomerComponent, children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'employee', loadChildren: './employee/employee.module#EmployeeModule' },
      { path: 'order', loadChildren: './order/order.module#OrderModule' },
      { path: 'process', component: ProccessComponent },
      { path: '', component: DashboardComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
