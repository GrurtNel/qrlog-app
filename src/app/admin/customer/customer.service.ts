import { Injectable } from '@angular/core';
import { HttpService } from '../../x/http/http.service';
import { apiURL } from '../../common/api.common';

@Injectable()
export class CustomerService {
    constructor(
        private httpService: HttpService
    ) { }

    getCustomers() {
        return this.httpService.Get(apiURL.getAllCustomers)
    }
}