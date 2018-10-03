import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { GuestComponent } from './guest.component';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { ScanProductComponent } from './scan-product/scan-product.component';
import { ProductService } from '../customer/product/product.service';
import { ScanMarketingComponent } from './scan-marketing/scan-marketing.component';
import { PublicService } from '../shared/services/public.service';
import { OrderService } from '../customer/order/order.service';

@NgModule({
  imports: [
    CommonModule,
    GuestRoutingModule,
    FormsModule,
    EditorModule
  ],
  declarations: [
    GuestComponent,
    ScanProductComponent,
    ScanMarketingComponent
  ],
  providers: [
    ProductService,
    PublicService,
    OrderService
  ]
})
export class GuestModule { }
