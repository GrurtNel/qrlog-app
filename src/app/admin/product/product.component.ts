import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from '../../shared/models/product.model';
import { Customer } from '../../shared/models/customer.model';
import { CustomerService } from '../customer/customer.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  products: Product[] = []
  customers: Customer[] = []
  customerFilter = ''
  constructor(
    private productService: ProductService,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.getAllProduct('')
    this.getAllCustomer()
  }

  onFilter(customer: string) {
    this.customerFilter = customer
    this.getAllProduct(customer)
  }

  getAllProduct(customer: string) {
    this.productService.getProducts(customer).subscribe(res => {
      this.products = res;
    })
  }

  getAllCustomer() {
    this.customerService.getCustomers().subscribe(customers => {
      this.customers = customers;
    })
  }

}
