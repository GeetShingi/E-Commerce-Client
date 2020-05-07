import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../shared/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
  filesToUpload: Array<File> = [];
  images: string[] = [];
  @ViewChild('pform') commentFormDirective;
  product = {name: '', description: '', price: '',image: [],xsmall: 0, small: 0, medium: 0,large: 0,xlarge: 0,xxlarge: 0,xxxlarge: 0};
formErrors = {
    'comment': ''
  };

  validationMessages = {
    'name': {
      'required':      'Name is required.'
    },
    'description': {
      'required':  'Description is required.'
    },
    'quantity': {
      'required': 'Quantity is required.'
    }
  };

  productForm: FormGroup;
  constructor(private productservice : ProductService,private fb: FormBuilder) { }

  ngOnInit() {
  }
  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;

    for(let i =0; i < files.length; i++){
        formData.append("uploads[]", files[i], files[i]['name']);
        this.images.push(files[i].name);
    }
    // this.product.image = this.images;
    this.productservice.postImage(formData)
      .subscribe(files => console.log('files', files));

  }
  onSubmit()
  {
    this.product.image = this.images;
    console.log(this.product);
    this.productservice.postProduct(this.product)
      .subscribe(product => console.log('product', product));
  }
  // createForm() {
  //   this.productForm = this.fb.group({
  //     name: ['',Validators.required],
  //     description: ['',Validators.required],
  //     price: ['',Validators.required]
  //   });

  //   this.productForm.valueChanges
  //     .subscribe(data => this.onValueChanged(data));

  //   this.onValueChanged(); // (re)set validation messages now
  // }

  // onSubmit() {

  //   this.product = this.productForm.value;
  //   this.productservice.postProduct(this.product)
  //     .subscribe(product => this.product = <Product>product, );
  //   this.commentFormDirective.resetForm();
  //   this.productForm.reset({
  //     name: '',
  //     description: '',
  //     price: ''
  //   });
  // }

  // onValueChanged(data?: any) {
  //   if (!this.productForm) { return; }
  //   const form = this.productForm;
  //   for (const field in this.formErrors) {
  //     if (this.formErrors.hasOwnProperty(field)) {
  //       // clear previous error message (if any)
  //       this.formErrors[field] = '';
  //       const control = form.get(field);
  //       if (control && control.dirty && !control.valid) {
  //         const messages = this.validationMessages[field];
  //         for (const key in control.errors) {
  //           if (control.errors.hasOwnProperty(key)) {
  //             this.formErrors[field] += messages[key] + ' ';
  //           }
  //         }
  //       }
  //     }
  //   }
  // }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //this.product.photo = fileInput.target.files[0]['name'];
  }
}