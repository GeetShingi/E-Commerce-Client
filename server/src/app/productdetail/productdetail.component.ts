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
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  product: Product;
  productIds : string[];
  prev : string;
  next : string;
  errMess : string;
  cart = false;
  quantity: number;
  size: string;
  price: number;
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

  commentForm: FormGroup;
  constructor(private productservice : ProductService,
  	private route: ActivatedRoute,
    private location: Location,
    @Inject('baseURL') private baseURL,
    private fb: FormBuilder,
    private cartservice : CartService) { }

  ngOnInit() {
    this.createForm();
  	this.productservice.getProductIds().subscribe(productIds => this.productIds = productIds);
    this.route.params.pipe(switchMap((params: Params) => this.productservice.getProduct(params['id'])))
    .subscribe(product => { this.product = product; },
      errmess => this.errMess = <any>errmess);
  }
  createForm() {
    this.commentForm = this.fb.group({
      rating: 5,
      comment: ['', Validators.required]
    });

    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  onSubmit() {

    this.comment = this.commentForm.value;
    this.productservice.postComment(this.product._id, this.comment)
      .subscribe(product => this.product = <Product>product, );
    this.commentFormDirective.resetForm();
    this.commentForm.reset({
      rating: 5,
      comment: ''
    });
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
  goBack(): void {
    this.location.back();
  }
  addToCart() {
    this.price = +this.product.price*this.quantity;
    if (!this.cart) {
      this.cartservice.postCart(this.product.name,this.product.description,this.quantity,this.size,this.price)
        .subscribe(cart => { console.log(cart); this.cart = true; });
    }
  }
}