import { Injectable } from '@angular/core';
import { HttpService } from '../x/http/http.service';
import { apiURL } from '../common/api.common';

@Injectable()
export class AuthService {
    constructor(
        private httpService: HttpService
    ) { }

    login(loginInfo: any, isAdmin: boolean) {
        if (isAdmin) {
            return this.httpService.Post(apiURL.loginByAdmin, loginInfo)
        }
        return this.httpService.Post(apiURL.loginByCustomer, loginInfo)
    }

    logout() {
        return this.httpService.Post(apiURL.logout, null)
    }
}