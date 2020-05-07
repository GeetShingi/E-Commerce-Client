import { Injectable } from '@angular/core';
import { Product } from '../shared/product';
import { of,Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient, private processHTTPMsgService : ProcessHTTPMsgService) { }
  getProducts(): Observable<Product[]> {
  	return this.http.get<Product[]>(baseURL + 'products')
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(baseURL + 'products/' + id)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
  // getProductId(id: string): Observable<Product[]> {
  //   return this.http.get<Product[]>(baseURL + 'products?_id=')
  //   .pipe(catchError(this.processHTTPMsgService.handleError));
  // }
  getFeaturedProduct(): Observable<Product> {
    return this.http.get<Product[]>(baseURL + 'products?featured=true').pipe(map(products => products[0]))
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
  getProductIds(): Observable<string[] | any> {
	return this.getProducts().pipe(map(products => products.map(product => product._id)))
  .pipe(catchError(this.processHTTPMsgService.handleError));  
  }
  postImage(images: File[]) {
    return this.http.post(baseURL + 'imageUpload/',images)
    .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
  postProduct(product: any): Observable<any> {
    return this.http.post(baseURL + 'products/',{'name': product.name, 'description': product.description, 'price': product.price, 'image': product.image, 'xsmall': product.xsmall, 'small': product.small, 'medium': product.medium, 'large': product.large, 'xlarge': product.xlarge, 'xxlarge': product.xxlarge, 'xxxlarge': product.xxxlarge})
    .pipe( map(res => {
      return {'success': true, 'name': product.name };
   }),
   catchError(error => this.processHTTPMsgService.handleError(error)));
 } 
 putProduct(product: any): Observable<any> {
  return this.http.put(baseURL + 'products/' + product._id,{'name': product.name, 'description': product.description, 'price': product.price, 'xsmall': product.xsmall, 'small': product.small, 'medium': product.medium, 'large': product.large, 'xlarge': product.xlarge, 'xxlarge': product.xxlarge, 'xxxlarge': product.xxxlarge})
  .pipe( map(res => {
    return {'success': true, 'name': product.name };
 }),
 catchError(error => this.processHTTPMsgService.handleError(error)));
} 
  postComment(productId: string, comment: any) {
    return this.http.post(baseURL + 'products/' + productId + '/comments', comment)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
  deleteProduct(id: string) {
    return this.http.delete(baseURL + 'products/' + id)
    .pipe(catchError(error => this.processHTTPMsgService.handleError(error)));
  }
}