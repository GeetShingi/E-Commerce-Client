import { Component, OnInit, Inject } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {
	products : Product[];
	selectedProduct : Product;
  errMess: string;
  cart = false;
  constructor(private productservice : ProductService, @Inject('baseURL') private baseURL, 
  private cartservice : CartService) { }

  ngOnInit() {
  	this.productservice.getProducts().subscribe(products => this.products = products, errmess => this.errMess = <any>errmess);
  }

  remove(id: string) {
    if (!this.cart) {
      this.productservice.deleteProduct(id)
        .subscribe(product => { console.log(product);});
    }
  }
}
