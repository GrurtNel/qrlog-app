import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { Employee } from '../../../shared/models/employee.model';
import { Router } from '@angular/router';
import { ToastNotificationService } from '../../../x/http/toast-notification.service';
import { route } from '../../../common/constant.common';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee = <Employee>{}
  constructor(
    private customerService: CustomerService,
    private router: Router,
    private notify: ToastNotificationService
  ) { }

  ngOnInit() {
  }

  onCreate() {
    this.customerService.createEmployee(this.employee).subscribe(res => {
      this.notify.success('Tạo người dùng thành công!')
      this.router.navigate([route.rootEmployee])
    })
  }

}
