import { Component, OnInit, Inject } from '@angular/core';
import { Cart } from '../shared/cart';
import { CartService } from '../services/cart.service';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';
import { CartProducts } from '../shared/cartproducts';
import { baseURL } from '../shared/baseurl';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart;
  id: string;
  total: number = 0;
  products: any = [];
  product: Product;
  errMess: string;
  productids: string[];
  constructor(private cartservice : CartService,
    private productservice : ProductService,
    @Inject('baseURL') private baseURL) { }
  ngOnInit() {
  	this.cartservice.getCart()
      .subscribe(cart => {
        this.cart = cart;
        // this.id = cart._id;
        // for(let j of cart.products)
        // {
        //   this.total = this.total + j.price;
        // }
        errmess => this.errMess = <any>errmess});
    // this.cartservice.getProductIds()
    //   .subscribe(productids => {
    //     this.productids = productids;
    //     console.log(this.productids);
    //     for(let i of this.productids)
    //   {  
    //     this.productservice.getProduct(i)
    //     .subscribe(product => {
    //       this.products.push({name:product.name,description:product.description,image: product.image});
    //     });
    //   }
    //   });
  }
  deleteCart(productid: string) {
    console.log(this.id);
    console.log(this.product);
    console.log('Deleting Product ' + this.id);
    this.cartservice.deleteCart(this.id,productid)
      .subscribe(cart => this.cart = <Cart>cart,
        errmess => this.errMess = <any>errmess);
  }

}
