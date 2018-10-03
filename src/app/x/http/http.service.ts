import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHandler } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpInterceptor } from '@angular/common/http/src/interceptor';
import { HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

// import { SpinnerService } from '../../app/core/spinner/spinner.service';
import { ToastNotificationService } from './toast-notification.service';

@Injectable()
export class HttpService {
    constructor(
        private http: HttpClient,
        // private spinnerService: SpinnerService,
        private toastService: ToastNotificationService
    ) { }
    
    Get<T>(url: string, params?: any) {
        // this.spinnerService.show();
        return this.http.get<T>(url, { params: params }).map(res => {
            return res['data'];
        }).finally(() => { 
            // this.spinnerService.hide() 
        });
    }

    Post<T>(url: string, body: any) {
        console.log(url, body)
        // this.spinnerService.show();
        return this.http.post(url, body).map(res => {
            return res['data'];
        }).finally(() => { 
            console.log('final')
            // this.spinnerService.hide() 
        });
    }
}

@Injectable()
export class AuthHttpService implements HttpInterceptor {

    constructor(
        private authService: AuthService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${this.authService.getToken()}`
            },
        });
        return next.handle(req);
    }
}


@Injectable()
export class HttpErrorService implements HttpInterceptor {

    constructor(
        private toastService: ToastNotificationService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).do((event: HttpEvent<any>) => {}, (err: any) => {
            // if (err instanceof HttpErrorResponse) {
              
            // }
            if (err instanceof Error) {
                console.error('An error accured', err.message);
            } else {
                switch (err.status) {
                    case 0:
                        this.toastService.error('Rất xin lỗi!!!Server đang bảo trì');
                        break;
                    default:
                        this.toastService.error(err.error['error']);
                        break;
                }
            }
          });
    }
}
