import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { HomeComponent } from './home/home.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { baseURL } from './shared/baseurl';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AuthInterceptor, UnauthorizedInterceptor } from './services/auth.interceptor';
import { AuthGuardService } from './services/auth-guard.service';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
import { CartService } from './services/cart.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FooterComponent } from './footer/footer.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { FileUploadModule } from 'ng2-file-upload';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { AdminproductdetailComponent } from './adminproductdetail/adminproductdetail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';
import { ViewordersComponent } from './vieworders/vieworders.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductdetailComponent,
    HomeComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    AddproductsComponent,
    ListproductsComponent,
    AdminproductdetailComponent,
    CheckoutComponent,
    OrdersComponent,
    ViewordersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FileUploadModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [ProductService,
  {provide: 'baseURL', useValue: baseURL},
  ProcessHTTPMsgService,
  AuthService,
    AuthGuardService,
    CartService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true
    }
    ],
  entryComponents: [
    LoginComponent,
    SignupComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
