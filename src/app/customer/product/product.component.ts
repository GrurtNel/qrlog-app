import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  products: Product[] = []
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(res => {
      console.log(res)
      this.products = res;
    })
  }

}
