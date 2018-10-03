import { Component, OnInit } from '@angular/core';
import { Employee } from '../../shared/models/employee.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = []
  constructor(
    private customerService: CustomerService,
  ) { }

  ngOnInit() {
    this.customerService.getEmployees().subscribe(res => {
      this.employees = res
    })
  }

}
