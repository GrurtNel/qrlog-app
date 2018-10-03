import { Injectable } from '@angular/core';
import { HttpService } from '../../x/http/http.service';
import { apiURL } from '../../common/api.common';

@Injectable()
export class PublicService {
    constructor(
        private httpService: HttpService
    ) { }
    
    scanMarketing(orderID: string) {
        return this.httpService.Get(apiURL.scanMarketing, { "order_id": orderID })
    }
}