import { Router } from '@angular/router';
import { AuthService } from './../../x/http/auth.service';
import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/models/order.model';
import { OrderService } from './order.service';
import { qrcodeTypesMap } from '../../common/constant.common';
import { CustomerService } from '../customer.service';
import { apiURL } from '../../common/api.common';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [AuthService]
})
export class OrderComponent implements OnInit {
  orders: Order[] = []
  qrcodeTypesMap = qrcodeTypesMap
  constructor(
    private customerService: CustomerService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.customerService.getOrders().subscribe(res => {
      console.log(res)
      this.orders = res
    })
  }

  onDeleteOrder(orderID: string, i: number) {
    // this.orderService.deleteOrderID(orderID).subscribe(res => {
    //   this.orders.splice(i, 1)
    // })
  }

  onGenerateCSV(order: Order) {
    window.open(`${apiURL.generateCSV}?order_id=${order.id}&quantity=${order.quantity}&access_token=${this.authService.getToken()}`, '_blank')
  }

  onNavigateTracking(order: Order) {
    console.log(order)
    let tempOrder = <any>order
    tempOrder.cnv_processes = order.processes.join(",")
    this.router.navigate(['tracking', tempOrder])
  }
}
