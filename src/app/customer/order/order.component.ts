import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/models/order.model';
import { OrderService } from './order.service';
import { qrcodeTypesMap } from '../../common/constant.common';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: Order[] = []
  qrcodeTypesMap = qrcodeTypesMap
  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.customerService.getOrders().subscribe(res => {
      this.orders = res
    })
  }

  onDeleteOrder(orderID: string, i: number) {
    // this.orderService.deleteOrderID(orderID).subscribe(res => {
    //   this.orders.splice(i, 1)
    // })
  }
}
