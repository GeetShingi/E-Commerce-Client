import { Component, OnInit, Input,ViewChild, Inject } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { CartService } from '../services/cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../shared/comment';

@Component({
  selector: 'app-adminproductdetail',
  templateUrl: './adminproductdetail.component.html',
  styleUrls: ['./adminproductdetail.component.css']
})
export class AdminproductdetailComponent implements OnInit {
  prev : string;
  product: Product;
  next : string;
  errMess : string;
  cart = false;
  products = {name: '', description: '', price: '',image: [],xsmall: 0, small: 0, medium: 0,large: 0,xlarge: 0,xxlarge: 0,xxxlarge: 0};
  @ViewChild('cform') commentFormDirective;
  comment: Comment;
formErrors = {
    'comment': ''
  };

  validationMessages = {
    'comment': {
      'required':      'Comment is required.'
    }
  };

  constructor(private productservice : ProductService,
  	private route: ActivatedRoute,
    private location: Location,
    @Inject('baseURL') private baseURL,
    private fb: FormBuilder,
    private cartservice : CartService) { }

  ngOnInit() {
    this.route.params.pipe(switchMap((params: Params) => this.productservice.getProduct(params['id'])))
    .subscribe(product => { this.product = product; },
      errmess => this.errMess = <any>errmess);
      this.products.name = this.product.name;
      this.products.description = this.product.description;
      this.products.price = this.product.price;
      this.products.xsmall = this.product.xsmall;
      this.products.small = this.product.small;
      this.products.medium = this.product.medium;
      this.products.large = this.product.large;
      this.products.xlarge = this.product.xlarge;
      this.products.xxlarge = this.product.xxlarge;
      this.products.xxxlarge = this.product.xxxlarge;
    }

  
  goBack(): void {
    this.location.back();
  }
  remove() {
    if (!this.cart) {
      this.productservice.deleteProduct(this.product._id)
        .subscribe(product => { console.log(product);});
    }
  }
  onSubmit()
  {
    this.productservice.putProduct(this.product)
      .subscribe(product => console.log('product', product));
  }

}
