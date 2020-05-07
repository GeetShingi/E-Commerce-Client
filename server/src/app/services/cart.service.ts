import { Injectable } from '@angular/core';
import { Cart } from '../shared/cart';
import { CartExists } from '../shared/cartExists';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { AuthService } from './auth.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient,
    public auth: AuthService,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getCart(): Observable<Cart> {
    if (!this.auth.isLoggedIn()) {
      return null;
    }
    return this.http.get<Cart>(baseURL + 'cart')
      .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  postCarts(productids: any) {
    return this.http.post(baseURL + 'cart/', productids)
    .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  isCart(id: string): Observable<CartExists> {
    if (!this.auth.isLoggedIn()) {
      return of({ exists: false, cart: null });
    }
    return this.http.get<CartExists>(baseURL + 'cart/' + id)
    .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  postCart(name: string,description: string,quantity: number,size: string,price: number) {
    return this.http.post(baseURL + 'cart/', {'name': name,'description': description, 'quantity': quantity, 'size': size, 'price': price})
    .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }

  deleteCart(id: string,productid: string) {
    return this.http.delete(baseURL + 'cart/' + id + '/products/' + productid)
    .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
  // getProductIds(): Observable<number[] | any> {
  //   return this.getCart().pipe(map(cart => cart.products.map(product => product.productid)))
  //     .pipe(catchError(error => error));
  // }
}

