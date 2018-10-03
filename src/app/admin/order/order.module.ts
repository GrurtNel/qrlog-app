import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { CreateOrderComponent } from './create-order/create-order.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { OrderComponent } from './order.component';
import { OrderService } from './order.service';
import { SharedModule } from '../../shared/shared.module';
import { ProductService } from '../product/product.service';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule
  ],
  declarations: [
    CreateOrderComponent,
    UpdateOrderComponent,
    OrderComponent
  ],
  providers: [
    OrderService,
    ProductService
  ]
})
export class OrderModule { }
