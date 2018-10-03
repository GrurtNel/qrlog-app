import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/models/order.model';
import { qrcodeTypesMap } from '../../common/constant.common';
import { HttpClient } from '@angular/common/http';
import { apiURL } from '../../common/api.common';
import { AuthService } from '../../x/http/auth.service';
import { CustomerService } from '../customer/customer.service';
import { Customer } from '../../shared/models/customer.model';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  orders: Order[]
  customers: Customer[] = []
  qrcodeTypesMap = qrcodeTypesMap
  selectedOrder: Order
  quantity: number
  endpoint = 'http://app.qrcode-united.com/app/#/marketing/scan?order_id='
  customerFilter = ''
  constructor(
    private orderService: OrderService,
    private http: HttpClient,
    private authService: AuthService,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.getAllCustomer()
    this.getAllOrder('')
  }

  onDelivery(order: Order) {
    // this.orderService.deliveryOrder(order.id).subscribe(res => {
    //   order.activated = true
    // })
  }
  
  onGenerateCSV() {
    // let headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');
    // headers.append('responseType', 'blob');
    // this.http.get(`${apiURL.generateCSV}?order_id=${this.selectedOrder.id}&quantity=${this.quantity}`, {
    //   headers: headers
    // }).subscribe()
    window.open(`${apiURL.generateCSV}?order_id=${this.selectedOrder.id}&quantity=${this.quantity}&access_token=${this.authService.getToken()}`, '_blank')
  }

  onFilter(customer: string) {
    this.customerFilter = customer
    this.getAllOrder(customer)
  }

  getAllOrder(customer: string) {
    this.orderService.getAllOrders(customer).subscribe(orders => {
      this.orders = orders;
    })
  }

  getAllCustomer() {
    this.customerService.getCustomers().subscribe(customers => {
      this.customers = customers;
    })
  }
}
