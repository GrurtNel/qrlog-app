import { Injectable } from '@angular/core';
import { HttpService } from '../x/http/http.service';
import { apiURL } from '../common/api.common';
import { AuthService } from '../x/http/auth.service';
import { Employee } from '../shared/models/employee.model';
import { Order } from '../shared/models/order.model';
import { Process } from '../shared/models/process.model';

@Injectable()
export class CustomerService {
    constructor(
        private httpService: HttpService,
        private authService: AuthService
    ) { }

    getEmployees() {
        return this.httpService.Get(apiURL.getEmployeeByCustomer, { id: this.authService.getUserID() })
    }

    createEmployee(e: Employee) {
        e.customer_id = this.authService.getUserID()
        return this.httpService.Post(apiURL.createEmployee, e)
    }

    getOrders() {
        return this.httpService.Get(apiURL.getOrderByCustomer, { id: this.authService.getUserID() })
    }

    createOrder(o: Order) {
        o.customer_id = this.authService.getUserID()
        return this.httpService.Post(apiURL.createOrderByCustomer, o)
    }

    getOrderHistory(orderID: string) {
        return this.httpService.Get(apiURL.getOrderHistory, { order_id: orderID })
    }

    getOrderTracking(orderID: string) {
        return this.httpService.Get(apiURL.getOrderTracking, { order_id: orderID })
    }

    getProcesses() {
        return this.httpService.Get(apiURL.getProcessesByCustomer)
    }

    createProcess(processName: string) {
        var p = <Process>{ name: processName }
        p.id = this.authService.getUserID()
        return this.httpService.Post(apiURL.createProcessByCustomer, p)
    }

}