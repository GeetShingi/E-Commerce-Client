import { Component, OnInit, Inject } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
	products : Product[];
	selectedProduct : Product;
  errMess: string;
  cart = false;
  quantity:number = 1;
  constructor(private productservice : ProductService, @Inject('baseURL') private baseURL, 
  private cartservice : CartService) { }

  ngOnInit() {
  	this.productservice.getProducts().subscribe(products => this.products = products, errmess => this.errMess = <any>errmess);
  }

  // addToCart(id: string) {
  //   if (!this.cart) {
  //     this.cartservice.postCart(id,this.quantity,this.size)
  //       .subscribe(cart => { console.log(cart); this.cart = true; });
  //   }
  // }
}
