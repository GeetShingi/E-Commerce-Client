import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import {Product } from '../shared/product';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	product : Product;
	errMess: string;
  constructor(private productservice : ProductService,@Inject('baseURL') private baseURL) { }

  ngOnInit() {
   this.productservice.getFeaturedProduct().subscribe(product => this.product = product,errmess => this.errMess = <any>errmess);
  }

}
