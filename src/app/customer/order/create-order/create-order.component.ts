import { EmployeeResource } from './../../../shared/models/employee.model';
import { Process } from './../../../shared/models/process.model';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormArray, FormControl } from '@angular/forms';
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
  processes = <Process[]>[]
  selectedProcesses = []
  selectedProcessIndex = []
  selectedEmployees = []
  selectedEmployeeIndex = 0
  selectedEmployeesResource = <EmployeeResource[]>[]
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

    this.customerService.getProcesses().subscribe(process => {
      if (process != null) {
        this.processes = process
      }
    })
  }

  onSelectEmployee() {
    this.selectedProcesses = this.selectedProcessIndex.map(index => {
      return this.processes[index]
    })
    this.selectedEmployeesResource.push(<EmployeeResource>{
      employee: this.employees[this.selectedEmployeeIndex],
      processes: this.selectedProcesses
    })
    //xoa employee sau khi chon va clear checkbox chon cong doan
    this.employees.splice(this.selectedEmployeeIndex, 1)
    this.selectedProcessIndex = []
    console.log(this.selectedEmployeesResource)
  }

  onDeleteEmployee(i) {
    this.employees.push(this.selectedEmployeesResource[i].employee)
    this.selectedEmployeesResource.splice(i, 1)
  }

  onCreateOrder() {
    const resource = this.selectedEmployeesResource.map(item => {
      return <Resource>{
        employee_id: item.employee.id, process_id: item.processes.map(process => {
          return process.id
        })
      }
    })
    this.order.resources = resource
    const deadlineStr = this.order.deadline
    this.order.deadline = new Date(deadlineStr).getTime()
    this.order.deadline = new Date(this.order.deadline).getTime()
    this.customerService.createOrder(this.order).subscribe(newOrder => {
      this.notify.success('Tạo đơn hàng thành công!')
      this.router.navigate([route.rootOrder])
    })
  }

}
