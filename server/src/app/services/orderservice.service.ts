import { Injectable } from '@angular/core';
import { Orders } from '../shared/order';
import { of,Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http : HttpClient, 
    public auth: AuthService,
    private processHTTPMsgService : ProcessHTTPMsgService) { }

    getOrder(): Observable<Orders> {
      if (!this.auth.isLoggedIn()) {
        return null;
      }
      return this.http.get<Orders>(baseURL + 'orders')
        .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
    }
    postOrder(products: any[]) {
      return this.http.post(baseURL + 'orders/', {"products": products})
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
    }
    getOrders(): Observable<Orders[]> {
      if (!this.auth.isLoggedIn()) {
        return null;
      }
      return this.http.get<Orders[]>(baseURL + 'orders/admin')
        .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
    }
    getEnc(info : any) {
      return this.http.post(baseURL + 'checkout', {"info": info})
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
    }
}
