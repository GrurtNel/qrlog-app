import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { qrcodeTypes, route } from '../../../common/constant.common';
import { OrderService } from '../order.service';
import { AuthService } from '../../../x/http/auth.service';
import { ProductService } from '../../product/product.service';
import { Router } from '@angular/router';
import { ToastNotificationService } from '../../../x/http/toast-notification.service';
import { Order, Resource } from '../../../shared/models/order.model';
import { CustomerService } from '../../customer.service';
import { Employee } from '../../../shared/models/employee.model';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  order = <Order>{}
  employees = []
  proccesses = []
  selectedEmployees = []
  selectedProcesses = []
  selectedEmployeesTbl = <Resource[]>[]
  constructor(
    private customerService: CustomerService,
    private router: Router,
    private notify: ToastNotificationService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.customerService.getEmployees().subscribe(res => {
      if (res != null) {
        this.employees = res
      }
    })
  }

  onChange(checked, employee: Employee) {
    if (checked) {
      this.confirmationService.confirm({
        message: 'Chọn quy trình',
        accept: () => {
          //Actual logic to perform a confirmation
        },
        reject: () => {
          this.selectedEmployees.splice(this.selectedEmployees.findIndex(e => e == employee.id), 1)
        }
      })
      this.selectedEmployeesTbl.push(<Resource>{})
    } else {
      this.selectedEmployeesTbl.splice(this.selectedEmployeesTbl.findIndex(e => e.employee_id == employee.id), 1)
    }
    console.log(this.selectedEmployeesTbl)
  }

  onRegister() {
    console.log(this.selectedEmployees)
    // this.customerService.createOrder(this.order).subscribe(newOrder => {
    //   this.notify.success('Tạo đơn hàng thành công!')
    //   this.router.navigate([route.rootOrder])
    // })
  }
}
