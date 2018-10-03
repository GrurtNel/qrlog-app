import { Injectable } from '@angular/core';
import { HttpService } from '../../x/http/http.service';
import { apiURL } from '../../common/api.common';

@Injectable()
export class OrderService {
    constructor(
        private httpService: HttpService
    ) { }

    createOrder(order) {
        return this.httpService.Post(apiURL.createOrder, order)
    }

    getOrderByID(orderID: string) {
        return this.httpService.Get(apiURL.getOrderByID, { order_id: orderID })
    }

    getOrders() {
        return this.httpService.Get(apiURL.getOrders)
    }

    deleteOrderID(orderID: string) {
        return this.httpService.Get(apiURL.deleteOrder, { id: orderID })
    }

    getAllOrders(customerID: string) {
        return this.httpService.Get(apiURL.getAllOrders, { customer_id: customerID })
    }

    deliveryOrder(id: string) {
        return this.httpService.Get(apiURL.deliveryOrder, { order_id: id })
    }

    generateCSV(orderID: string, quantity: number) {
        return this.httpService.Get(apiURL.generateCSV, { order_id: orderID, quantity: quantity })
    }

}