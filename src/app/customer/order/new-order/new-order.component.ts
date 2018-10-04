import { EmployeeResource } from './../../../shared/models/employee.model';
import { Process } from './../../../shared/models/process.model';
import { Component, OnInit } from '@angular/core';
import { route } from '../../../common/constant.common';
import { Router } from '@angular/router';
import { ToastNotificationService } from '../../../x/http/toast-notification.service';
import { Order, Resource } from '../../../shared/models/order.model';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {

  order = <Order>{ processes: [] }
  employees = []
  processes = <Process[]>[]
  selectedProcesses = []
  constructor(
    private customerService: CustomerService,
    private router: Router,
    private notify: ToastNotificationService,
  ) { }

  ngOnInit() {
    this.customerService.getProcesses().subscribe(process => {
      if (process != null) {
        this.processes = process
      }
    })
  }

  onCreateOrder() {
    const deadlineStr = this.order.deadline
    this.order.deadline = new Date(deadlineStr).getTime()
    this.order.deadline = new Date(this.order.deadline).getTime()
    this.customerService.createOrder(this.order).subscribe(newOrder => {
      this.notify.success('Tạo đơn hàng thành công!')
      this.router.navigate([route.rootOrderCustomer])
    })
  }

}
