import { Injectable } from '@angular/core';
import { HttpService } from '../../x/http/http.service';
import { apiURL } from '../../common/api.common';

@Injectable()
export class ProductService {
    constructor(
        private httpService: HttpService
    ) { }

    createProduct(product) {
        return this.httpService.Post(apiURL.createProduct, product)
    }

    getProductByCustomer() {
        return this.httpService.Get(apiURL.getProductByCustomer)
    }

    getProducts(customerID: string) {
        return this.httpService.Get(apiURL.getAllProducts, { customer_id: customerID })
    }
    // ?id=GrMbJ01K0sa5YR5YChVNEMrlpG0PykD7YdJeYIDmdJC70iADLmc8vT7biFa5Vn8DO5ii5RN8qmd_MXtNlN64JKD0
    scanProduct(id, orderID, code) {
        return this.httpService.Get(apiURL.scanProducts, { id: id, order_id: orderID, code: code })
    }
}