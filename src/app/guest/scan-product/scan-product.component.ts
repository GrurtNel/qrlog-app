import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../customer/product/product.service';
import { Product } from '../../shared/models/product.model';
import { Customer } from '../../shared/models/customer.model';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../customer/order/order.service';
import { PublicService } from '../../shared/services/public.service';
import { qrcodeTypes } from '../../common/constant.common';

@Component({
  selector: 'app-scan-product',
  templateUrl: './scan-product.component.html',
  styleUrls: ['./scan-product.component.css']
})
export class ScanProductComponent implements OnInit {
  product = <Product>{}
  customer = <Customer>{}
  scanInfo = {}
  code = ''
  productID = ''
  orderID = ''
  qrcodeType = ''
  isVerify = false
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private publicService: PublicService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(query => {
      // Kiểm tra khi điện thoại vào lại trình duyệt vs cùng request
      this.productID = query.id
      this.orderID = query.order_id
      this.qrcodeType = query.type
      if (this.qrcodeType === qrcodeTypes[1].type) {
        this.code = this.productID.substring(this.productID.length-6, this.productID.length)
      }
    })
  }

  verifyProduct() {
    if (this.qrcodeType === qrcodeTypes[1].type) {
      this.code = ''
    }
    this.productService.scanProduct(this.productID, this.orderID, this.code).subscribe(res => {
      this.product = res.product
      this.customer = res.customer
      this.scanInfo = res.scan_info
      this.isVerify = true
    }, err => {
      // window.location.href = 'http://qrcode-united.mart24h.com/'
    })
  }

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords)
        alert(position.coords.latitude)
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
}

