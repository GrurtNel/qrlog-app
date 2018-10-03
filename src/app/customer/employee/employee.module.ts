import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeComponent } from './employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { SharedModule } from '../../shared/shared.module';
import { CustomerService } from '../customer.service';
import { AuthService } from '../../x/http/auth.service';

@NgModule({
  imports: [
    SharedModule,
    EmployeeRoutingModule
  ],
  declarations: [
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeComponent
  ],
  providers: [
    CustomerService,
  ]
})
export class EmployeeModule { }
