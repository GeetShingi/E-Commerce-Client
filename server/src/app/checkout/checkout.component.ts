import { Component, OnInit, Input, Inject, ViewChild, ElementRef } from '@angular/core';
import { Cart } from '../shared/cart';
import { CartService } from '../services/cart.service';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';
import { OrderService } from '../services/orderservice.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  @ViewChild('form') form: ElementRef;
  encRequest: String;
  accessCode: String;
  cart: Cart;
  id: string;
  price: number;
  quantity: number;
  total: number = 0;
  products: any[];
  info: {order_id : string,currency : "INR", amount : number};
  product: Product;
  errMess: string;
  productids: string[];
  constructor(private cartservice : CartService,
    private productservice : ProductService,
    private orderservice : OrderService,
  	@Inject('baseURL') private baseURL) { }

  ngOnInit() {
    this.accessCode = 'YOURACCESSCODEGOESHERE';
  	this.cartservice.getCart()
      .subscribe(cart => {
        this.cart = cart;
        // this.id = cart._id;
        // this.products = cart.products;
        // for(let j of cart.products)
        // {
        //   this.total = this.total + j.price;
        // }
        // this.info.order_id =  "8765432",
        // this.info.amount = this.total;
        errmess => this.errMess = <any>errmess});
    // this.cartservice.getProductIds()
    //   .subscribe(productids => {
    //     this.productids = productids;
    //     console.log(this.productids);
    //     for(let i of this.productids)
    //   {  
    //     this.productservice.getProduct(i)
    //     .subscribe(product => {
    //       this.products.push({name:product.name,description:product.description,image: product.image,price: product.price});
    //     });
    //   }
    //   });
  }

  pay()
  {
      this.orderservice.getEnc(this.info).subscribe((response: any) => {
        this.encRequest = response.encRequest;
        setTimeout(_ => this.form.nativeElement.submit());
      }, error => {
        console.log(error);
      });
    this.orderservice.postOrder(this.products)
    .subscribe(cart => { console.log(cart)});
  }

}
