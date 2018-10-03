import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { qrcodeTypes, route } from '../../../common/constant.common';
import { OrderService } from '../order.service';
import { ProductService } from '../../product/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastNotificationService } from '../../../x/http/toast-notification.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit, OnDestroy {

  order = {
    name: '',
    type: qrcodeTypes[0].type,
    customer_id: '',
    quantity: 1000,
    product_id: '',
    url: '',
  }
  types = qrcodeTypes
  productSelect = []
  constructor(
    private orderService: OrderService,
    private productService: ProductService,
    private router: Router,
    private notify: ToastNotificationService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.order.customer_id = params.customer_id
      this.getProduct(params.customer_id)
    })

  }

  ngOnDestroy(): void {
  }

  getProduct(customerID: string) {
    this.productService.getProducts(customerID).subscribe(product => {
      if (product) {
        this.productSelect = product
        this.order.product_id = product[0].id
      }
    })
  }
  onRegister() {
    this.orderService.createOrder(this.order).subscribe(newOrder => {
      this.notify.success('Tạo đơn hàng thành công!')
      this.router.navigate([route.rootOrder])
    })
  }
}
