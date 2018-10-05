import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

const routes: Routes = [
  { path: 'create', component: NewOrderComponent },
  { path: 'update', component: UpdateOrderComponent },
  { path: 'history/:id', component: OrderHistoryComponent },
  { path: 'tracking', component: OrderTrackingComponent },
  { path: '', component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
