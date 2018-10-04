import { NgModule } from '@angular/core';
import { OrderRoutingModule } from './order-routing.module';
import { CheckboxModule } from 'primeng/checkbox';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { CreateOrderComponent } from './create-order/create-order.component';
import { OrderComponent } from './order.component';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from '../../auth/auth.service';
import { OrderService } from './order.service';
import { CalendarModule } from 'primeng/calendar';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { CustomerService } from '../customer.service';
import { NewOrderComponent } from './new-order/new-order.component';

@NgModule({
  imports: [
    SharedModule,
    OrderRoutingModule,
    CheckboxModule,
    CalendarModule,
    ConfirmDialogModule
  ],
  declarations: [
    CreateOrderComponent,
    OrderComponent,
    UpdateOrderComponent,
    NewOrderComponent
  ],
  providers: [
    OrderService,
    CustomerService,
    ConfirmationService
  ]
})
export class OrderModule { }
