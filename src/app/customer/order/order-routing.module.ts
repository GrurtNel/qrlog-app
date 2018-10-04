import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { NewOrderComponent } from './new-order/new-order.component';

const routes: Routes = [
  { path: 'create', component: NewOrderComponent },
  { path: 'update', component: UpdateOrderComponent },
  { path: '', component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
