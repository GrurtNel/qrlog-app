import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Process } from '../../shared/models/process.model';

@Component({
  selector: 'app-proccess',
  templateUrl: './proccess.component.html',
  styleUrls: ['./proccess.component.css'],
  providers: [CustomerService]
})
export class ProccessComponent implements OnInit {

  processes = <Process[]>[]
  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.customerService.getProcesses().subscribe(res => {
      if (res != null) {
        this.processes = res;
      }
    })
  }

  onCreate(name: string) {
    this.customerService.createProcess(name).subscribe(res => {
      if (res != null) {
        this.processes.push(res)
      }
    })
  }
}
