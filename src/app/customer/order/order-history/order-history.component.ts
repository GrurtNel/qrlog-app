import { OrderHistory } from './../../../shared/models/order.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  orderHistories = <OrderHistory[]>[]
  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.customerService.getOrderHistory(params.id).subscribe(res => {
        if (res) {
          this.orderHistories = res
        }
      })
    })
  }

}
