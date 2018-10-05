import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { Order, OrderTracking } from '../../../shared/models/order.model';
import { Process } from '../../../shared/models/process.model';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.css']
})
export class OrderTrackingComponent implements OnInit {

  order: Order = <Order>{}
  orderTrackings: OrderTracking[] = []
  processes: string[] = []
  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(order => {
      this.order = <Order>order
      this.processes = (<string>order.processes).split(",")
      this.customerService.getOrderTracking(this.order.id).subscribe(trackings => {
        if (trackings) {
          this.orderTrackings = trackings
        }
      })
      // console.log(res)
    })
  }

}
