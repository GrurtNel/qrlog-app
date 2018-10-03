import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { SharedModule } from '../../shared/shared.module';
import { ProductService } from './product.service';

@NgModule({
  imports: [
    ProductRoutingModule,
    SharedModule
  ],
  declarations: [ProductComponent, CreateProductComponent],
  providers: [ProductService]
})
export class ProductModule { }
